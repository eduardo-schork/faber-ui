import { create } from 'storybook/theming';

// The Storybook interface and the guide pages are set in the same typeface as the components.
// The manager is bundled apart from the workspace packages, so the stack and the brand colours are
// written out here; they mirror FONT_FAMILIES.BASE and the Amethyst and Obsidian palette.
const FONT_FAMILY = "'Plus Jakarta Sans Variable', 'Plus Jakarta Sans', Arial, sans-serif";
const AMETHYST = 'hsl(270 50% 38%)';
const INK = 'hsl(200 16% 8%)';

export const FABER_THEME = create({
  base: 'light',
  brandTitle: 'Faber UI',
  brandImage: './faber-ui-horizontal.svg',
  brandUrl: 'https://github.com/eduardo-schork/faber-ui',
  brandTarget: '_self',
  fontBase: FONT_FAMILY,
  fontCode: FONT_FAMILY,
  colorPrimary: AMETHYST,
  colorSecondary: AMETHYST,
  appBg: 'hsl(200 14% 96%)',
  appContentBg: '#ffffff',
  appBorderColor: 'hsl(200 10% 87%)',
  textColor: INK,
  barSelectedColor: AMETHYST,
  barHoverColor: AMETHYST,
});
