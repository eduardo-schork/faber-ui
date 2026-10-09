'use client';

import { Badge, BADGE_COLORS, Table } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function TableDemo() {
  return (
    <Table>
      <caption>Workspace members</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ada Lovelace</th>
          <td>Admin</td>
          <td>
            <Badge color={BADGE_COLORS.PRIMARY}>Active</Badge>
          </td>
        </tr>
        <tr>
          <th scope="row">Grace Hopper</th>
          <td>Editor</td>
          <td>
            <Badge>Invited</Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export const TABLE_DEMO = {
  Demo: TableDemo,
  code: `import { Table } from '@faber-ui/react/table';

<Table>
  <caption>Workspace members</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ada Lovelace</th>
      <td>Admin</td>
    </tr>
  </tbody>
</Table>`,
} satisfies TComponentDemo;
