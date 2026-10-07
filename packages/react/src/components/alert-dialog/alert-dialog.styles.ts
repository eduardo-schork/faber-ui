import { BORDER_WIDTHS, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { DialogBody, DialogFooter, DialogHeader } from '../dialog';

/* An alert dialog is one short message, so its three rows read as a single block. */
export const AlertDialogHeader = styled(DialogHeader).attrs({
  className: 'faber-ui-alert-dialog-header',
})`
  padding: ${SPACINGS.LG} ${SPACINGS.LG} ${SPACINGS.NONE};
  border-bottom: ${BORDER_WIDTHS.NONE};
`;

export const AlertDialogBody = styled(DialogBody).attrs({
  className: 'faber-ui-alert-dialog-body',
})`
  padding-block: ${SPACINGS.XS} ${SPACINGS.LG};
`;

export const AlertDialogFooter = styled(DialogFooter).attrs({
  className: 'faber-ui-alert-dialog-footer',
})`
  padding: ${SPACINGS.NONE} ${SPACINGS.LG} ${SPACINGS.LG};
  border-top: ${BORDER_WIDTHS.NONE};
`;
