import type { ComponentPropsWithRef, ComponentType, ElementType } from 'react';
import styled from 'styled-components';

import { buttonStyles } from '../button/button.styles';

type TStyledLinkButtonProps = ComponentPropsWithRef<'a'> & {
  readonly as: ElementType;
};

const LinkButtonRoot = styled.a.attrs({ className: 'faber-ui-link-button' })`
  ${buttonStyles}
`;

// Narrowing the styled anchor to this contract keeps its polymorphic `as` typing tractable for
// the compiler when a router link component is supplied.
export const StyledLinkButton = LinkButtonRoot as unknown as ComponentType<TStyledLinkButtonProps>;
