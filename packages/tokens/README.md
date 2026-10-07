# @faber-ui/tokens

The design tokens of Faber UI as typed constants: palette, semantic color roles, spacing, sizes,
radii, border widths, typography scales, breakpoints, motion, and stacking order.

`@faber-ui/react` re-exports everything here. Install this package on its own only when you need
the tokens without the components.

## Install

```bash
npm install @faber-ui/tokens
```

## Use

```ts
import { COLORS, SPACINGS, SPACING_SCALE } from '@faber-ui/tokens';

COLORS.PRIMARY; // 'var(--faber-ui-color-primary, hsl(147 57% 33%))'
SPACINGS.MD; // 'var(--faber-ui-spacing-md, 16px)'
SPACING_SCALE.MD; // '16px', for code that needs the raw value
```

`cssVariable(name, fallback)` builds the same kind of typed `var()` reference for your own custom
properties.

Color roles and the dimensional scales are CSS variable references with their default as the
fallback, so styles written with them follow any theme or override.

## Documentation

Guides, the component reference, and the source live in the
[Faber UI repository](https://github.com/eduardo-schork/faber-ui).

## License

MIT
