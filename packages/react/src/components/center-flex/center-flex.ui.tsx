import { forwardRef } from 'react';

import { FLEX_ALIGNS, FLEX_DIRECTIONS, FLEX_JUSTIFIES, Flex } from '../flex';
import type { TCenterFlexProps } from './center-flex.types';

export const CenterFlex = forwardRef<HTMLDivElement, TCenterFlexProps>(
  function CenterFlex(props, ref) {
    return (
      <Flex
        {...props}
        ref={ref}
        align={FLEX_ALIGNS.CENTER}
        direction={FLEX_DIRECTIONS.ROW}
        justify={FLEX_JUSTIFIES.CENTER}
        data-center-flex=""
      />
    );
  },
);
