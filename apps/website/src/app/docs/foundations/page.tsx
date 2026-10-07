import type { Metadata } from 'next';

import { FoundationsPage } from '@/components/foundations-page/foundations-page.ui';

export const metadata: Metadata = {
  title: 'Foundations',
  description:
    'The Faber UI token tables: palette, semantic color roles, typography, spacing, sizes, radii, breakpoints, and motion.',
};

export default function Page() {
  return <FoundationsPage />;
}
