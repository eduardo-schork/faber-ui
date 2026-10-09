import type { Meta, StoryObj } from '@storybook/react-vite';
import { THEME_MODES, ThemeProvider } from '@faber-ui/themes';
import { COLORS, SPACINGS } from '@faber-ui/tokens';

import { INPUT_TYPES, Input } from '../input';
import { Field } from './field.ui';

const meta = {
  title: 'Components/Forms/Field',
  component: Field,
  parameters: { layout: 'centered' },
  args: {
    children: <Input name="email" type={INPUT_TYPES.EMAIL} />,
    description: 'We will use this address for account updates.',
    label: 'Email address',
  },
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Field>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const ValidationError: TStory = {
  args: {
    error: 'Enter a valid email address.',
  },
};

export const TranslatedContent: TStory = {
  args: {
    description: <span>Messages can be provided by the application&apos;s i18n layer.</span>,
    error: <span>Validation messages can also be rendered as React content.</span>,
    label: <span>Email address</span>,
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
              gap: SPACINGS.LG,
              padding: SPACINGS.XL,
              color: COLORS.TEXT_PRIMARY,
              background: COLORS.BACKGROUND_PRIMARY,
            }}
          >
            <Field label="Email address" description="Available in both themes.">
              <Input name={`${mode}-email`} type={INPUT_TYPES.EMAIL} />
            </Field>
            <Field label="Email address" error="Enter a valid email address.">
              <Input name={`${mode}-invalid-email`} type={INPUT_TYPES.EMAIL} />
            </Field>
          </section>
        </ThemeProvider>
      ))}
    </div>
  ),
};
