import type { ComponentPropsWithRef, ComponentType, ElementType } from 'react';
import styled from 'styled-components';

import { StyledTypography } from '../typography/typography.styles';

type TStyledLinkProps = ComponentPropsWithRef<'a'> & {
  readonly as: ElementType;
};

const LinkRoot = styled(StyledTypography).attrs({ className: 'faber-ui-link' })``;

// Link shares the typography styles but renders an anchor or a router link. Narrowing the styled
// component to that contract keeps its polymorphic `as` typing tractable for the compiler.
export const StyledLink = LinkRoot as unknown as ComponentType<TStyledLinkProps>;
