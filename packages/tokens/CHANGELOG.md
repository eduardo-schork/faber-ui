# @faber-ui/tokens

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
