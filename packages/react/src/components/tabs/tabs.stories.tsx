import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tab, TabList, TabPanel, Tabs } from './tabs.ui';

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  args: { children: null, defaultValue: 'overview' },
  argTypes: { children: { control: false } },
  render: (args) => (
    <Tabs {...args}>
      <TabList aria-label="Project">
        <Tab value="overview">Overview</Tab>
        <Tab value="activity">Activity</Tab>
        <Tab value="settings">Settings</Tab>
        <Tab value="billing" disabled>
          Billing
        </Tab>
      </TabList>
      <TabPanel value="overview">A summary of the project.</TabPanel>
      <TabPanel value="activity">Recent deployments and comments.</TabPanel>
      <TabPanel value="settings">Names, regions, and members.</TabPanel>
      <TabPanel value="billing">Invoices and payment methods.</TabPanel>
    </Tabs>
  ),
} satisfies Meta<typeof Tabs>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
