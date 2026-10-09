'use client';

import { CheckIcon, PlusIcon, TrashIcon } from '@faber-ui/icons';
import {
  ALERT_COLORS,
  Alert,
  AlertBody,
  AlertTitle,
  Avatar,
  BADGE_COLORS,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Badge,
  Box,
  Button,
  Checkbox,
  DARK_THEME,
  Dialog,
  DialogClose,
  DialogRoot,
  DialogTitle,
  Divider,
  FLEX_ALIGNS,
  FLEX_WRAPS,
  Field,
  HFlex,
  INPUT_TYPES,
  IconButton,
  Input,
  ListItem,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  SEGMENTED_CONTROL_SIZES,
  Segment,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  THEME_MODES,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
  ThemeProvider,
  Title,
  VFlex,
  type TTheme,
} from '@faber-ui/react';
import { useCallback, useId, useState } from 'react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import {
  DemoSurface,
  DocsColumns,
  DocsSection,
  DocsSectionTitle,
  DocsStack,
  LayerTable,
} from '@/components/docs-layout/docs-layout.styles';
import { DocsLayout, type TDocsSectionLink } from '@/components/docs-layout/docs-layout.ui';
import { OptionSwitch } from '@/components/option-switch/option-switch.ui';
import { Caption, Prose, TextLink } from '@/components/sheet/sheet.styles';
import { useSitePreferences } from '@/hooks/use-site-preferences';
import { createMaterialSnippet, getMaterial, type TColorScheme } from '@/site/materials';

import {
  ActionAlertMessage,
  ActionAlertRoot,
  DemoStage,
  DemoToolbar,
  EditorColumn,
  PlanCard,
  PlanCardHeader,
  PlaygroundGrid,
  PresetList,
  PreviewCard,
  PreviewHead,
  PreviewSurface,
  ReferenceList,
  SheetActions,
  SheetBody,
  SheetCorner,
  SheetMark,
  StylesheetEditor,
  ThemedSurface,
} from './customization-page.styles';
import { PLAYGROUND_PRESETS, type TPlaygroundPresetId } from './playground-presets';
import { PLAYGROUND_PREVIEW_CLASS, scopePlaygroundCss } from './scope-playground-css';

const SECTIONS: readonly TDocsSectionLink[] = [
  { id: 'levels', label: 'Five levels' },
  { id: 'themes', label: 'Themes' },
  { id: 'variables', label: 'Variables and fonts' },
  { id: 'classes', label: 'Part classes' },
  { id: 'tokens', label: 'Tokens' },
  { id: 'parts', label: 'Parts' },
];

const LEVELS = [
  {
    scope: 'A documented variation',
    tool: 'Typed props',
    example: '<Button variant="outline" size="small" />',
  },
  {
    scope: 'The look of one part',
    tool: 'A part class or styled()',
    example: '.faber-ui-dialog-header { … }',
  },
  {
    scope: 'A brand color or a whole theme',
    tool: 'CSS variables',
    example: '--faber-ui-color-primary: …',
  },
  {
    scope: 'A new component in the same language',
    tool: 'Tokens in your own styles',
    example: 'border-radius: ${RADII.XL};',
  },
  {
    scope: 'A different structure',
    tool: 'The parts, assembled by you',
    example: '<DialogRoot><DialogBody />…</DialogRoot>',
  },
] as const;

