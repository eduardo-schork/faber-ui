import { forwardRef } from 'react';

import { joinClassNames } from '../../internal/join-class-names';
import { Dialog } from '../dialog';
import { DRAWER_SIDES } from './drawer.constants';
import type { TDrawerProps } from './drawer.types';

/** A modal dialog docked to the inline start or end edge of the viewport. */
export const Drawer = forwardRef<HTMLDialogElement, TDrawerProps>(function Drawer(
  { className, side = DRAWER_SIDES.END, ...dialogProps },
  ref,
) {
  return (
    <Dialog
      {...dialogProps}
      ref={ref}
      className={joinClassNames('faber-ui-drawer', className)}
      placement={side}
    />
  );
});
