# @faber-ui/tokens

## 0.3.0

### Minor Changes

- 0dd52b8: Add `Listbox` (a custom select with groups, separators, and type-ahead), `Combobox` (a searchable
  select, single or multiple), `DatePicker` and `Calendar`, `FileUpload`, `RadioCard` (a radio drawn
  as a selectable card), `ColorSwatch`, `Stat`, and `EmptyState`. Add the fluid `display-small`, `display-medium`, and
  `display-large` sizes to `Title` and `Text`, with the `FONT_SIZES.DISPLAY_*` and
  `FONT_SIZE_FLUID_RATES` tokens behind them.

  Fix three contrast failures found in a WCAG 2.2 AA audit of the Amethyst and Obsidian palette:

  - In the dark theme, `PRIMARY_HOVER` and `PRIMARY_ACTIVE` now get lighter instead of darker
    (`PALETTE.AMETHYST_75` and `AMETHYST_50`), so the dark text on a primary button stays readable
    while it is hovered or pressed.
  - `BORDER_STRONG` is now `NEUTRAL_500` in both themes, so the border of inputs, selects, and
    other controls reaches 3:1 against the page.
  - Text on a tint of its own color (the light `Button` variant and `Badge`) is now mixed toward the
    text color by the new `OPACITIES.TEXT_ON_TINT` token, so it reaches 4.5:1 in both themes.

  The themes package now tests these pairs.

## 0.2.0

### Minor Changes

- 9c98393: Change the default palette to Amethyst and Obsidian. The light and dark themes now use an amethyst
  primary and an obsidian accent, with a deeper purple as the dark-theme primary.

  Breaking: `PALETTE.MALACHITE_*` and `PALETTE.COPPER_*` are replaced by `PALETTE.AMETHYST_*` and
  `PALETTE.OBSIDIAN_*`. Code that reads the semantic `COLORS` roles or the `--faber-ui-color-*`
  variables needs no change and picks up the new colors.

## 0.1.0

### Minor Changes

- First public release of Faber UI: design tokens as typed constants and CSS variables, light and
  dark themes, the bundled Plus Jakarta Sans font, an initial icon set, and the React component
  library with composable parts.