const PART_SETS = [
  {
    component: 'RadioCard',
    parts: 'RadioCardRoot, RadioCardInput, RadioCardContent, RadioCardLabel, RadioCardDescription',
  },
  {
    component: 'ColorSwatch',
    parts: 'ColorSwatchRoot, ColorSwatchSample, ColorSwatchLabel, ColorSwatchValue',
  },
  { component: 'Listbox', parts: 'Listbox, ListboxOption, ListboxGroup, ListboxSeparator' },
  {
    component: 'EmptyState',
    parts:
      'EmptyStateRoot, EmptyStateMedia, EmptyStateTitle, EmptyStateDescription, EmptyStateActions',
  },
  {
    component: 'Stat',
    parts: 'StatRoot, StatLabel, StatFigure, StatValue, StatChange, StatHelper',
  },
  {
    component: 'Dialog',
    parts: 'DialogRoot, DialogHeader, DialogTitle, DialogClose, DialogBody, DialogFooter',
  },
  { component: 'Alert', parts: 'AlertRoot, AlertTitle, AlertBody' },
  { component: 'Toast', parts: 'ToastRoot, ToastContent, ToastTitle, ToastBody' },
  { component: 'Field', parts: 'FieldRoot, FieldLabel, FieldDescription, FieldError' },
  { component: 'Accordion', parts: 'AccordionItemRoot, AccordionSummary, AccordionContent' },
  {
    component: 'Button',
    parts: 'ButtonRoot, ButtonContent, ButtonIcon, ButtonLabel, ButtonSpinner',
  },
  {
    component: 'RadioGroup',
    parts: 'RadioGroupRoot, RadioGroupLabel, RadioGroupOptions, RadioGroupMessage, RadioGroupError',
  },
  {
    component: 'Pagination',
    parts: 'PaginationRoot, PaginationList, PaginationButton, PaginationEllipsis',
  },
  {
    component: 'Checkbox, Radio, Switch',
    parts:
      'ChoiceControlRoot, ChoiceControlLabel, ChoiceControlInput, ChoiceControlDescription, ChoiceControlError',
  },
  {
    component: 'CodeBlock',
    parts: 'CodeBlockRoot, CodeBlockHeader, CodeBlockLabel, CodeBlockPre, CodeBlockCopy',
  },
  { component: 'Tabs', parts: 'Tabs, TabList, Tab, TabPanel' },
  { component: 'Menu', parts: 'Menu, MenuItem, MenuLabel, MenuSeparator' },
  { component: 'Breadcrumb', parts: 'Breadcrumb, BreadcrumbItem' },
  { component: 'SegmentedControl', parts: 'SegmentedControl, Segment' },
] as const;

// A complete custom theme. Leaving out or misspelling a role is a compile error.
const BLUEPRINT_THEME = {
  ...DARK_THEME,
  BACKGROUND_PRIMARY: 'hsl(222 47% 12%)',
  SURFACE_PRIMARY: 'hsl(222 42% 17%)',
  BORDER_DEFAULT: 'hsl(222 30% 30%)',
  BORDER_STRONG: 'hsl(222 26% 44%)',
  DISABLED_BACKGROUND: 'hsl(222 36% 22%)',
  PRIMARY: 'hsl(48 96% 64%)',
  PRIMARY_HOVER: 'hsl(46 92% 56%)',
  PRIMARY_ACTIVE: 'hsl(44 88% 48%)',
  ON_PRIMARY: 'hsl(222 47% 12%)',
  ACCENT: 'hsl(190 90% 68%)',
  ACCENT_HOVER: 'hsl(190 84% 60%)',
  ACCENT_ACTIVE: 'hsl(190 76% 52%)',
  ON_ACCENT: 'hsl(222 47% 12%)',
  FOCUS_RING: 'hsl(190 90% 68%)',
} as const satisfies TTheme;

const SUBTREE_THEMES = ['light', 'dark', 'blueprint'] as const;

type TSubtreeTheme = (typeof SUBTREE_THEMES)[number];

const PREVIEW_SCHEMES = ['site', 'light', 'dark'] as const;

type TPreviewScheme = (typeof PREVIEW_SCHEMES)[number];

const PART_CLASS_PREFIX = 'faber-ui-';

const CSS_ONLY_CODE = `<!-- The stylesheet defines every role for these three values. -->
<html data-theme="system">
  <body>
    <aside data-theme="dark">This panel is always dark.</aside>
  </body>
</html>`;

