# Faber UI

Faber UI is a strongly typed design system for React applications built with TypeScript,
styled-components, design tokens, and Storybook. It supports React 18 and 19 and is designed for
projects using Next.js, Vite, or another modern ESM toolchain.

> [!NOTE]
> The documentation is under development.

## Foundations

- TypeScript with strict compiler settings.
- React 18 and 19 support.
- ESM-only packages built with Vite Library Mode.
- styled-components with the SWC transform.
- Primitive and semantic design tokens.
- Light and dark themes with CSS custom properties.
- Optional React `ThemeProvider` and `GlobalStyles`.
- Locally distributed Plus Jakarta Sans Variable font.
- Semantic HTML, native props, and forwarded refs.
- Vitest, Testing Library, jsdom, ESLint, and Prettier.
- Storybook Autodocs, MDX guides, and accessibility checks.
- Bun Workspaces and Turborepo.

## Customization model

The component APIs provide defined defaults without making the theme or provider mandatory. The
same interface can be adjusted at different levels depending on how much control is needed.

- **Component API:** typed props, presets, native HTML props, events, and refs.
- **Component composition:** `className`, `style`, styled-components wrappers, and `.attrs()`.
- **Runtime values:** public option constants or their equivalent typed string literals.
- **Visual foundations:** typed token objects reexported by `@faber-ui/react`.
- **Small theme changes:** semantic CSS variable overrides, globally or within a subtree.
- **Complete theme changes:** a custom object satisfying the full `TTheme` contract.
- **Theme application:** React provider or CSS-only `data-theme` attributes.
- **Global baseline:** optional `GlobalStyles`, with application CSS remaining in control.
- **Font loading:** aggregate stylesheet with the local font or the theme-only stylesheet.

This keeps common usage short while preserving regular React and CSS composition. There is no
mandatory universal `sx` API: components remain valid styled-components targets and continue to
forward the native attributes of their underlying HTML elements.

```tsx
import { Button, SPACINGS } from '@faber-ui/react';
import styled from 'styled-components';

const ToolbarAction = styled(Button).attrs({
  variant: 'subtle',
})`
  margin-inline-start: ${SPACINGS.SM};
`;
```

## Storybook

Storybook is used to develop components in isolation, inspect their public props, compare states,
review light and dark themes, and document tokens and usage examples.

### Button variants

![Button variants displayed in Storybook](./assets/storybook/button-variants.png)

### Theme comparison

![Light and dark themes displayed side by side in Storybook](./assets/storybook/themes.png)

## Components

The current React package includes:

- `Button`
- `IconButton`
- `Text.P`
- `Text.Span`
- `Text.A`
- `Text.Label`
- `Text.Strong`
- `Text.Em`
- `Text.Small`
- `Title.H1` through `Title.H6`

Atomic Design is used as a conceptual organization in Storybook. Component source remains grouped
by component inside a flat source tree.

## Installation

The commands below assume an existing React application. `@faber-ui/themes` and
`@faber-ui/tokens` are installed automatically by `@faber-ui/react`. styled-components remains an
explicit peer dependency.

### macOS and Linux

Using Bun:

```bash
bun add @faber-ui/react styled-components
```

Using npm:

```bash
npm install @faber-ui/react styled-components
```

Using Yarn:

```bash
yarn add @faber-ui/react styled-components
```

### Windows

Run one of the following commands in PowerShell or Windows Terminal.

Using Bun:

```powershell
bun add @faber-ui/react styled-components
```

Using npm:

```powershell
npm install @faber-ui/react styled-components
```

Using Yarn:

```powershell
yarn add @faber-ui/react styled-components
```

## Local setup

Requirements:

- Bun `1.3.14`
- Node.js `20.19.0` or newer

Install the workspace dependencies:

```bash
bun install
```

Start Storybook:

```bash
bun run storybook
```

Storybook runs at `http://localhost:6006` by default.

## Usage

Load the theme variables and local font once at the application entry point:

```tsx
import '@faber-ui/react/styles.css';
```

Add the theme provider and optional global baseline at the application boundary:

```tsx
import '@faber-ui/react/styles.css';

import { Button, GlobalStyles, Text, THEME_MODES, ThemeProvider, Title } from '@faber-ui/react';

export function App() {
  return (
    <ThemeProvider mode={THEME_MODES.LIGHT}>
      <GlobalStyles />

      <main>
        <Title.H1>Account settings</Title.H1>
        <Text.P tone="secondary">Manage your profile and preferences.</Text.P>
        <Button>Save changes</Button>
      </main>
    </ThemeProvider>
  );
}
```

`GlobalStyles` is opt-in. It applies box sizing, document typography and colors, inherited form
typography, responsive media defaults, and reduced-motion behavior without removing semantic
browser styles.

