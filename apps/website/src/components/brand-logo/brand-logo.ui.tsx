import { useId, type ComponentPropsWithoutRef } from 'react';

import { LOGO_BAND_PATH, LOGO_FACETS, LOGO_RIND_PATH, LOGO_VIEW_BOX } from './brand-logo.constants';
import { StyledBrandLogo } from './brand-logo.styles';

type TBrandLogoProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children' | 'viewBox'>;

/** The Faber UI mark: a hexagonal geode with an obsidian rind and an amethyst heart. */
export function BrandLogo(props: TBrandLogoProps) {
  const gradientId = useId();
  const rind = `url(#${gradientId})`;

  return (
    <StyledBrandLogo aria-hidden="true" focusable="false" {...props} viewBox={LOGO_VIEW_BOX}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--logo-rind-start)" />
          <stop offset="1" stopColor="var(--logo-rind-end)" />
        </linearGradient>
      </defs>
      <path d={LOGO_RIND_PATH} fill={rind} stroke={rind} strokeLinejoin="round" strokeWidth="1.2" />
      <path
        d={LOGO_BAND_PATH}
        fill="var(--logo-band)"
        stroke="var(--logo-band)"
        strokeLinejoin="round"
        strokeWidth="0.8"
      />
      {LOGO_FACETS.map(({ d, tone }) => (
        <path
          key={tone}
          d={d}
          fill={`var(--logo-facet-${tone})`}
          stroke={`var(--logo-facet-${tone})`}
          strokeLinejoin="round"
          strokeWidth="0.25"
        />
      ))}
    </StyledBrandLogo>
  );
}
