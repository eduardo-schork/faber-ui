import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { FileUpload } from './file-upload.ui';
import { formatFileSize } from './format-file-size';

const createFile = (name: string, size: number) =>
  new File([new Uint8Array(size)], name, { type: 'text/plain' });

describe('FileUpload', () => {
  afterEach(cleanup);

  it('SHOULD render a native file input inside a labelled drop area', () => {
    const ref = createRef<HTMLInputElement>();
    const { container, getByLabelText } = render(
      <FileUpload ref={ref} name="attachments" description="PDF up to 10 MB" accept=".pdf" />,
    );
    const input = getByLabelText(/Choose files or drop them here/u);

    expect(ref.current).toBe(input);
    expect(input.getAttribute('type')).toBe('file');
    expect(input.getAttribute('accept')).toBe('.pdf');
    expect(container.querySelector('.faber-ui-file-upload-dropzone')?.textContent).toContain(
      'PDF up to 10 MB',
    );
  });

  it('SHOULD list the chosen files with their sizes and report them', () => {
    const onFilesChange = vi.fn();
    const { getByLabelText, getByRole, getByText } = render(
      <FileUpload multiple onFilesChange={onFilesChange} />,
    );

    fireEvent.change(getByLabelText(/Choose files/u), {
      target: { files: [createFile('notes.txt', 2048), createFile('plan.txt', 10)] },
    });

    expect(getByRole('list', { name: 'Selected files' }).childElementCount).toBe(2);
    expect(getByText('notes.txt')).toBeDefined();
    expect(getByText('2.0 KB')).toBeDefined();
    expect(onFilesChange).toHaveBeenLastCalledWith([expect.any(File), expect.any(File)]);
  });

  it('SHOULD keep one file WHEN multiple is off', () => {
    const { getByLabelText, getByRole } = render(<FileUpload />);
    const input = getByLabelText(/Choose files/u);

    fireEvent.change(input, { target: { files: [createFile('a.txt', 1)] } });
    fireEvent.change(input, { target: { files: [createFile('b.txt', 1)] } });

    expect(getByRole('list', { name: 'Selected files' }).textContent).toContain('b.txt');
    expect(getByRole('list', { name: 'Selected files' }).childElementCount).toBe(1);
  });

  it('SHOULD remove a file from its button', () => {
    const onFilesChange = vi.fn();
    const { getByLabelText, getByRole, queryByRole } = render(
      <FileUpload onFilesChange={onFilesChange} removeLabel={(name) => `Remover ${name}`} />,
    );

    fireEvent.change(getByLabelText(/Choose files/u), {
      target: { files: [createFile('notes.txt', 1)] },
    });
    fireEvent.click(getByRole('button', { name: 'Remover notes.txt' }));

    expect(queryByRole('list', { name: 'Selected files' })).toBeNull();
    expect(onFilesChange).toHaveBeenLastCalledWith([]);
  });

  it.each([
    ['accept dropped files', false, true],
    ['ignore dropped files WHEN disabled', true, false],
  ])('SHOULD %s', (_title, disabled, expectsFile) => {
    const { container, queryByRole } = render(<FileUpload disabled={disabled} />);
    const dropzone = container.querySelector('.faber-ui-file-upload-dropzone');

    if (dropzone === null) {
      throw new Error('Expected a drop area.');
    }

    fireEvent.drop(dropzone, { dataTransfer: { files: [createFile('dropped.txt', 1)] } });

    expect(queryByRole('list', { name: 'Selected files' }) !== null).toBe(expectsFile);
  });
});

describe('formatFileSize', () => {
  it('SHOULD pick the largest unit that keeps the number readable', () => {
    expect(formatFileSize(0)).toBe('0 B');
    expect(formatFileSize(512)).toBe('512 B');
    expect(formatFileSize(1536)).toBe('1.5 KB');
    expect(formatFileSize(5 * 1024 * 1024)).toBe('5.0 MB');
  });
});
