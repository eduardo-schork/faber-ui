'use client';

import { CheckIcon, PlusIcon } from '@faber-ui/icons';
import {
  Accordion,
  AccordionItem,
  Alert,
  ALERT_COLORS,
  Avatar,
  Badge,
  BADGE_COLORS,
  Button,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Checkbox,
  createTokenCSSVariables,
  Divider,
  Field,
  FLEX_ALIGNS,
  FLEX_WRAPS,
  HFlex,
  IconButton,
  Input,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Segment,
  SegmentedControl,
  SEGMENTED_CONTROL_SIZES,
  Select,
  Slider,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
  THEME_MODES,
  THEME_VARIABLE_NAMES,
  ThemeProvider,
  Title,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  VFlex,
} from '@faber-ui/react';
import { useCallback, useId, useState } from 'react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import { DocsSection, DocsSectionTitle } from '@/components/docs-layout/docs-layout.styles';
import { DocsLayout, type TDocsSectionLink } from '@/components/docs-layout/docs-layout.ui';
import { OptionSwitch } from '@/components/option-switch/option-switch.ui';
import { Caption, Prose } from '@/components/sheet/sheet.styles';
import { useSitePreferences } from '@/hooks/use-site-preferences';
import type { TColorScheme } from '@/site/materials';

import {
  EditorColumn,
  PlaygroundGrid,
  PresetList,
  PreviewCard,
  PreviewHead,
  PreviewSurface,
  ReferenceList,
  StylesheetEditor,
} from './playground-page.styles';
import { PLAYGROUND_PRESETS, type TPlaygroundPresetId } from './playground-presets';
import { PLAYGROUND_PREVIEW_CLASS, scopePlaygroundCss } from './scope-playground-css';

const SECTIONS: readonly TDocsSectionLink[] = [
  { id: 'editor', label: 'Stylesheet and preview' },
  { id: 'reference', label: 'What you can target' },
  { id: 'in-your-app', label: 'In your application' },
];

const PREVIEW_SCHEMES = ['site', 'light', 'dark'] as const;

type TPreviewScheme = (typeof PREVIEW_SCHEMES)[number];

const PART_CLASS_PREFIX = 'faber-ui-';
const COLOR_VARIABLES = Object.values(THEME_VARIABLE_NAMES);
const TOKEN_VARIABLES = Object.keys(createTokenCSSVariables());

const APPLICATION_CODE = `/* app.css, loaded after '@faber-ui/react/styles.css' */

/* 1. Retune tokens for the whole application... */
:root {
  --faber-ui-radius-md: 0px;
  --faber-ui-color-primary: hsl(262 52% 47%);
}

/* ...or for one region. */
.billing {
  --faber-ui-size-md: 32px;
}

/* 2. Restyle one part of a component, anywhere. */
.faber-ui-button-icon {
  color: var(--faber-ui-color-accent);
}`;

const collectPartClasses = (preview: HTMLElement) =>
  Array.from(
    new Set(
      Array.from(preview.querySelectorAll<HTMLElement>(`[class*="${PART_CLASS_PREFIX}"]`)).flatMap(
        (element) =>
          Array.from(element.classList).filter((className) =>
            className.startsWith(PART_CLASS_PREFIX),
          ),
      ),
    ),
  ).sort();

