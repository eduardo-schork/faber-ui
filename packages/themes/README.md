# @faber-ui/themes

The light and dark themes of Faber UI, the stylesheet that defines them as CSS variables, and the
optional `ThemeProvider` and `GlobalStyles` for React.

`@faber-ui/react` re-exports everything here. Install this package on its own only when you need
the themes without the components.

## Install

```bash
npm install @faber-ui/themes styled-components
```

## Use

```tsx
import '@faber-ui/themes/styles.css';
```

The stylesheet themes any element that carries `data-theme="light"`, `"dark"`, or `"system"`, with
no JavaScript. `ThemeProvider` applies a built-in mode or a complete theme object to a subtree:

```tsx
import { DARK_THEME, ThemeProvider } from '@faber-ui/themes';
import type { TTheme } from '@faber-ui/themes';

const BRAND = { ...DARK_THEME, PRIMARY: 'hsl(48 96% 64%)' } as const satisfies TTheme;

<ThemeProvider theme={BRAND}>
  <App />
</ThemeProvider>;
```

## Documentation

Guides, the component reference, and the source live in the
[Faber UI repository](https://github.com/eduardo-schork/faber-ui).

## License

MIT
