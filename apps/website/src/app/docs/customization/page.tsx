import type { Metadata } from 'next';

import { CustomizationPage } from '@/components/customization-page/customization-page.ui';

export const metadata: Metadata = {
  title: 'Customization',
  description:
    'How to change Faber UI: typed props, themes, CSS variables, part class names, tokens, and components assembled from exported parts.',
};

export default function Page() {
  return <CustomizationPage />;
}
