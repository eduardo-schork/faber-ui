---
'@faber-ui/tokens': minor
'@faber-ui/themes': minor
'@faber-ui/react': minor
---

Change the default palette to Amethyst and Obsidian. The light and dark themes now use an amethyst
primary and an obsidian accent, with a deeper purple as the dark-theme primary.

Breaking: `PALETTE.MALACHITE_*` and `PALETTE.COPPER_*` are replaced by `PALETTE.AMETHYST_*` and
`PALETTE.OBSIDIAN_*`. Code that reads the semantic `COLORS` roles or the `--faber-ui-color-*`
variables needs no change and picks up the new colors.