const SUBTREE_CODE = `import { DARK_THEME, ThemeProvider } from '@faber-ui/react';
import type { TTheme } from '@faber-ui/react';

// A built-in mode for a region of the page.
<ThemeProvider mode="dark">
  <SignInCard />
</ThemeProvider>

// Or a complete theme of your own. A missing role does not compile.
const BLUEPRINT = {
  ...DARK_THEME,
  BACKGROUND_PRIMARY: 'hsl(222 47% 12%)',
  PRIMARY: 'hsl(48 96% 64%)',
  ON_PRIMARY: 'hsl(222 47% 12%)',
} as const satisfies TTheme;

<ThemeProvider theme={BLUEPRINT}>
  <SignInCard />
</ThemeProvider>`;

const FONT_OVERRIDE_CODE = `/* Globally, or on any element for a subtree. */
:root {
  --faber-ui-font-family-base: 'Inter', Arial, sans-serif;
}`;

const TOKENS_CODE = `import { Card, COLORS, RADII, SPACINGS } from '@faber-ui/react';
import styled from 'styled-components';

// Your component, drawn with the same tokens the library uses.
// It follows every theme and every variable override for free.
export const PlanCard = styled(Card)\`
  display: flex;
  flex-direction: column;
  gap: \${SPACINGS.SM};
  border-color: \${COLORS.PRIMARY};
  border-radius: \${RADII.XL};
  box-shadow: \${SPACINGS.XXS} \${SPACINGS.XXS} 0 \${COLORS.PRIMARY};
\`;`;

const DIALOG_CODE = `import {
  Button,
  DialogBody,
  DialogClose,
  DialogRoot,
  DialogTitle,
} from '@faber-ui/react';

// SheetBody is styled(DialogBody); the corner and actions are plain flex rows.
// No header bar and no footer row: the same modal behavior, another layout.
<DialogRoot open={open} onClose={close}>
  <SheetCorner>
    <DialogClose />
  </SheetCorner>
  <SheetBody>
    <TrashIcon />
    <DialogTitle>Delete this project?</DialogTitle>
    <Text.P tone="secondary">Its deployments go with it.</Text.P>
  </SheetBody>
  <SheetActions>
    <Button color="accent" fullWidth onClick={remove}>Delete</Button>
    <Button color="neutral" variant="subtle" fullWidth onClick={close}>
      Keep it
    </Button>
  </SheetActions>
</DialogRoot>`;

