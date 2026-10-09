import type { Meta, StoryObj } from '@storybook/react-vite';
import { THEME_MODES, ThemeProvider } from '@faber-ui/themes';
import { COLORS, SPACINGS } from '@faber-ui/tokens';

import { INPUT_TYPES } from './input.constants';
import { Input } from './input.ui';

const meta = {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    'aria-label': 'Example input',
    placeholder: 'Enter a value',
    type: INPUT_TYPES.TEXT,
  },
  argTypes: {
    type: { control: 'select', options: Object.values(INPUT_TYPES) },
  },
} satisfies Meta<typeof Input>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const States: TStory = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: SPACINGS.MD,
        width: '360px',
        maxWidth: `calc(100vw - ${SPACINGS.XL})`,
      }}
    >
      <Input aria-label="Default input" placeholder="Default" />
      <Input aria-label="Filled input" defaultValue="A value" />
      <Input aria-label="Required input" placeholder="Required" required />
      <Input aria-label="Disabled input" defaultValue="Unavailable" disabled />
    </div>
  ),
};

export const NativeTypes: TStory = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: SPACINGS.MD,
        width: '360px',
        maxWidth: `calc(100vw - ${SPACINGS.XL})`,
      }}
    >
      <Input aria-label="Email" autoComplete="email" placeholder="Email" type={INPUT_TYPES.EMAIL} />
      <Input aria-label="Password" autoComplete="current-password" type={INPUT_TYPES.PASSWORD} />
      <Input aria-label="Search" placeholder="Search" type={INPUT_TYPES.SEARCH} />
    </div>
  ),
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
            <span>{mode} theme</span>
            <Input aria-label={`${mode} theme input`} placeholder="Enter a value" />
          </section>
        </ThemeProvider>
      ))}
    </div>
  ),
};
