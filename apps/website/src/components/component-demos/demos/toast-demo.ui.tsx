'use client';

import { Button, BUTTON_VARIANTS, Toast, TOAST_COLORS, ToastViewport } from '@faber-ui/react';
import { useState } from 'react';
import { DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function ToastDemo() {
  const [toasts, setToasts] = useState<readonly number[]>([]);

  return (
    <DemoStack>
      <Toast title="Saved" color={TOAST_COLORS.PRIMARY}>
        A toast rendered in place, to show its anatomy.
      </Toast>
      <DemoRow>
        <Button
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setToasts((current) => [...current, Date.now()]);
          }}
        >
          Show a toast in the corner
        </Button>
      </DemoRow>
      <ToastViewport>
        {toasts.map((id) => (
          <Toast
            key={id}
            title="Link copied"
            onDismiss={() => {
              setToasts((current) => current.filter((toast) => toast !== id));
            }}
          >
            Dismiss it with the button.
          </Toast>
        ))}
      </ToastViewport>
    </DemoStack>
  );
}

export const TOAST_DEMO = {
  Demo: ToastDemo,
  code: `import { Toast, ToastViewport } from '@faber-ui/react/toast';

<ToastViewport>
  {toasts.map((toast) => (
    <Toast key={toast.id} title={toast.title} onDismiss={() => dismiss(toast.id)}>
      {toast.message}
    </Toast>
  ))}
</ToastViewport>`,
} satisfies TComponentDemo;