To load theme variables without the packaged font:

```tsx
import '@faber-ui/react/theme.css';
```

## Component examples

### Button

```tsx
import {
  Button,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from '@faber-ui/react';

<Button>Default action</Button>

<Button
  color={BUTTON_COLORS.ACCENT}
  size={BUTTON_SIZES.LARGE}
  variant={BUTTON_VARIANTS.OUTLINE}
>
  Accent action
</Button>

<Button loading>Saving</Button>
```

Component options also accept their typed string literals:

```tsx
<Button color="primary" size="medium" variant="light">
  Continue
</Button>
```

### IconButton

```tsx
import { IconButton } from '@faber-ui/react/icon-button';

<IconButton aria-label="Close dialog">
  <CloseIcon />
</IconButton>;
```

### Typography

```tsx
import { Text, Title, TYPOGRAPHY_TONES, TYPOGRAPHY_WEIGHTS } from '@faber-ui/react';

<Title.H1>Page title</Title.H1>
<Title.H2 size="large">Section title</Title.H2>

<Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>Supporting paragraph</Text.P>

<Text.A href="/documentation" weight={TYPOGRAPHY_WEIGHTS.SEMIBOLD}>
  Documentation
</Text.A>

<Text.Span truncate>Long content constrained by its parent</Text.Span>
```

Typography members accept the native props and ref for their exact HTML element. Visual props do
not change the rendered semantic element.

## Imports

Components can be imported from the main entry point:

```tsx
import { Button, IconButton, Text, Title } from '@faber-ui/react';
```

They are also available through explicit component subpaths:

```tsx
import { Button } from '@faber-ui/react/button';
import { IconButton } from '@faber-ui/react/icon-button';
import { Text } from '@faber-ui/react/text';
import { Title } from '@faber-ui/react/title';
```

## Theming

### React provider

```tsx
import { GlobalStyles, THEME_MODES, ThemeProvider } from '@faber-ui/react';

<ThemeProvider mode={THEME_MODES.DARK}>
  <GlobalStyles />
  <Application />
</ThemeProvider>;
```

### CSS themes

Themes can be selected without React context:

```html
<html data-theme="light"></html>
<html data-theme="dark"></html>
<html data-theme="system"></html>
```

System mode follows `prefers-color-scheme`.

### CSS variable overrides

Semantic colors and the base font can be overridden globally or within a subtree:

```css
:root {
  --faber-ui-font-family-base: Inter, Arial, sans-serif;
  --faber-ui-color-primary: hsl(220 80% 48%);
  --faber-ui-color-primary-hover: hsl(220 80% 40%);
  --faber-ui-color-primary-active: hsl(220 80% 32%);
  --faber-ui-color-on-primary: #ffffff;
}
```

### Typed custom theme

```tsx
import { LIGHT_THEME, ThemeProvider } from '@faber-ui/react';
import type { TTheme } from '@faber-ui/react';

const CUSTOM_THEME = {
  ...LIGHT_THEME,
  PRIMARY: 'hsl(220 80% 48%)',
  PRIMARY_HOVER: 'hsl(220 80% 40%)',
  PRIMARY_ACTIVE: 'hsl(220 80% 32%)',
} satisfies TTheme;

<ThemeProvider theme={CUSTOM_THEME}>
  <Application />
</ThemeProvider>;
```

## Design tokens

Tokens are exported as flat `CONSTANT_CASE` TypeScript objects:

```tsx
import { COLORS, FONT_SIZES, RADII, SIZES, SPACINGS } from '@faber-ui/react';
import styled from 'styled-components';

const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${SPACINGS.MD};
  min-height: ${SIZES.XL};
  padding: ${SPACINGS.LG};
  border-radius: ${RADII.LG};
  color: ${COLORS.TEXT_PRIMARY};
  background: ${COLORS.SURFACE_PRIMARY};
  font-size: ${FONT_SIZES.MD};
`;
```

Current token domains include:

- Animations
- Border widths
- Breakpoints
- Colors and palette
- Focus rings
- Font families, sizes, and weights
- Line heights
- Opacities
- Radii
- Relative sizes
- Sizes
- Spacings
- Text decorations

## Repository structure

```text
apps/
  storybook/       Storybook application and documentation
packages/
  fonts/           Font assets and CSS font-family contract
  icons/           Icon package placeholder
  react/           React components
  themes/          Themes, CSS variables, and React provider
  tokens/          Primitive and semantic design tokens
  utilities/       Framework-independent utilities
```

## Scripts

```bash
bun run storybook
bun run format:check
bun run lint
bun run typecheck
bun run test
bun run build
```

## License

Faber UI is available under the [MIT License](./LICENSE). The bundled Plus Jakarta Sans font assets
retain their own OFL-1.1 license.