/** A small product surface built only from library components, for the stylesheet to act on. */
function PlaygroundPreview() {
  const [page, setPage] = useState(2);

  return (
    <PreviewSurface>
      <HFlex align={FLEX_ALIGNS.CENTER} gap="SM" wrap={FLEX_WRAPS.WRAP}>
        <Avatar alt="" fallback="FW" />
        <VFlex style={{ flex: 1, minWidth: 0 }}>
          <Title.H3 size={TYPOGRAPHY_SIZES.MEDIUM}>Foundry workspace</Title.H3>
          <Text.Small tone={TYPOGRAPHY_TONES.SECONDARY}>4 members · Frankfurt</Text.Small>
        </VFlex>
        <Badge color={BADGE_COLORS.PRIMARY}>Active</Badge>
        <Badge color={BADGE_COLORS.ACCENT}>Beta</Badge>
      </HFlex>

      <HFlex align={FLEX_ALIGNS.CENTER} gap="SM" wrap={FLEX_WRAPS.WRAP}>
        <Button startIcon={<CheckIcon />}>Save changes</Button>
        <Button variant={BUTTON_VARIANTS.OUTLINE}>Preview</Button>
        <Button color={BUTTON_COLORS.ACCENT} variant={BUTTON_VARIANTS.LIGHT}>
          Archive
        </Button>
        <Button color={BUTTON_COLORS.NEUTRAL} variant={BUTTON_VARIANTS.SUBTLE}>
          Cancel
        </Button>
        <IconButton aria-label="Add member" size={BUTTON_SIZES.SMALL}>
          <PlusIcon />
        </IconButton>
      </HFlex>

      <Tabs defaultValue="general">
        <TabList aria-label="Workspace settings">
          <Tab value="general">General</Tab>
          <Tab value="access">Access</Tab>
          <Tab value="usage">Usage</Tab>
        </TabList>

        <TabPanel value="general">
          <VFlex gap="MD">
            <Field label="Workspace name" description="Shown in the sidebar and in invitations.">
              <Input name="playground-name" defaultValue="Foundry" autoComplete="off" />
            </Field>
            <Field label="Region">
              <Select name="playground-region" defaultValue="fra">
                <option value="fra">Frankfurt</option>
                <option value="gru">São Paulo</option>
              </Select>
            </Field>
            <SegmentedControl label="Density" size={SEGMENTED_CONTROL_SIZES.SMALL}>
              <Segment name="playground-density" value="comfortable" defaultChecked>
                Comfortable
              </Segment>
              <Segment name="playground-density" value="compact">
                Compact
              </Segment>
            </SegmentedControl>
          </VFlex>
        </TabPanel>

        <TabPanel value="access">
          <VFlex gap="MD">
            <RadioGroup label="Visibility">
              <Radio label="Private" name="playground-visibility" value="private" defaultChecked />
              <Radio label="Anyone with the link" name="playground-visibility" value="link" />
            </RadioGroup>
            <Switch label="Deploy previews" name="playground-previews" defaultChecked />
            <Checkbox
              label="Email me when a deploy fails"
              name="playground-alerts"
              defaultChecked
            />
          </VFlex>
        </TabPanel>

        <TabPanel value="usage">
          <VFlex gap="MD">
            <Progress label="Storage used" value={64} max={100} />
            <Field label="Build concurrency">
              <Slider name="playground-concurrency" min={1} max={12} defaultValue={4} />
            </Field>
            <Pagination count={8} page={page} onPageChange={setPage} />
          </VFlex>
        </TabPanel>
      </Tabs>

      <Divider />

      <Alert title="Trial ends in 3 days" color={ALERT_COLORS.ACCENT}>
        Add a payment method to keep the workspace.
      </Alert>
    </PreviewSurface>
  );
}

