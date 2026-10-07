'use client';

import {
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  Box,
  Button,
  Checkbox,
  DARK_THEME,
  FLEX_WRAPS,
  Field,
  HFlex,
  INPUT_TYPES,
  Input,
  ListItem,
  THEME_MODES,
  TYPOGRAPHY_TONES,
  Text,
  ThemeProvider,
  Title,
  type TTheme,
} from '@faber-ui/react';
import { useState, type CSSProperties } from 'react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import {
  DemoSurface,
  DocsColumns,
  DocsList,
  DocsSection,
  DocsSectionTitle,
  DocsStack,
} from '@/components/docs-layout/docs-layout.styles';
import { DocsLayout, type TDocsSectionLink } from '@/components/docs-layout/docs-layout.ui';
import { RecastPanel } from '@/components/recast-panel/recast-panel.ui';
import { OptionSwitch } from '@/components/option-switch/option-switch.ui';
import { Caption, Prose } from '@/components/sheet/sheet.styles';
import { useSitePreferences } from '@/hooks/use-site-preferences';

import { DemoToolbar, FontScope, LayerTable, ThemedSurface } from './theming-page.styles';

type TFontScopeStyle = CSSProperties & {
  readonly '--faber-ui-font-family-base'?: string;
};

const SECTIONS: readonly TDocsSectionLink[] = [
  { id: 'layers', label: 'Choosing a layer' },
  { id: 'css-only', label: 'Themes without React' },
  { id: 'variables', label: 'Overriding variables' },
  { id: 'subtree', label: 'Scoping a subtree' },
  { id: 'fonts', label: 'Fonts' },
  { id: 'baseline', label: 'The global baseline' },
];

