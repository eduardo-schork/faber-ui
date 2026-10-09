import type { Meta, StoryObj } from '@storybook/react-vite';
import { THEME_MODES, ThemeProvider } from '@faber-ui/themes';
import { COLORS, SPACINGS } from '@faber-ui/tokens';

import {
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';
import { Title } from './title.ui';

const sizes = Object.values(TYPOGRAPHY_SIZES);
const tones = Object.values(TYPOGRAPHY_TONES);
const weights = Object.values(TYPOGRAPHY_WEIGHTS);

const meta = {
  title: 'Components/Typography/Title',
  component: Title.H1,
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Build clear and accessible interfaces',
    size: TYPOGRAPHY_SIZES.LARGEST,
    tone: TYPOGRAPHY_TONES.PRIMARY,
    truncate: false,
    weight: TYPOGRAPHY_WEIGHTS.BOLD,
  },
  argTypes: {
    size: { control: 'select', options: sizes },
    tone: {
      control: 'select',
      options: tones,
    },
    weight: { control: 'select', options: weights },
  },
} satisfies Meta<typeof Title.H1>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Hierarchy: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.MD }}>
      <Title.H1>H1 — Page title</Title.H1>
      <Title.H2>H2 — Major section</Title.H2>
      <Title.H3>H3 — Section</Title.H3>
      <Title.H4>H4 — Subsection</Title.H4>
      <Title.H5>H5 — Supporting section</Title.H5>
      <Title.H6>H6 — Minor heading</Title.H6>
    </div>
  ),
};

export const SemanticAndVisualIndependence: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.MD }}>
      <Title.H1 size={TYPOGRAPHY_SIZES.MEDIUM}>Semantic H1 displayed with a medium size</Title.H1>
      <Title.H2 size={TYPOGRAPHY_SIZES.LARGEST}>
        Semantic H2 displayed with the largest size
      </Title.H2>
      <Title.H3 tone={TYPOGRAPHY_TONES.ACCENT} weight={TYPOGRAPHY_WEIGHTS.BOLD}>
        Semantic H3 with accent styling
      </Title.H3>
    </div>
  ),
};

export const Display: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.LG }}>
      <Title.H1 size={TYPOGRAPHY_SIZES.DISPLAY_LARGE}>Display large</Title.H1>
      <Title.H1 size={TYPOGRAPHY_SIZES.DISPLAY_MEDIUM}>Display medium</Title.H1>
      <Title.H2 size={TYPOGRAPHY_SIZES.DISPLAY_SMALL}>Display small</Title.H2>
    </div>
  ),
};

export const Truncated: TStory = {
  render: () => (
    <div style={{ width: 360 }}>
      <Title.H2 truncate>This long section title is truncated when space is constrained</Title.H2>
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
            <Title.H1>{mode} theme</Title.H1>
            <Title.H2 tone={TYPOGRAPHY_TONES.ACCENT}>Accent section title</Title.H2>
            <Title.H3 tone={TYPOGRAPHY_TONES.SECONDARY}>Secondary heading</Title.H3>
          </section>
        </ThemeProvider>
      ))}
    </div>
  ),
};
