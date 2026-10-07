import type { TDialogProps } from '../dialog';
import type { TDrawerSide } from './drawer.constants';

export type TDrawerProps = Omit<TDialogProps, 'placement'> & {
  readonly side?: TDrawerSide;
};
