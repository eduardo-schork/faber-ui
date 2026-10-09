'use client';

import { Field, FileUpload } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function FileUploadDemo() {
  return (
    <Field label="Attachments">
      <FileUpload
        multiple
        name="file-upload-attachments"
        description="Any file. Nothing is uploaded; the list is local."
      />
    </Field>
  );
}

export const FILE_UPLOAD_DEMO = {
  Demo: FileUploadDemo,
  code: `import { Field, FileUpload } from '@faber-ui/react';

<Field label="Attachments" error={errors.files}>
  <FileUpload
    multiple
    name="attachments"
    accept=".pdf,.png"
    description="PDF or PNG, up to 10 MB each."
    onFilesChange={setFiles}
  />
</Field>`,
} satisfies TComponentDemo;
