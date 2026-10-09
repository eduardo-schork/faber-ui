import { forwardRef, useRef, useState, type ChangeEvent, type DragEvent } from 'react';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button/button.constants';
import { Text } from '../text';
import {
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';
import {
  FileUploadDescription,
  FileUploadDropzone,
  FileUploadInput,
  FileUploadItem,
  FileUploadItemText,
  FileUploadLabel,
  FileUploadList,
  FileUploadRemove,
  FileUploadRoot,
} from './file-upload.styles';
import type { TFileUploadProps } from './file-upload.types';
import { formatFileSize } from './format-file-size';

const defaultRemoveLabel = (fileName: string) => `Remove ${fileName}`;

/** Writes the list back to the native input, so the form submits exactly what is shown. */
const syncInputFiles = (input: HTMLInputElement | null, files: readonly File[]) => {
  if (input === null || typeof DataTransfer === 'undefined') {
    return;
  }

  const transfer = new DataTransfer();

  for (const file of files) {
    transfer.items.add(file);
  }

  input.files = transfer.files;
};

export const FileUpload = forwardRef<HTMLInputElement, TFileUploadProps>(function FileUpload(
  {
    'aria-invalid': ariaInvalid,
    className,
    description,
    disabled,
    label = 'Choose files or drop them here',
    multiple = false,
    onChange,
    onFilesChange,
    removeLabel = defaultRemoveLabel,
    style,
    ...inputProps
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<readonly File[]>([]);
  const [dragging, setDragging] = useState(false);

  const assignRef = (node: HTMLInputElement | null) => {
    inputRef.current = node;

    if (typeof ref === 'function') {
      ref(node);
    } else if (ref !== null) {
      ref.current = node;
    }
  };

  const commit = (nextFiles: readonly File[]) => {
    setFiles(nextFiles);
    onFilesChange?.(nextFiles);
  };

  const add = (added: readonly File[]) => {
    const nextFiles = multiple ? [...files, ...added] : added.slice(0, 1);

    syncInputFiles(inputRef.current, nextFiles);
    commit(nextFiles);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    add(Array.from(event.target.files ?? []));
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);

    if (disabled !== true) {
      add(Array.from(event.dataTransfer.files));
    }
  };

  const remove = (index: number) => {
    const nextFiles = files.filter((_, fileIndex) => fileIndex !== index);

    syncInputFiles(inputRef.current, nextFiles);
    commit(nextFiles);
    inputRef.current?.focus();
  };

  return (
    <FileUploadRoot className={className} style={style}>
      <FileUploadDropzone
        data-dragging={dragging || undefined}
        data-invalid={ariaInvalid === true || ariaInvalid === 'true' || undefined}
        onDragLeave={() => {
          setDragging(false);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(disabled !== true);
        }}
        onDrop={handleDrop}
      >
        <FileUploadInput
          {...inputProps}
          ref={assignRef}
          type="file"
          aria-invalid={ariaInvalid}
          disabled={disabled}
          multiple={multiple}
          onChange={handleChange}
        />
        <FileUploadLabel
          size={TYPOGRAPHY_SIZES.SMALLER}
          tone={TYPOGRAPHY_TONES.INHERIT}
          weight={TYPOGRAPHY_WEIGHTS.MEDIUM}
        >
          {label}
        </FileUploadLabel>
        {description === undefined ? null : (
          <FileUploadDescription size={TYPOGRAPHY_SIZES.SMALLEST} tone={TYPOGRAPHY_TONES.SECONDARY}>
            {description}
          </FileUploadDescription>
        )}
      </FileUploadDropzone>

      {files.length === 0 ? null : (
        <FileUploadList aria-label="Selected files">
          {files.map((file, index) => (
            <FileUploadItem key={`${file.name}-${String(file.size)}-${String(index)}`}>
              <FileUploadItemText>
                <Text.Span size={TYPOGRAPHY_SIZES.SMALLER} truncate>
                  {file.name}
                </Text.Span>
                <Text.Span size={TYPOGRAPHY_SIZES.SMALLEST} tone={TYPOGRAPHY_TONES.SECONDARY}>
                  {formatFileSize(file.size)}
                </Text.Span>
              </FileUploadItemText>
              <FileUploadRemove
                aria-label={removeLabel(file.name)}
                color={BUTTON_COLORS.NEUTRAL}
                size={BUTTON_SIZES.SMALL}
                variant={BUTTON_VARIANTS.SUBTLE}
                onClick={() => {
                  remove(index);
                }}
              >
                <span aria-hidden="true">×</span>
              </FileUploadRemove>
            </FileUploadItem>
          ))}
        </FileUploadList>
      )}
    </FileUploadRoot>
  );
});
