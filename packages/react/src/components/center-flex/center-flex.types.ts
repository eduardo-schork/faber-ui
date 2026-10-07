import type { TFlexProps } from '../flex';

export type TCenterFlexProps = Omit<TFlexProps, 'align' | 'direction' | 'justify'>;
