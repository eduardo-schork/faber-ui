import type { Metadata } from 'next';

import { ThemingPage } from '@/components/theming-page/theming-page.ui';

export const metadata: Metadata = {
  title: 'Theming',
  description:
    'How Faber UI themes work: CSS-only themes, semantic variable overrides, scoped providers, typed custom themes, and fonts.',
};

export default function Page() {
  return <ThemingPage />;
}
