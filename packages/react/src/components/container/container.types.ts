import type { TContainerSizeTokenName } from '@faber-ui/tokens';

import type { TVFlexProps } from '../flex';

type TCSSMaxWidth = string & Record<never, never>;

export type TContainerProps = Omit<TVFlexProps, 'inline'> & {
  readonly center?: boolean;
  readonly size?: TContainerSizeTokenName | TCSSMaxWidth;
};
