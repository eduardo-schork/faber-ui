'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { PageWidth, Prose, TextLink } from '@/components/sheet/sheet.styles';

type TMovedPageProps = {
  /** Where the content lives now, as a site path. */
  readonly to: string;
};

/**
 * Sends the reader of a retired address to its new one. The static export has no server to answer
 * with a redirect, so the router does it after hydration and the link covers the case without it.
 */
export function MovedPage({ to }: TMovedPageProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <PageWidth as="main">
      <Prose>
        This guide moved. <TextLink href={to}>Continue to the new page</TextLink>.
      </Prose>
    </PageWidth>
  );
}