const LAYERS = [
  {
    scope: 'One instance',
    tool: 'Typed props, className, style',
    example: '<Button variant="outline" />',
  },
  {
    scope: 'A reusable variation',
    tool: 'styled() and attrs()',
    example: "styled(Button).attrs({ variant: 'subtle' })",
  },
  {
    scope: 'A brand color everywhere',
    tool: 'A CSS variable override',
    example: '--faber-ui-color-primary: …',
  },
  {
    scope: 'One region of a page',
    tool: 'A data-theme attribute, or a provider',
    example: '<section data-theme="dark">',
  },
  {
    scope: 'A complete new theme',
    tool: 'An object that satisfies TTheme',
    example: '<ThemeProvider theme={BLUEPRINT}>',
  },
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

const FONT_CHOICES = {
  'plus jakarta sans': undefined,
  serif: "Georgia, 'Times New Roman', serif",
  monospace: 'ui-monospace, Menlo, Consolas, monospace',
} as const;

type TFontChoice = keyof typeof FONT_CHOICES;

const FONT_OPTIONS = Object.keys(FONT_CHOICES) as TFontChoice[];

const CSS_ONLY_CODE = `<!-- The stylesheet defines every role for these three values. -->
<html data-theme="system">
  <body>
    <aside data-theme="dark">This panel is always dark.</aside>
  </body>
</html>`;

const SCRIPT_CODE = `// Runs in <head> before first paint, so a stored choice never flashes.
const stored = localStorage.getItem('theme');

if (stored === 'light' || stored === 'dark' || stored === 'system') {
  document.documentElement.setAttribute('data-theme', stored);
}`;

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

const FONT_IMPORT_CODE = `// Theme variables and the packaged font:
import '@faber-ui/react/styles.css';

// Or theme variables only, when you bring your own font:
import '@faber-ui/react/theme.css';`;

const FONT_OVERRIDE_CODE = `/* Globally, or on any element for a subtree. */
:root {
  --faber-ui-font-family-base: 'Inter', Arial, sans-serif;
}`;

const BASELINE_CODE = `import { GlobalStyles } from '@faber-ui/react';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}`;

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

export function ThemingPage() {
  const { scheme, theme } = useSitePreferences();
  const [subtreeTheme, setSubtreeTheme] = useState<TSubtreeTheme>('dark');
  const [fontChoice, setFontChoice] = useState<TFontChoice>('plus jakarta sans');
  const fontFamily = FONT_CHOICES[fontChoice];
  const fontScopeStyle: TFontScopeStyle =
    fontFamily === undefined ? {} : { '--faber-ui-font-family-base': fontFamily };

  return (
    <DocsLayout
      kicker="Theming"
      title="Change it at the edge."
      lead="Components never hold a color. They read semantic roles from CSS variables, so a theme is a set of values, and you can swap those values for a page, a region, or a single element."
      sections={SECTIONS}
    >
      <DocsSection id="layers" aria-labelledby="layers-title">
        <DocsSectionTitle id="layers-title">Choosing a layer</DocsSectionTitle>
        <Prose>
          Customization is layered so the common case stays short. Start at the top of this table
          and move down only when the change is broader than the row above can express.
        </Prose>
        <LayerTable>
          <thead>
            <tr>
              <th scope="col">You want to change</th>
              <th scope="col">Reach for</th>
              <th scope="col">Looks like</th>
            </tr>
          </thead>
          <tbody>
            {LAYERS.map(({ example, scope, tool }) => (
              <tr key={scope}>
                <th scope="row">{scope}</th>
                <td>{tool}</td>
                <td>{example}</td>
              </tr>
            ))}
          </tbody>
        </LayerTable>
      </DocsSection>

      <DocsSection id="css-only" aria-labelledby="css-only-title">
        <DocsSectionTitle id="css-only-title">Themes without React</DocsSectionTitle>
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
        <DocsColumns>
          <CodeBlock code={CSS_ONLY_CODE} label="index.html" language="html" />
          <CodeBlock code={SCRIPT_CODE} label="inline script" language="tsx" />
        </DocsColumns>
      </DocsSection>

      <DocsSection id="variables" aria-labelledby="variables-title">
        <DocsSectionTitle id="variables-title">Overriding variables</DocsSectionTitle>
        <Prose>
          To rebrand without writing a theme object, override the semantic variables. Pick a
          material to apply the override to this whole site; the stylesheet on the left is exactly
          what it takes.
        </Prose>
        <RecastPanel />
      </DocsSection>

      <DocsSection id="subtree" aria-labelledby="subtree-title">
        <DocsSectionTitle id="subtree-title">Scoping a subtree</DocsSectionTitle>
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

      <DocsSection id="fonts" aria-labelledby="fonts-title">
        <DocsSectionTitle id="fonts-title">Fonts</DocsSectionTitle>
        <Prose>
          The aggregate stylesheet includes Plus Jakarta Sans Variable as local files. If you
          already load a typeface, import the theme-only stylesheet and set one variable. Every
          component reads the family from it.
        </Prose>
        <DocsColumns>
          <DemoSurface>
            <OptionSwitch
              label="Family"
              options={FONT_OPTIONS}
              value={fontChoice}
              onChange={setFontChoice}
            />
            <FontScope style={fontScopeStyle}>
              <Title.H3>The quick brown fox</Title.H3>
              <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>
                Headings, body text, labels, and controls in this box all follow the variable.
              </Text.P>
              <HFlex gap="SM" wrap={FLEX_WRAPS.WRAP}>
                <Button>Primary action</Button>
                <Button variant={BUTTON_VARIANTS.OUTLINE}>Secondary</Button>
              </HFlex>
            </FontScope>
          </DemoSurface>
          <DocsStack>
            <CodeBlock code={FONT_IMPORT_CODE} label="entry file" language="tsx" />
            <CodeBlock code={FONT_OVERRIDE_CODE} label="app.css" language="css" />
          </DocsStack>
        </DocsColumns>
      </DocsSection>

      <DocsSection id="baseline" aria-labelledby="baseline-title">
        <DocsSectionTitle id="baseline-title">The global baseline</DocsSectionTitle>
        <Prose>
          <Text.Code>GlobalStyles</Text.Code> is optional. Components do not depend on it, and your
          own CSS stays in control. When you mount it, it sets a small baseline and removes no
          semantic browser styles:
        </Prose>
        <DocsList>
          <ListItem>Sets border-box sizing on every element.</ListItem>
          <ListItem>
            Applies the theme text color, background, base font, and line height to the body.
          </ListItem>
          <ListItem>Makes form controls inherit the document font and color.</ListItem>
          <ListItem>Keeps images, video, and canvas inside their containers.</ListItem>
          <ListItem>
            Turns off transitions and animations when reduced motion is requested.
          </ListItem>
        </DocsList>
        <CodeBlock code={BASELINE_CODE} label="app.tsx" language="tsx" />
      </DocsSection>
    </DocsLayout>
  );
}
