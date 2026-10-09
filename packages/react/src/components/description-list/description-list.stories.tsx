import type { Meta, StoryObj } from '@storybook/react-vite';

import { DESCRIPTION_LIST_ORIENTATIONS } from './description-list.constants';
import {
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
} from './description-list.ui';

const meta = {
  title: 'Components/Display/DescriptionList',
  component: DescriptionList,
  args: {
    children: (
      <>
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
          <DescriptionDetails>On the first of the month</DescriptionDetails>
        </DescriptionItem>
      </>
    ),
  },
  argTypes: {
    orientation: { control: 'select', options: Object.values(DESCRIPTION_LIST_ORIENTATIONS) },
  },
} satisfies Meta<typeof DescriptionList>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Horizontal: TStory = {
  args: { orientation: DESCRIPTION_LIST_ORIENTATIONS.HORIZONTAL },
};
