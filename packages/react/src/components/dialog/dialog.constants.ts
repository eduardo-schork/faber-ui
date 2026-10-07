export const DIALOG_PLACEMENTS = {
  CENTER: 'center',
  START: 'start',
  END: 'end',
} as const;

export type TDialogPlacement = (typeof DIALOG_PLACEMENTS)[keyof typeof DIALOG_PLACEMENTS];
