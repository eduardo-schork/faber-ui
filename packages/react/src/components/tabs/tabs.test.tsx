import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Tab, TabList, TabPanel, Tabs } from './tabs.ui';

const renderTabs = (props: Partial<Parameters<typeof Tabs>[0]> = {}) =>
  render(
    <Tabs defaultValue="overview" {...props}>
      <TabList aria-label="Project">
        <Tab value="overview">Overview</Tab>
        <Tab value="activity">Activity</Tab>
        <Tab value="settings">Settings</Tab>
      </TabList>
      <TabPanel value="overview">Overview panel</TabPanel>
      <TabPanel value="activity">Activity panel</TabPanel>
      <TabPanel value="settings">Settings panel</TabPanel>
    </Tabs>,
  );

describe('Tabs', () => {
  afterEach(cleanup);

  it('SHOULD connect each tab to its panel and show only the selected panel', () => {
    const { getByRole, getByText } = renderTabs();
    const tab = getByRole('tab', { name: 'Overview' });
    const panel = getByRole('tabpanel', { name: 'Overview' });

    expect(getByRole('tablist', { name: 'Project' })).toBeDefined();
    expect(tab.getAttribute('aria-selected')).toBe('true');
    expect(tab.getAttribute('aria-controls')).toBe(panel.id);
    expect(panel.hidden).toBe(false);
    expect((getByText('Activity panel') as HTMLDivElement).hidden).toBe(true);
  });

  it('SHOULD select a tab WHEN it is clicked and report the change', () => {
    const handleValueChange = vi.fn();
    const { getByRole, getByText } = renderTabs({ onValueChange: handleValueChange });

    fireEvent.click(getByRole('tab', { name: 'Activity' }));

    expect(getByRole('tab', { name: 'Activity' }).getAttribute('aria-selected')).toBe('true');
    expect((getByText('Activity panel') as HTMLDivElement).hidden).toBe(false);
    expect(handleValueChange).toHaveBeenCalledWith('activity');
  });

  it('SHOULD keep one tab in the tab order and move with the arrow, Home, and End keys', () => {
    const { getByRole } = renderTabs();
    const overview = getByRole('tab', { name: 'Overview' });
    const activity = getByRole('tab', { name: 'Activity' });
    const settings = getByRole('tab', { name: 'Settings' });

    expect(overview.tabIndex).toBe(0);
    expect(activity.tabIndex).toBe(-1);

    overview.focus();
    fireEvent.keyDown(overview, { key: 'ArrowRight' });
    expect(document.activeElement).toBe(activity);
    expect(activity.getAttribute('aria-selected')).toBe('true');

    fireEvent.keyDown(activity, { key: 'End' });
    expect(document.activeElement).toBe(settings);

    fireEvent.keyDown(settings, { key: 'ArrowRight' });
    expect(document.activeElement).toBe(overview);

    fireEvent.keyDown(overview, { key: 'ArrowLeft' });
    expect(document.activeElement).toBe(settings);

    fireEvent.keyDown(settings, { key: 'Home' });
    expect(document.activeElement).toBe(overview);
  });

  it('SHOULD follow the value prop WHEN controlled', () => {
    const { getByRole } = renderTabs({ value: 'settings' });

    fireEvent.click(getByRole('tab', { name: 'Activity' }));

    expect(getByRole('tab', { name: 'Settings' }).getAttribute('aria-selected')).toBe('true');
    expect(getByRole('tab', { name: 'Activity' }).getAttribute('aria-selected')).toBe('false');
  });
});