const ALERT_CODE = `import { AlertBody, AlertRoot, AlertTitle, Button, VFlex } from '@faber-ui/react';
import styled from 'styled-components';

const ActionAlertRoot = styled(AlertRoot)\`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
\`;

export function ActionAlert({ action, children, title, ...rootProps }) {
  return (
    <ActionAlertRoot {...rootProps}>
      <VFlex gap="XXS">
        <AlertTitle>{title}</AlertTitle>
        <AlertBody>{children}</AlertBody>
      </VFlex>
      {action}
    </ActionAlertRoot>
  );
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

function SignInCard() {
  return (
    <ThemedSurface>
      <Box>
        <Title.H3>Sign in</Title.H3>
        <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>Use the address you registered with.</Text.P>
      </Box>
      <Field label="Email">
        <Input name="subtree-email" type={INPUT_TYPES.EMAIL} placeholder="you@example.com" />
      </Field>
      <Checkbox label="Keep me signed in" name="subtree-remember" defaultChecked />
      <HFlex gap="SM" wrap={FLEX_WRAPS.WRAP}>
        <Button>Continue</Button>
        <Button color={BUTTON_COLORS.ACCENT} variant={BUTTON_VARIANTS.OUTLINE}>
          Use a passkey
        </Button>
      </HFlex>
    </ThemedSurface>
  );
}

function DialogDemo() {
  const [openDialog, setOpenDialog] = useState<'base' | 'composed' | null>(null);
  const close = () => {
    setOpenDialog(null);
  };

  return (
    <DemoSurface>
      <DemoStage>
        <Button
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setOpenDialog('base');
          }}
        >
          Open the base Dialog
        </Button>
        <Button
          color={BUTTON_COLORS.ACCENT}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setOpenDialog('composed');
          }}
        >
          Open the composed one
        </Button>
      </DemoStage>

      <Dialog
        open={openDialog === 'base'}
        title="Delete this project?"
        onClose={close}
        footer={
          <>
            <Button color={BUTTON_COLORS.NEUTRAL} variant={BUTTON_VARIANTS.OUTLINE} onClick={close}>
              Keep it
            </Button>
            <Button color={BUTTON_COLORS.ACCENT} onClick={close}>
              Delete
            </Button>
          </>
        }
      >
        Its deployments go with it.
      </Dialog>

      <DialogRoot open={openDialog === 'composed'} onClose={close}>
        <SheetCorner>
          <DialogClose />
        </SheetCorner>
        <SheetBody>
          <SheetMark aria-hidden="true">
            <TrashIcon />
          </SheetMark>
          <DialogTitle>Delete this project?</DialogTitle>
          <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>Its deployments go with it.</Text.P>
        </SheetBody>
        <SheetActions>
          <Button color={BUTTON_COLORS.ACCENT} fullWidth onClick={close}>
            Delete
          </Button>
          <Button
            color={BUTTON_COLORS.NEUTRAL}
            variant={BUTTON_VARIANTS.SUBTLE}
            fullWidth
            onClick={close}
          >
            Keep it
          </Button>
        </SheetActions>
      </DialogRoot>
    </DemoSurface>
  );
}

function ActionAlertDemo() {
  const [restored, setRestored] = useState(false);

  return (
    <DemoSurface>
      <ActionAlertRoot color={restored ? ALERT_COLORS.PRIMARY : ALERT_COLORS.ACCENT}>
        <ActionAlertMessage>
          <AlertTitle>{restored ? 'Draft restored' : 'Draft deleted'}</AlertTitle>
          <AlertBody>
            {restored ? 'It is back in your drafts.' : 'You can bring it back for 30 days.'}
          </AlertBody>
        </ActionAlertMessage>
        <Button
          color={BUTTON_COLORS.NEUTRAL}
          size={BUTTON_SIZES.SMALL}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setRestored((current) => !current);
          }}
        >
          {restored ? 'Delete again' : 'Undo'}
        </Button>
      </ActionAlertRoot>
    </DemoSurface>
  );
}

export function CustomizationPage() {
  const { materialId, scheme, theme } = useSitePreferences();
  const [subtreeTheme, setSubtreeTheme] = useState<TSubtreeTheme>('dark');
  const editorId = useId();
  const [presetId, setPresetId] = useState<TPlaygroundPresetId | null>('untouched');
  const [css, setCss] = useState<string>(PLAYGROUND_PRESETS[0].css);
  const [previewScheme, setPreviewScheme] = useState<TPreviewScheme>('site');
  const [partClasses, setPartClasses] = useState<readonly string[]>([]);
  const activePreset = PLAYGROUND_PRESETS.find(({ id }) => id === presetId);
  const resolvedScheme: TColorScheme = previewScheme === 'site' ? scheme : previewScheme;

  // The class list is read from the rendered preview, so it shows exactly what can be targeted.
  const readPartClasses = useCallback((preview: HTMLDivElement | null) => {
    if (preview !== null) {
      setPartClasses(collectPartClasses(preview));
    }
  }, []);

  return (
    <DocsLayout
      kicker="Customization"
      title="Change it at the edge."
      lead="Use the finished component when it fits, adjust it when it almost fits, and build your own from the same parts when it does not. Nothing here asks you to fork a component or fight its styles."
      sections={SECTIONS}
    >
      <DocsSection id="levels" aria-labelledby="levels-title">
        <DocsSectionTitle id="levels-title">Five levels</DocsSectionTitle>
        <Prose>
          Each level reaches further than the one before and costs a little more code. None of them
          asks you to fork a component or fight its styles.
        </Prose>
        <LayerTable>
          <thead>
            <tr>
              <th scope="col">You need</th>
              <th scope="col">Reach for</th>
              <th scope="col">Looks like</th>
            </tr>
          </thead>
          <tbody>
            {LEVELS.map(({ example, scope, tool }) => (
              <tr key={scope}>
                <th scope="row">{scope}</th>
                <td>{tool}</td>
                <td>{example}</td>
              </tr>
            ))}
          </tbody>
        </LayerTable>
      </DocsSection>

      <DocsSection id="themes" aria-labelledby="themes-title">
        <DocsSectionTitle id="themes-title">Themes</DocsSectionTitle>
        <Prose>
          Light, dark, and system are attribute selectors in the stylesheet you already imported.
          Setting <Text.Code>data-theme</Text.Code> on any element themes everything inside it.{' '}
          <Text.Code>system</Text.Code> follows <Text.Code>prefers-color-scheme</Text.Code>.
        </Prose>
        <Prose>
          This site works that way. The control in the header writes the attribute on the{' '}
          <Text.Code>html</Text.Code> element; no provider wraps the page.
        </Prose>
        <Caption data-emphasis="markup" role="status">
          Right now: data-theme=&quot;{theme}&quot;, rendering the {scheme} scheme.
        </Caption>
        <CodeBlock code={CSS_ONLY_CODE} label="index.html" language="html" />
        <Prose>
          <Text.Code>ThemeProvider</Text.Code> applies a theme to its children by setting the
          variables on a wrapper. Pass <Text.Code>mode</Text.Code> for a built-in theme, or{' '}
          <Text.Code>theme</Text.Code> for an object of your own. The card below ignores the site
          theme and follows its own provider.
        </Prose>
        <DocsColumns>
          <DemoSurface>
            <DemoToolbar>
              <OptionSwitch
                label="Provider"
                options={SUBTREE_THEMES}
                value={subtreeTheme}
                onChange={setSubtreeTheme}
              />
            </DemoToolbar>
            {subtreeTheme === 'blueprint' ? (
              <ThemeProvider theme={BLUEPRINT_THEME}>
                <SignInCard />
              </ThemeProvider>
            ) : (
              <ThemeProvider mode={subtreeTheme === 'dark' ? THEME_MODES.DARK : THEME_MODES.LIGHT}>
                <SignInCard />
              </ThemeProvider>
            )}
          </DemoSurface>
          <CodeBlock code={SUBTREE_CODE} label="scoped-theme.tsx" language="tsx" />
        </DocsColumns>
      </DocsSection>

      <DocsSection id="variables" aria-labelledby="variables-title">
        <DocsSectionTitle id="variables-title">Variables and fonts</DocsSectionTitle>
        <Prose>
          To rebrand without writing a theme object, override the semantic variables: nine custom
          properties per color scheme, with no rebuild and no provider. This is the stylesheet for
          the material this site is wearing now;{' '}
          <TextLink href="/#recast-title">switch it on the overview</TextLink>.
        </Prose>
        <CodeBlock
          code={createMaterialSnippet(getMaterial(materialId))}
          label="theme-overrides.css"
          language="css"
        />
        <Prose>
          The typeface is one of those variables. <Text.Code>styles.css</Text.Code> ships Plus
          Jakarta Sans as local files; import <Text.Code>@faber-ui/react/theme.css</Text.Code>{' '}
          instead when you bring your own, and set the family.
        </Prose>
        <CodeBlock code={FONT_OVERRIDE_CODE} label="app.css" language="css" />
      </DocsSection>

      <DocsSection id="classes" aria-labelledby="classes-title">
        <DocsSectionTitle id="classes-title">Part classes</DocsSectionTitle>
        <Prose>
          Every styled part of every component carries a stable <Text.Code>faber-ui-*</Text.Code>{' '}
          class, so plain CSS reaches any piece without wrapping or forking. Edit the stylesheet
          below: it is scoped to the preview, and <Text.Code>:root</Text.Code> stands for the
          preview itself.
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
              <Caption data-emphasis="ink">Preview — library components only</Caption>
              <OptionSwitch
                label="Theme"
                options={PREVIEW_SCHEMES}
                value={previewScheme}
                onChange={setPreviewScheme}
              />
            </PreviewHead>
            <ThemeProvider mode={resolvedScheme === 'dark' ? THEME_MODES.DARK : THEME_MODES.LIGHT}>
              <Box ref={readPartClasses} className={PLAYGROUND_PREVIEW_CLASS}>
                <PlaygroundPreview />
              </Box>
            </ThemeProvider>
          </PreviewCard>
        </PlaygroundGrid>
        <Caption data-emphasis="ink">Part classes in this preview ({partClasses.length})</Caption>
        <ReferenceList>
          {partClasses.map((name) => (
            <ListItem key={name}>.{name}</ListItem>
          ))}
        </ReferenceList>
      </DocsSection>

      <DocsSection id="tokens" aria-labelledby="tokens-title">
        <DocsSectionTitle id="tokens-title">Tokens</DocsSectionTitle>
        <Prose>
          Tokens are exported for your code too. A component you style with them belongs to the
          system: it changes with the theme and with every variable you override.
        </Prose>
        <DocsColumns>
          <DemoSurface>
            <PlanCard>
              <PlanCardHeader>
                <Title.H3 size={TYPOGRAPHY_SIZES.MEDIUM}>Team</Title.H3>
                <Badge color={BADGE_COLORS.PRIMARY}>Current plan</Badge>
              </PlanCardHeader>
              <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>
                12 seats, renews on the first of the month.
              </Text.P>
              <Button variant={BUTTON_VARIANTS.LIGHT}>Manage seats</Button>
            </PlanCard>
          </DemoSurface>
          <CodeBlock code={TOKENS_CODE} label="plan-card.styles.ts" language="tsx" />
        </DocsColumns>
      </DocsSection>

      <DocsSection id="parts" aria-labelledby="parts-title">
        <DocsSectionTitle id="parts-title">Parts</DocsSectionTitle>
        <Prose>
          <Text.Code>Dialog</Text.Code> takes a title, a body, and a footer and arranges them one
          way. <Text.Code>DialogRoot</Text.Code> is the same native modal without the arrangement:
          the top layer, the backdrop, focus containment, and Escape stay, and the inside is yours.{' '}
          <Text.Code>DialogTitle</Text.Code> still names the dialog and{' '}
          <Text.Code>DialogClose</Text.Code> still closes it, wherever you put them.
        </Prose>
        <DocsColumns>
          <DialogDemo />
          <CodeBlock code={DIALOG_CODE} label="delete-sheet.tsx" language="tsx" />
        </DocsColumns>
        <Prose>
          The same parts make new molecules. The built-in <Text.Code>Alert</Text.Code> has no action
          slot, and it does not need one: put its parts in a row next to a{' '}
          <Text.Code>Button</Text.Code>.
        </Prose>
        <DocsColumns>
          <ActionAlertDemo />
          <CodeBlock code={ALERT_CODE} label="action-alert.tsx" language="tsx" />
        </DocsColumns>
        <Prose>
          These components export their pieces today, and every part keeps its class, so a
          stylesheet that targets the finished component also reaches your composition.
        </Prose>
        <DocsStack>
          <LayerTable>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Parts</th>
              </tr>
            </thead>
            <tbody>
              {PART_SETS.map(({ component, parts }) => (
                <tr key={component}>
                  <th scope="row">{component}</th>
                  <td>{parts}</td>
                </tr>
              ))}
            </tbody>
          </LayerTable>
        </DocsStack>
      </DocsSection>
    </DocsLayout>
  );
}
