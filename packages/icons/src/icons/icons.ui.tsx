import { createIcon } from '../icon/create-icon';

export const ArrowRightIcon = createIcon('ArrowRightIcon', <path d="M3 8h10M9 4l4 4-4 4" />);

export const ArrowUpRightIcon = createIcon(
  'ArrowUpRightIcon',
  <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />,
);

export const CheckIcon = createIcon('CheckIcon', <path d="M3 8.5l3.5 3.5L13 4.5" />);

export const CloseIcon = createIcon('CloseIcon', <path d="M4 4l8 8M12 4l-8 8" />);

export const CopyIcon = createIcon(
  'CopyIcon',
  <>
    <rect height="8" rx="1.5" width="8" x="5.5" y="5.5" />
    <path d="M10.5 3.5v-1h-8v8h1" />
  </>,
);

export const MonitorIcon = createIcon(
  'MonitorIcon',
  <>
    <rect height="8" rx="1.5" width="12" x="2" y="2.5" />
    <path d="M6 13.5h4M8 10.5v3" />
  </>,
);

export const MoonIcon = createIcon(
  'MoonIcon',
  <path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z" />,
);

export const PlusIcon = createIcon('PlusIcon', <path d="M8 3v10M3 8h10" />);

export const SunIcon = createIcon(
  'SunIcon',
  <>
    <circle cx="8" cy="8" r="2.75" />
    <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" />
  </>,
);

export const TrashIcon = createIcon(
  'TrashIcon',
  <path d="M3 4.5h10M6.5 4.5v-2h3v2M4.5 4.5l.5 9h6l.5-9" />,
);
