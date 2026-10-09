'use client';

import {
  DESCRIPTION_LIST_ORIENTATIONS,
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
} from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function DescriptionListDemo() {
  return (
    <DescriptionList orientation={DESCRIPTION_LIST_ORIENTATIONS.HORIZONTAL}>
      <DescriptionItem>
        <DescriptionTerm>Plan</DescriptionTerm>
        <DescriptionDetails>Team</DescriptionDetails>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionTerm>Seats</DescriptionTerm>
        <DescriptionDetails>12</DescriptionDetails>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionTerm>Renews</DescriptionTerm>
        <DescriptionDetails>1 November</DescriptionDetails>
      </DescriptionItem>
    </DescriptionList>
  );
}

export const DESCRIPTION_LIST_DEMO = {
  Demo: DescriptionListDemo,
  code: `import {
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
} from '@faber-ui/react/description-list';

<DescriptionList orientation="horizontal">
  <DescriptionItem>
    <DescriptionTerm>Plan</DescriptionTerm>
    <DescriptionDetails>Team</DescriptionDetails>
  </DescriptionItem>
</DescriptionList>`,
} satisfies TComponentDemo;
