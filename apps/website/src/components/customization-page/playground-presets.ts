export type TPlaygroundPreset = {
  readonly css: string;
  readonly id: string;
  readonly label: string;
  readonly note: string;
};

export const PLAYGROUND_PRESETS = [
  {
    id: 'untouched',
    label: 'Untouched',
    note: 'The defaults. Start typing to change them.',
    css: `/* This stylesheet applies only to the preview.
   Try a variable:  :root { --faber-ui-radius-md: 0px; }
   Or a part class: .faber-ui-button-label { text-transform: uppercase; } */
`,
  },
  {
    id: 'sharp',
    label: 'Sharp and dense',
    note: 'Seven dimension variables: square corners, shorter controls, tighter gaps.',
    css: `:root {
  --faber-ui-radius-sm: 0px;
  --faber-ui-radius-md: 0px;
  --faber-ui-radius-lg: 0px;
  --faber-ui-size-md: 32px;
  --faber-ui-spacing-md: 10px;
  --faber-ui-spacing-lg: 16px;
  --faber-ui-font-size-sm: 13px;
}
`,
  },
  {
    id: 'soft',
    label: 'Soft and roomy',
    note: 'The same variables pushed the other way.',
    css: `:root {
  --faber-ui-radius-sm: 10px;
  --faber-ui-radius-md: 16px;
  --faber-ui-radius-lg: 24px;
  --faber-ui-size-md: 48px;
  --faber-ui-spacing-md: 20px;
  --faber-ui-spacing-lg: 32px;
  --faber-ui-font-weight-semibold: 700;
}
`,
  },
  {
    id: 'brand',
    label: 'Another brand',
    note: 'Color roles and the base font. No component is edited.',
    css: `:root {
  --faber-ui-font-family-base: Georgia, 'Times New Roman', serif;
  --faber-ui-color-primary: hsl(262 52% 47%);
  --faber-ui-color-primary-hover: hsl(262 56% 39%);
  --faber-ui-color-primary-active: hsl(262 60% 31%);
  --faber-ui-color-on-primary: #ffffff;
  --faber-ui-color-accent: hsl(172 78% 26%);
  --faber-ui-color-accent-hover: hsl(172 82% 20%);
  --faber-ui-color-focus-ring: hsl(172 78% 26%);
}
`,
  },
  {
    id: 'parts',
    label: 'One part at a time',
    note: 'Part classes reach inside a component without wrapping it.',
    css: `.faber-ui-button-label {
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.faber-ui-button-icon {
  color: var(--faber-ui-color-accent);
}

.faber-ui-field-label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 11px;
}

.faber-ui-switch .faber-ui-choice-control-input,
.faber-ui-switch .faber-ui-choice-control-input::after {
  border-radius: 3px;
}

.faber-ui-tab[aria-selected='true'] {
  border-bottom-color: var(--faber-ui-color-accent);
}

.faber-ui-badge {
  border-radius: 2px;
}
`,
  },
] as const satisfies readonly TPlaygroundPreset[];

export type TPlaygroundPresetId = (typeof PLAYGROUND_PRESETS)[number]['id'];
