import type { Meta, StoryObj } from '@storybook/react-vite';
import { THEME_MODES, ThemeProvider } from '@faber-ui/themes';
import { COLORS, SPACINGS } from '@faber-ui/tokens';

import { Field } from '../field';
import { Textarea } from './textarea.ui';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  args: {
    'aria-label': 'Example textarea',
    placeholder: 'Write a message',
    rows: 4,
  },
} satisfies Meta<typeof Textarea>;

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
      <Textarea aria-label="Default textarea" placeholder="Default" rows={3} />
      <Textarea aria-label="Filled textarea" defaultValue="A longer note." rows={3} />
      <Textarea aria-label="Disabled textarea" defaultValue="Unavailable" disabled rows={3} />
      <Field label="Message" error="Please enter a message.">
        <Textarea name="message" rows={3} />
      </Field>
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
            <Field label={`${mode} theme message`} description="Resize vertically as needed.">
              <Textarea name={`${mode}-message`} rows={4} />
            </Field>
          </section>
        </ThemeProvider>
      ))}
    </div>
  ),
};
