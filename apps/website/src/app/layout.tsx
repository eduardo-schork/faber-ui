import '@faber-ui/react/styles.css';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { SiteShell } from '@/components/site-shell/site-shell.ui';
import { StyledComponentsRegistry } from '@/providers/styled-components-registry/styled-components-registry';
import { PREFERENCE_ATTRIBUTES, SITE_LINKS, STORAGE_KEYS } from '@/site/site.constants';

const SITE_DESCRIPTION =
  'Faber UI is a strongly typed React design system built on native HTML elements, design tokens, and CSS variables.';

// The card other sites show when a link to this one is shared. It needs an absolute address.
const SOCIAL_CARD = {
  url: `${SITE_LINKS.WEBSITE}/social-card.png`,
  width: 1200,
  height: 630,
  alt: 'Faber UI — plain parts, properly made',
};

export const metadata: Metadata = {
  title: {
    default: 'Faber UI — plain parts, properly made',
    template: '%s · Faber UI',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'Faber UI',
    title: 'Faber UI — plain parts, properly made',
    description: SITE_DESCRIPTION,
    url: SITE_LINKS.WEBSITE,
    images: [SOCIAL_CARD],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faber UI — plain parts, properly made',
    description: SITE_DESCRIPTION,
    images: [SOCIAL_CARD],
  },
};

// Applies the stored theme and material to the document element before first paint. The theme
// stylesheet is plain CSS keyed on these attributes, so no flash occurs while React hydrates.
const PREFERENCES_SCRIPT = `(function(){try{var e=document.documentElement,t=localStorage.getItem(${JSON.stringify(STORAGE_KEYS.THEME)}),m=localStorage.getItem(${JSON.stringify(STORAGE_KEYS.MATERIAL)});if(t==="light"||t==="dark"||t==="system"){e.setAttribute(${JSON.stringify(PREFERENCE_ATTRIBUTES.THEME)},t)}if(m&&/^[a-z-]+$/.test(m)){e.setAttribute(${JSON.stringify(PREFERENCE_ATTRIBUTES.MATERIAL)},m)}}catch(_){}})();`;

// The site is static and loads nothing from other origins, so the policy allows only itself.
// Inline scripts and styles stay allowed: a static export cannot attach nonces to the Next.js
// bootstrap or to styled-components. The policy is left out in development, where the tooling
// needs eval and a WebSocket.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" data-theme="system" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === 'production' ? (
          <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        ) : null}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script dangerouslySetInnerHTML={{ __html: PREFERENCES_SCRIPT }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <SiteShell>{children}</SiteShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