export function PlaygroundPage() {
  const editorId = useId();
  const { scheme: siteScheme } = useSitePreferences();
  const [presetId, setPresetId] = useState<TPlaygroundPresetId | null>('untouched');
  const [css, setCss] = useState<string>(PLAYGROUND_PRESETS[0].css);
  const [previewScheme, setPreviewScheme] = useState<TPreviewScheme>('site');
  const [partClasses, setPartClasses] = useState<readonly string[]>([]);
  const activePreset = PLAYGROUND_PRESETS.find(({ id }) => id === presetId);
  const resolvedScheme: TColorScheme = previewScheme === 'site' ? siteScheme : previewScheme;

  // The class list is read from the rendered preview, so it shows exactly what can be targeted.
  const readPartClasses = useCallback((preview: HTMLDivElement | null) => {
    if (preview !== null) {
      setPartClasses(collectPartClasses(preview));
    }
  }, []);

  return (
    <DocsLayout
      kicker="Playground"
      title="Rewrite it without touching it."
      lead="Edit the stylesheet and watch a real interface change. Nothing in the preview is wrapped or forked: it is the library as published, restyled only through CSS variables and part class names."
      sections={SECTIONS}
    >
      <DocsSection id="editor" aria-labelledby="editor-title">
        <DocsSectionTitle id="editor-title">Stylesheet and preview</DocsSectionTitle>
        <Prose>
          Pick a starting point, then change anything. The stylesheet is scoped to the preview, and{' '}
          <Text.Code>:root</Text.Code> stands for the preview itself.
        </Prose>

        <style>{scopePlaygroundCss(css)}</style>

        <PlaygroundGrid>
          <EditorColumn>
            <PresetList role="group" aria-label="Starting points">
              {PLAYGROUND_PRESETS.map((preset) => (
                <Button
                  key={preset.id}
                  aria-pressed={preset.id === presetId}
                  color={BUTTON_COLORS.NEUTRAL}
                  size={BUTTON_SIZES.SMALL}
                  variant={
                    preset.id === presetId ? BUTTON_VARIANTS.FILLED : BUTTON_VARIANTS.OUTLINE
                  }
                  onClick={() => {
                    setPresetId(preset.id);
                    setCss(preset.css);
                  }}
                >
                  {preset.label}
                </Button>
              ))}
            </PresetList>

            <Field
              label="Stylesheet"
              description={activePreset?.note ?? 'Your own rules. Pick a starting point to reset.'}
            >
              <StylesheetEditor
                id={editorId}
                name="playground-css"
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
                value={css}
                onChange={(event) => {
                  setCss(event.target.value);
                  setPresetId(null);
                }}
              />
            </Field>
          </EditorColumn>

          <PreviewCard>
            <PreviewHead>
              <Caption data-tone="ink">Preview — library components only</Caption>
              <OptionSwitch
                label="Theme"
                options={PREVIEW_SCHEMES}
                value={previewScheme}
                onChange={setPreviewScheme}
              />
            </PreviewHead>
            <ThemeProvider mode={resolvedScheme === 'dark' ? THEME_MODES.DARK : THEME_MODES.LIGHT}>
              <div ref={readPartClasses} className={PLAYGROUND_PREVIEW_CLASS}>
                <PlaygroundPreview />
              </div>
            </ThemeProvider>
          </PreviewCard>
        </PlaygroundGrid>
      </DocsSection>

      <DocsSection id="reference" aria-labelledby="reference-title">
        <DocsSectionTitle id="reference-title">What you can target</DocsSectionTitle>
        <Prose>
          Two kinds of names are public. Variables change a value everywhere it is read; part
          classes select one piece of one component.
        </Prose>
        <Accordion>
          <AccordionItem
            summary={`Color and font variables (${String(COLOR_VARIABLES.length + 1)})`}
          >
            <ReferenceList>
              <li>--faber-ui-font-family-base</li>
              {COLOR_VARIABLES.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ReferenceList>
          </AccordionItem>
          <AccordionItem
            summary={`Dimension and type variables (${String(TOKEN_VARIABLES.length)})`}
          >
            <ReferenceList>
              {TOKEN_VARIABLES.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ReferenceList>
          </AccordionItem>
          <AccordionItem
            summary={`Part classes in this preview (${String(partClasses.length)})`}
            open
          >
            <ReferenceList>
              {partClasses.map((name) => (
                <li key={name}>.{name}</li>
              ))}
            </ReferenceList>
          </AccordionItem>
        </Accordion>
      </DocsSection>

      <DocsSection id="in-your-app" aria-labelledby="in-your-app-title">
        <DocsSectionTitle id="in-your-app-title">In your application</DocsSectionTitle>
        <Prose>
          What you typed above is ordinary CSS. In an application it goes in any stylesheet loaded
          after the library one, with no build step and no provider.
        </Prose>
        <CodeBlock code={APPLICATION_CODE} label="app.css" language="css" />
      </DocsSection>
    </DocsLayout>
  );
}
