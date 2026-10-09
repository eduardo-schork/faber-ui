import type { Meta, StoryObj } from '@storybook/react-vite';
import { THEME_MODES, ThemeProvider } from '@faber-ui/themes';
import { COLORS, SPACINGS } from '@faber-ui/tokens';

import { Radio } from './radio.ui';

const meta = {
  title: 'Components/Forms/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  args: { label: 'Light theme', name: 'theme-playground', value: 'light' },
} satisfies Meta<typeof Radio>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const NativeGroup: TStory = {
  render: () => (
    <fieldset style={{ display: 'grid', gap: SPACINGS.SM, border: 0, padding: 0 }}>
      <legend style={{ marginBottom: SPACINGS.SM }}>Choose a theme</legend>
      <Radio label="Light" name="theme-example" value="light" defaultChecked />
      <Radio label="Dark" name="theme-example" value="dark" />
      <Radio label="System" name="theme-example" value="system" />
    </fieldset>
  ),
};

export const Themes: TStory = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
      {([THEME_MODES.LIGHT, THEME_MODES.DARK] as const).map((mode) => (
        <ThemeProvider key={mode} mode={mode}>
          <fieldset
            style={{
              display: 'grid',
              gap: SPACINGS.SM,
              margin: 0,
              padding: SPACINGS.XL,
              border: 0,
              color: COLORS.TEXT_PRIMARY,
              background: COLORS.BACKGROUND_PRIMARY,
            }}
          >
            <legend>{mode} theme choices</legend>
            <Radio label="First option" name={`${mode}-option`} value="first" defaultChecked />
            <Radio label="Second option" name={`${mode}-option`} value="second" />
          </fieldset>
        </ThemeProvider>
      ))}
    </div>
  ),
};
