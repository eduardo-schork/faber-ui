'use client';

import { Tab, TabList, TabPanel, Tabs, Text } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabList aria-label="Project">
        <Tab value="overview">Overview</Tab>
        <Tab value="activity">Activity</Tab>
        <Tab value="settings">Settings</Tab>
        <Tab value="billing" disabled>
          Billing
        </Tab>
      </TabList>
      <TabPanel value="overview">
        <Text.P>A summary of the project. Use the arrow keys to move between tabs.</Text.P>
      </TabPanel>
      <TabPanel value="activity">
        <Text.P>Recent deployments and comments.</Text.P>
      </TabPanel>
      <TabPanel value="settings">
        <Text.P>Names, regions, and members.</Text.P>
      </TabPanel>
      <TabPanel value="billing">
        <Text.P>Invoices and payment methods.</Text.P>
      </TabPanel>
    </Tabs>
  );
}

export const TABS_DEMO = {
  Demo: TabsDemo,
  code: `import { Tab, TabList, TabPanel, Tabs } from '@faber-ui/react/tabs';

<Tabs defaultValue="overview">
  <TabList aria-label="Project">
    <Tab value="overview">Overview</Tab>
    <Tab value="activity">Activity</Tab>
    <Tab value="billing" disabled>Billing</Tab>
  </TabList>
  <TabPanel value="overview">A summary of the project.</TabPanel>
  <TabPanel value="activity">Recent deployments.</TabPanel>
  <TabPanel value="billing">Invoices.</TabPanel>
</Tabs>`,
} satisfies TComponentDemo;
