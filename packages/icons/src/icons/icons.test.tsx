import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import * as icons from '../index';
import { ICON_SIZES } from '../icon/icon.constants';
import * as iconComponents from './icons.ui';
import { CloseIcon } from './icons.ui';

const ICON_ENTRIES = Object.entries(iconComponents);

describe('icons', () => {
  afterEach(cleanup);

  it('SHOULD render a decorative svg that inherits the text color and forward its ref', () => {
    const ref = createRef<SVGSVGElement>();
    const { container } = render(<CloseIcon ref={ref} className="consumer" />);
    const icon = container.querySelector('svg');

    expect(icon?.getAttribute('aria-hidden')).toBe('true');
    expect(icon?.hasAttribute('role')).toBe(false);
    expect(icon?.getAttribute('stroke')).toBe('currentColor');
    expect(icon?.getAttribute('width')).toBe('16px');
    expect(icon?.getAttribute('data-icon')).toBe('CloseIcon');
    expect(icon?.classList.contains('consumer')).toBe(true);
    expect(icon?.classList.contains('faber-ui-icon')).toBe(true);
    expect(ref.current).toBe(icon);
  });

  it('SHOULD become a named image WHEN a label is provided', () => {
    const { getByRole } = render(<CloseIcon label="Closed" />);
    const icon = getByRole('img', { name: 'Closed' });

    expect(icon.hasAttribute('aria-hidden')).toBe(false);
  });

  it('SHOULD follow the surrounding font size WHEN the size is current', () => {
    const { container } = render(<CloseIcon size={ICON_SIZES.CURRENT} />);
    const icon = container.querySelector('svg');

    expect(icon?.getAttribute('width')).toBe('1em');
    expect(icon?.getAttribute('height')).toBe('1em');
  });

  it('SHOULD expose the approved icon set', () => {
    expect(Object.keys(icons).sort()).toEqual([
      'AlertCircleIcon',
      'AlertTriangleIcon',
      'ArrowDownIcon',
      'ArrowLeftIcon',
      'ArrowRightIcon',
      'ArrowUpIcon',
      'ArrowUpRightIcon',
      'BellIcon',
      'BookmarkIcon',
      'CalendarIcon',
      'CheckCircleIcon',
      'CheckIcon',
      'ChevronDownIcon',
      'ChevronLeftIcon',
      'ChevronRightIcon',
      'ChevronUpIcon',
      'ChevronsLeftIcon',
      'ChevronsRightIcon',
      'ChevronsUpDownIcon',
      'ClockIcon',
      'CloseCircleIcon',
      'CloseIcon',
      'CodeIcon',
      'CopyIcon',
      'DownloadIcon',
      'EditIcon',
      'ExternalLinkIcon',
      'EyeIcon',
      'EyeOffIcon',
      'FileIcon',
      'FileTextIcon',
      'FilterIcon',
      'FolderIcon',
      'GlobeIcon',
      'GridIcon',
      'HeartIcon',
      'HelpCircleIcon',
      'HomeIcon',
      'ICON_SIZES',
      'ImageIcon',
      'InfoIcon',
      'LinkIcon',
      'ListIcon',
      'LockIcon',
      'LogInIcon',
      'LogOutIcon',
      'MailIcon',
      'MapPinIcon',
      'MenuIcon',
      'MessageIcon',
      'MinusIcon',
      'MonitorIcon',
      'MoonIcon',
      'MoreHorizontalIcon',
      'MoreVerticalIcon',
      'PauseIcon',
      'PlayIcon',
      'PlusIcon',
      'RefreshIcon',
      'SearchIcon',
      'SettingsIcon',
      'ShareIcon',
      'SlidersIcon',
      'SortIcon',
      'StarIcon',
      'SunIcon',
      'TrashIcon',
      'UnlockIcon',
      'UploadIcon',
      'UserIcon',
      'UsersIcon',
    ]);
  });
  it.each(ICON_ENTRIES)(
    'SHOULD draw %s on the shared grid with inherited strokes',
    (name, Icon) => {
      const { container } = render(<Icon />);
      const icon = container.querySelector('svg');
      const shapes = [...(icon?.querySelectorAll('*') ?? [])];

      expect(name.endsWith('Icon')).toBe(true);
      expect(Icon.displayName).toBe(name);
      expect(icon?.getAttribute('data-icon')).toBe(name);
      expect(icon?.getAttribute('viewBox')).toBe('0 0 16 16');
      expect(icon?.getAttribute('fill')).toBe('none');
      expect(icon?.getAttribute('stroke-width')).toBe('1.5');
      expect(icon?.getAttribute('aria-hidden')).toBe('true');
      expect(shapes.length).toBeGreaterThan(0);

      for (const shape of shapes) {
        expect(['circle', 'path', 'rect']).toContain(shape.tagName);
        expect(shape.hasAttribute('fill')).toBe(false);
        expect(shape.hasAttribute('stroke')).toBe(false);
        expect(shape.hasAttribute('stroke-width')).toBe(false);
      }
    },
  );

  it('SHOULD give every icon its own drawing', () => {
    const drawings = ICON_ENTRIES.map(([, Icon]) => {
      const { container } = render(<Icon />);

      return container.querySelector('svg')?.innerHTML;
    });

    expect(new Set(drawings).size).toBe(ICON_ENTRIES.length);
  });

  it('SHOULD export every icon from the package entry', () => {
    for (const [name, Icon] of ICON_ENTRIES) {
      expect((icons as Record<string, unknown>)[name]).toBe(Icon);
    }
  });
});
