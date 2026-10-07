import {
  ANIMATIONS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  OPACITIES,
  RADII,
  SPACINGS,
} from '@faber-ui/tokens';
import type { ComponentPropsWithRef, ComponentType, ElementType } from 'react';
import styled from 'styled-components';

type TStyledNavLinkProps = ComponentPropsWithRef<'a'> & {
  readonly as: ElementType;
};

const NavLinkRoot = styled.a.attrs({ className: 'faber-ui-nav-link' })`
  display: inline-flex;
  align-items: center;
  gap: ${SPACINGS.XS};
  min-width: ${SPACINGS.NONE};
  padding: ${SPACINGS.XXS} ${SPACINGS.XS};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_SECONDARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  line-height: ${LINE_HEIGHTS.NORMAL};
  text-decoration: none;
  transition:
    color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &[aria-current='page'] {
    color: ${COLORS.TEXT_PRIMARY};
    background-color: color-mix(
      in srgb,
      ${COLORS.TEXT_PRIMARY} ${OPACITIES.INTERACTION_SUBTLE_HOVER},
      transparent
    );
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  &:focus-visible {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  @media (hover: hover) {
    &:hover {
      color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Narrowing the styled component keeps its polymorphic `as` typing tractable for the compiler.
export const StyledNavLink = NavLinkRoot as unknown as ComponentType<TStyledNavLinkProps>;
