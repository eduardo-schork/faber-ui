import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import { TOAST_DEFAULT_DURATION } from './toast.constants';
import { Toast, ToastViewport } from './toast.ui';
import type { TToastOptions, TToastProviderProps } from './toast.types';

type TQueuedToast = TToastOptions & {
  readonly id: string;
};

type TToastContext = {
  /** Removes one toast, or every toast when no id is given. */
  readonly dismiss: (id?: string) => void;
  /** Shows a toast and returns its id. */
  readonly toast: (options: TToastOptions) => string;
};

const ToastContext = createContext<TToastContext | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === null) {
    throw new Error('useToast must be used inside ToastProvider.');
  }

  return context;
};

/** Owns a queue of toasts and renders them in one viewport, newest last. */
export function ToastProvider({
  children,
  dismissLabel,
  duration = TOAST_DEFAULT_DURATION,
  label,
  limit = 3,
}: TToastProviderProps): ReactNode {
  const [toasts, setToasts] = useState<readonly TQueuedToast[]>([]);
  const timers = useRef(new Map<string, ReturnType<typeof setTimeout>>());
  const nextId = useRef(0);

  const dismiss = useCallback((id?: string) => {
    for (const [timerId, timer] of timers.current) {
      if (id === undefined || timerId === id) {
        clearTimeout(timer);
        timers.current.delete(timerId);
      }
    }

    setToasts((current) => (id === undefined ? [] : current.filter((toast) => toast.id !== id)));
  }, []);

  const toast = useCallback(
    (options: TToastOptions) => {
      nextId.current += 1;

      const id = `toast-${String(nextId.current)}`;
      const lifetime = options.duration ?? duration;

      // The oldest toasts give way once the queue is longer than the limit.
      setToasts((current) => [...current, { ...options, id }].slice(-limit));

      if (Number.isFinite(lifetime) && lifetime > 0) {
        timers.current.set(
          id,
          setTimeout(() => {
            dismiss(id);
          }, lifetime),
        );
      }

      return id;
    },
    [dismiss, duration, limit],
  );

  useEffect(() => {
    const pending = timers.current;

    return () => {
      for (const timer of pending.values()) {
        clearTimeout(timer);
      }

      pending.clear();
    };
  }, []);

  const context = useMemo<TToastContext>(() => ({ dismiss, toast }), [dismiss, toast]);

  return (
    <ToastContext.Provider value={context}>
      {children}
      <ToastViewport {...(label === undefined ? {} : { 'aria-label': label })}>
        {toasts.map(({ color, description, id, title }) => (
          <Toast
            key={id}
            {...(color === undefined ? {} : { color })}
            {...(dismissLabel === undefined ? {} : { dismissLabel })}
            title={title}
            onDismiss={() => {
              dismiss(id);
            }}
          >
            {description}
          </Toast>
        ))}
      </ToastViewport>
    </ToastContext.Provider>
  );
}
