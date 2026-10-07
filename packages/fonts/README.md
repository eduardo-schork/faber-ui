# @faber-ui/fonts

Plus Jakarta Sans Variable as local font files, with the stylesheet that registers it and the
font-family token of Faber UI. Nothing is requested from a font service at runtime.

`@faber-ui/react/styles.css` already includes this. Install the package on its own only when you
need the font without the components.

## Install

```bash
npm install @faber-ui/fonts
```

## Use

```ts
import '@faber-ui/fonts/styles.css';
import { FONT_FAMILIES } from '@faber-ui/fonts';
```

To use another typeface, skip this stylesheet and set `--faber-ui-font-family-base`.

## License

The package code is MIT. Plus Jakarta Sans is distributed under the SIL Open Font License 1.1; the
license text ships as `@faber-ui/fonts/OFL.txt`.

## Documentation

Guides and the source live in the
[Faber UI repository](https://github.com/eduardo-schork/faber-ui).
