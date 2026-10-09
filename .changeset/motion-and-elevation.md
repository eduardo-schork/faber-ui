---
'@faber-ui/tokens': minor
'@faber-ui/themes': minor
'@faber-ui/react': minor
---

Add motion and elevation.

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
