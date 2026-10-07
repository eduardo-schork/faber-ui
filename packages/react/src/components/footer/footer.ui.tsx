import { forwardRef } from 'react';

import { StyledFooter } from './footer.styles';
import type { TFooterProps } from './footer.types';

export const Footer = forwardRef<HTMLElement, TFooterProps>(function Footer(props, ref) {
  return <StyledFooter {...props} ref={ref} />;
});
