import type { Meta, StoryObj } from '@storybook/react-vite';
import { THEME_MODES, ThemeProvider } from '@faber-ui/themes';
import { COLORS, SPACINGS } from '@faber-ui/tokens';

import { Checkbox } from './checkbox.ui';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  args: { label: 'Send me product updates', name: 'updates' },
} satisfies Meta<typeof Checkbox>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const States: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.MD }}>
      <Checkbox label="Unchecked" name="unchecked" />
      <Checkbox label="Checked" name="checked" defaultChecked />
      <Checkbox label="Disabled" name="disabled" disabled />
      <Checkbox label="Disabled and checked" name="disabled-checked" defaultChecked disabled />
    </div>
  ),
};

export const ValidationError: TStory = {
  args: {
    description: 'Required before continuing.',
    error: 'Please accept the terms.',
    label: 'Accept terms',
  },
};

export const Themes: TStory = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
      {([THEME_MODES.LIGHT, THEME_MODES.DARK] as const).map((mode) => (
        <ThemeProvider key={mode} mode={mode}>
          <section
            style={{
              display: 'grid',
              gap: SPACINGS.MD,
              padding: SPACINGS.XL,
              color: COLORS.TEXT_PRIMARY,
              background: COLORS.BACKGROUND_PRIMARY,
            }}
          >
            <Checkbox label={`${mode} theme checkbox`} name={`${mode}-checkbox`} defaultChecked />
            <Checkbox
              label="Validation state"
              name={`${mode}-invalid`}
              error="Please check this option."
            />
          </section>
        </ThemeProvider>
      ))}
    </div>
  ),
};
