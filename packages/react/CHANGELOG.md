# @faber-ui/react

## 0.4.0

### Minor Changes

- e0b1054: Add motion and elevation.

  - `ANIMATIONS` gains `DURATION_INSTANT`, `DURATION_MODERATE`, `EASING_ENTER`, `EASING_EXIT`,
    `SCALE_PRESSED`, and `SCALE_ENTER`.
  - New `SHADOWS` tokens (`NONE`, `SM`, `MD`, `LG`) with `SHADOW_SCALE`, read through
    `--faber-ui-shadow-*` and drawn in the new `COLORS.SHADOW` role
    (`--faber-ui-color-shadow`, `PALETTE.SHADOW_400` and `PALETTE.SHADOW_800`).
  - Breaking for custom themes: `TTheme` now requires `SHADOW`.
  - Dialog, Drawer, and AlertDialog fade and scale or slide in and out with their backdrop. Popover,
    Menu, Tooltip, Listbox, Combobox, and DatePicker content fades in from its trigger. Toasts, field
    errors, accordion content, and tab panels rise into place, and a checkbox or radio mark grows in.
  - Buttons scale down slightly while pressed, which replaces the earlier color-only press.
  - Cards, filled buttons, the switch thumb, the selected segment, floating surfaces, toasts, and
    dialogs carry a shadow.
  - All of the motion is off under `prefers-reduced-motion: reduce`.
  - Text fields mark focus with a solid primary border and a faint halo (`FOCUS_RINGS.HALO_WIDTH`)
    instead of a gradient border.

### Patch Changes

- Updated dependencies [e0b1054]
  - @faber-ui/tokens@0.4.0
  - @faber-ui/themes@0.4.0

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

### Patch Changes

- Updated dependencies [0dd52b8]
  - @faber-ui/tokens@0.3.0
  - @faber-ui/themes@0.3.0

## 0.2.0

### Minor Changes

- 9c98393: Change the default palette to Amethyst and Obsidian. The light and dark themes now use an amethyst
  primary and an obsidian accent, with a deeper purple as the dark-theme primary.

  Breaking: `PALETTE.MALACHITE_*` and `PALETTE.COPPER_*` are replaced by `PALETTE.AMETHYST_*` and
  `PALETTE.OBSIDIAN_*`. Code that reads the semantic `COLORS` roles or the `--faber-ui-color-*`
  variables needs no change and picks up the new colors.

### Patch Changes

- Updated dependencies [9c98393]
  - @faber-ui/tokens@0.2.0
  - @faber-ui/themes@0.2.0

## 0.1.0

### Minor Changes

- First public release of Faber UI: design tokens as typed constants and CSS variables, light and
  dark themes, the bundled Plus Jakarta Sans font, an initial icon set, and the React component
  library with composable parts.

### Patch Changes

- Updated dependencies
  - @faber-ui/tokens@0.1.0
  - @faber-ui/themes@0.1.0
