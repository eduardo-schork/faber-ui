import type { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from './table.ui';

const ROWS = [
  { component: 'Button', element: 'button', ref: 'HTMLButtonElement' },
  { component: 'Select', element: 'select', ref: 'HTMLSelectElement' },
  { component: 'Divider', element: 'hr', ref: 'HTMLHRElement' },
] as const;

const meta = {
  title: 'Components/Display/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {
  render: (args) => (
    <Table {...args}>
      <caption>What each component renders</caption>
      <thead>
        <tr>
          <th scope="col">Component</th>
          <th scope="col">Element</th>
          <th scope="col">Ref</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map(({ component, element, ref }) => (
          <tr key={component}>
            <th scope="row">{component}</th>
            <td>{element}</td>
            <td>{ref}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ),
};
