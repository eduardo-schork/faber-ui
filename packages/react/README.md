# @faber-ui/react

Accessible, strongly typed React components built on native elements, design tokens, and CSS
variables. This is the package most applications install: it re-exports the tokens and themes.

## Install

```bash
npm install @faber-ui/react styled-components
```

React 18 or 19 and styled-components 6 are peer dependencies. The package is ESM only.

## Use

Load the theme variables and the bundled font once, at the entry of the application:

```tsx
import '@faber-ui/react/styles.css';
```

Then render components. No provider is required.

```tsx
import { Button, Field, Input, VFlex } from '@faber-ui/react';

export function SignIn() {
  return (
    <VFlex gap="MD">
      <Field label="Email">
        <Input name="email" type="email" />
      </Field>
      <Button type="submit">Continue</Button>
    </VFlex>
  );
}
```

Every component also has its own entry point, such as `@faber-ui/react/button`. Import
`@faber-ui/react/theme.css` instead of `styles.css` when you bring your own font.

## Customize

- Typed props cover the designed variations: `<Button variant="outline" size="small" />`.
- Colors, spacing, radii, and type are CSS variables: `--faber-ui-color-primary`,
  `--faber-ui-radius-md`.
- Every part has a stable class, such as `.faber-ui-dialog-header`.
- Molecules export their parts (`DialogRoot`, `DialogTitle`, `AlertRoot`, …) so you can assemble
  your own.

The components are marked as client components inside the package, so in the Next.js App Router a
server component can render them directly, and tokens and option constants stay readable on the
server. styled-components still needs its registry and the `compiler.styledComponents` flag.

## Documentation

Guides, the component reference, and the source live in the
[Faber UI repository](https://github.com/eduardo-schork/faber-ui).

## License

MIT
