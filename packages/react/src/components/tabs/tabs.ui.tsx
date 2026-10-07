import {
  createContext,
  forwardRef,
  useContext,
  useId,
  useMemo,
  useState,
  type KeyboardEvent,
} from 'react';

import { StyledTab, StyledTabList, StyledTabPanel, StyledTabs } from './tabs.styles';
import type { TTabListProps, TTabPanelProps, TTabProps, TTabsProps } from './tabs.types';

type TTabsContext = {
  readonly baseId: string;
  readonly selectTab: (value: string) => void;
  readonly selectedValue: string | undefined;
};

const TabsContext = createContext<TTabsContext | null>(null);

const useTabsContext = (componentName: string) => {
  const context = useContext(TabsContext);

  if (context === null) {
    throw new Error(`${componentName} must be rendered inside Tabs.`);
  }

  return context;
};

const getTabId = (baseId: string, value: string) => `${baseId}-tab-${value}`;
const getPanelId = (baseId: string, value: string) => `${baseId}-panel-${value}`;

const KEY_TARGETS: Readonly<Record<string, 'first' | 'last' | 'next' | 'previous'>> = {
  ArrowLeft: 'previous',
  ArrowRight: 'next',
  End: 'last',
  Home: 'first',
};

export const Tabs = forwardRef<HTMLDivElement, TTabsProps>(function Tabs(
  { children, defaultValue, onValueChange, value, ...nativeProps },
  ref,
) {
  const baseId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const selectedValue = value ?? uncontrolledValue;

  const context = useMemo<TTabsContext>(
    () => ({
      baseId,
      selectTab: (nextValue) => {
        if (value === undefined) {
          setUncontrolledValue(nextValue);
        }

        onValueChange?.(nextValue);
      },
      selectedValue,
    }),
    [baseId, onValueChange, selectedValue, value],
  );

  return (
    <TabsContext.Provider value={context}>
      <StyledTabs {...nativeProps} ref={ref}>
        {children}
      </StyledTabs>
    </TabsContext.Provider>
  );
});

export const TabList = forwardRef<HTMLDivElement, TTabListProps>(function TabList(
  { onKeyDown, ...nativeProps },
  ref,
) {
  // Arrow keys move between tabs and select on focus, as the WAI-ARIA tabs pattern describes.
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);

    const target = KEY_TARGETS[event.key];

    if (event.defaultPrevented || target === undefined) {
      return;
    }

    const tabs = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)'),
    );
    const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
    const lastIndex = tabs.length - 1;
    const nextIndex = {
      first: 0,
      last: lastIndex,
      next: currentIndex >= lastIndex ? 0 : currentIndex + 1,
      previous: currentIndex <= 0 ? lastIndex : currentIndex - 1,
    }[target];
    const nextTab = tabs[nextIndex];

    if (nextTab === undefined) {
      return;
    }

    event.preventDefault();
    nextTab.focus();
    nextTab.click();
  };

  return (
    <StyledTabList
      {...nativeProps}
      ref={ref}
      aria-orientation="horizontal"
      role="tablist"
      onKeyDown={handleKeyDown}
    />
  );
});

export const Tab = forwardRef<HTMLButtonElement, TTabProps>(function Tab(
  { onClick, value, ...nativeProps },
  ref,
) {
  const { baseId, selectTab, selectedValue } = useTabsContext('Tab');
  const isSelected = selectedValue === value;

  return (
    <StyledTab
      {...nativeProps}
      ref={ref}
      type="button"
      aria-controls={getPanelId(baseId, value)}
      aria-selected={isSelected}
      id={getTabId(baseId, value)}
      role="tab"
      tabIndex={isSelected ? 0 : -1}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          selectTab(value);
        }
      }}
    />
  );
});

export const TabPanel = forwardRef<HTMLDivElement, TTabPanelProps>(function TabPanel(
  { value, ...nativeProps },
  ref,
) {
  const { baseId, selectedValue } = useTabsContext('TabPanel');

  return (
    <StyledTabPanel
      {...nativeProps}
      ref={ref}
      aria-labelledby={getTabId(baseId, value)}
      hidden={selectedValue !== value}
      id={getPanelId(baseId, value)}
      role="tabpanel"
      tabIndex={0}
    />
  );
});
