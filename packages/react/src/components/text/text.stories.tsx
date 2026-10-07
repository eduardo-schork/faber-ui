import type { Meta, StoryObj } from '@storybook/react-vite';
import { THEME_MODES, ThemeProvider } from '@faber-ui/themes';
import { COLORS, SPACINGS } from '@faber-ui/tokens';

import {
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';
import { Text } from './text.ui';

const sizes = Object.values(TYPOGRAPHY_SIZES);
const tones = Object.values(TYPOGRAPHY_TONES);
const weights = Object.values(TYPOGRAPHY_WEIGHTS);

const meta = {
  title: 'Atoms/Text',
  component: Text.P,
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: TYPOGRAPHY_SIZES.SMALL,
    tone: TYPOGRAPHY_TONES.PRIMARY,
    truncate: false,
    weight: TYPOGRAPHY_WEIGHTS.REGULAR,
  },
  argTypes: {
    size: { control: 'select', options: sizes },
    tone: {
      control: 'select',
      options: tones,
    },
    weight: { control: 'select', options: weights },
  },
} satisfies Meta<typeof Text.P>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const SemanticElements: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.MD }}>
      <Text.P>Text.P renders a semantic paragraph.</Text.P>
      <div>
        <Text.Span>Text.Span renders inline content. </Text.Span>
        <Text.A href="#semantic-elements">Text.A renders an accessible link.</Text.A>
      </div>
      <Text.Label htmlFor="typography-example">Text.Label renders a form label.</Text.Label>
      <Text.Strong>Text.Strong renders strong importance.</Text.Strong>
      <Text.Em>Text.Em renders emphasized content.</Text.Em>
      <Text.Small>Text.Small renders secondary small print.</Text.Small>
      <Text.P>
        Text.Code renders inline code such as <Text.Code>bun add @faber-ui/react</Text.Code>.
      </Text.P>
    </div>
  ),
};

export const Sizes: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.SM }}>
      {sizes.map((size) => (
        <Text.P key={size} size={size}>
          {size} — The quick brown fox jumps over the lazy dog.
        </Text.P>
      ))}
    </div>
  ),
};

export const TonesAndWeights: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.SM }}>
      <Text.P tone={TYPOGRAPHY_TONES.PRIMARY}>Primary text</Text.P>
      <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>Secondary text</Text.P>
      <Text.P tone={TYPOGRAPHY_TONES.DISABLED}>Disabled text</Text.P>
      <Text.P tone={TYPOGRAPHY_TONES.ACCENT}>Accent text</Text.P>
      <Text.P weight={TYPOGRAPHY_WEIGHTS.MEDIUM}>Medium text</Text.P>
      <Text.P weight={TYPOGRAPHY_WEIGHTS.SEMIBOLD}>Semibold text</Text.P>
      <Text.P weight={TYPOGRAPHY_WEIGHTS.BOLD}>Bold text</Text.P>
    </div>
  ),
};

export const Truncated: TStory = {
  render: () => (
    <div style={{ width: 280 }}>
      <Text.P truncate>
        This content is intentionally too long for its container and is truncated with an ellipsis.
      </Text.P>
    </div>
  ),
};

export const Themes: TStory = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
      {([THEME_MODES.LIGHT, THEME_MODES.DARK] as const).map((mode) => (
        <ThemeProvider key={mode} mode={mode}>
          <section
            style={{
              display: 'grid',
              gap: SPACINGS.MD,
              minHeight: 240,
              padding: SPACINGS.XL,
              color: COLORS.TEXT_PRIMARY,
              background: COLORS.BACKGROUND_PRIMARY,
            }}
          >
            <Text.Strong>{mode} theme</Text.Strong>
            <Text.P>Primary content remains readable in the selected theme.</Text.P>
            <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>Secondary supporting content.</Text.P>
            <Text.A href="#themes">Accessible accent link</Text.A>
          </section>
        </ThemeProvider>
      ))}
    </div>
  ),
};
