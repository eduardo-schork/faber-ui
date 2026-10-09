export const OPACITIES = {
  HIDDEN: '0%',
  SKELETON: '55%',
  VISIBLE: '100%',
  INTERACTION_SUBTLE_HOVER: '10%',
  INTERACTION_LIGHT: '14%',
  INTERACTION_SUBTLE_ACTIVE: '18%',
  INTERACTION_LIGHT_HOVER: '20%',
  INTERACTION_LIGHT_ACTIVE: '26%',
  DISABLED_BACKGROUND: '55%',
  /* How much of a color stays in text set on a tint of itself; the rest is the text color. */
  TEXT_ON_TINT: '70%',
} as const;

export type TOpacityTokenName = keyof typeof OPACITIES;
export type TOpacityTokenValue = (typeof OPACITIES)[TOpacityTokenName];
