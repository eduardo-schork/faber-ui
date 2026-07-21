export const BREAKPOINTS = {
  MOBILE: '0px',
  MOBILE_LARGE: '640px',
  TABLET: '768px',
  DESKTOP: '1024px',
  DESKTOP_LARGE: '1280px',
  DESKTOP_WIDE: '1536px',
} as const;

export type TBreakpointTokenName = keyof typeof BREAKPOINTS;
export type TBreakpointTokenValue = (typeof BREAKPOINTS)[TBreakpointTokenName];
