import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TFileUploadProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'children' | 'type' | 'value'
> & {
  /** Supporting text in the drop area, such as the accepted types and the size limit. */
  readonly description?: ReactNode;
  /** The main text of the drop area. */
  readonly label?: ReactNode;
  /** Called with the full list after files are added or removed. */
  readonly onFilesChange?: (files: readonly File[]) => void;
  /** Builds the accessible name of the remove button of each file. */
  readonly removeLabel?: (fileName: string) => string;
};
