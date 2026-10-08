'use client';

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  GlobalStyles,
  ToastProvider,
  THEME_MODES,
  TYPOGRAPHY_SIZES,
  SkipLink,
  Text,
  TYPOGRAPHY_TONES,
  type TThemeMode,
} from '@faber-ui/react';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren, ReactElement } from 'react';

import { ArrowUpRightIcon, MonitorIcon, MoonIcon, SunIcon } from '@faber-ui/icons';
import { BrandLogo } from '@/components/brand-logo/brand-logo.ui';
import { ExternalLink, PageWidth } from '@/components/sheet/sheet.styles';
import { useSitePreferences } from '@/hooks/use-site-preferences';
import { DOC_PAGES, PACKAGE_VERSION, SITE_LINKS } from '@/site/site.constants';

import {
  Brand,
  BrandVersion,
  FooterLinks,
  FooterRow,
  HeaderActions,
  HeaderExternalLink,
  HeaderNav,
  HeaderRow,
  NavLink,
  SiteContent,
  SiteFooter,
  SiteHeader,
  SiteStyles,
  ThemeButton,
} from './site-shell.styles';

const CONTENT_ID = 'content';

const NEXT_THEME: Readonly<Record<TThemeMode, TThemeMode>> = {
  [THEME_MODES.SYSTEM]: THEME_MODES.LIGHT,
  [THEME_MODES.LIGHT]: THEME_MODES.DARK,
  [THEME_MODES.DARK]: THEME_MODES.SYSTEM,
};

const THEME_ICONS: Readonly<Record<TThemeMode, ReactElement>> = {
  [THEME_MODES.SYSTEM]: <MonitorIcon />,
  [THEME_MODES.LIGHT]: <SunIcon />,
  [THEME_MODES.DARK]: <MoonIcon />,
};

export function SiteShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { setTheme, theme } = useSitePreferences();
  const nextTheme = NEXT_THEME[theme];

  return (
    <ToastProvider>
      <GlobalStyles />
      <SiteStyles />

      <SkipLink href={`#${CONTENT_ID}`} />

      <SiteHeader>
        <PageWidth>
          <HeaderRow>
            <Brand href="/" aria-label="Faber UI home">
              <BrandLogo />
              Faber UI
              <BrandVersion aria-hidden="true">{PACKAGE_VERSION}</BrandVersion>
            </Brand>

            <HeaderNav aria-label="Primary">
              {DOC_PAGES.map(({ href, label }) => (
                <NavLink key={href} href={href} current={pathname === href}>
                  {label}
                </NavLink>
              ))}
            </HeaderNav>

            <HeaderActions>
              <HeaderExternalLink href={SITE_LINKS.STORYBOOK}>
                Storybook
                <ArrowUpRightIcon />
              </HeaderExternalLink>
              <HeaderExternalLink href={SITE_LINKS.REPOSITORY}>
                GitHub
                <ArrowUpRightIcon />
              </HeaderExternalLink>
              <ThemeButton
                aria-label={`Theme: ${theme}. Switch to ${nextTheme}.`}
                color={BUTTON_COLORS.NEUTRAL}
                size={BUTTON_SIZES.SMALL}
                startIcon={THEME_ICONS[theme]}
                variant={BUTTON_VARIANTS.OUTLINE}
                onClick={() => {
                  setTheme(nextTheme);
                }}
              >
                {theme}
              </ThemeButton>
            </HeaderActions>
          </HeaderRow>
        </PageWidth>
      </SiteHeader>

      <SiteContent id={CONTENT_ID} tabIndex={-1}>
        {children}
      </SiteContent>

      <SiteFooter>
        <PageWidth>
          <FooterRow>
            <Text.P size={TYPOGRAPHY_SIZES.SMALLER} tone={TYPOGRAPHY_TONES.SECONDARY}>
              Faber UI {PACKAGE_VERSION}. MIT licensed, and built with the components it documents.
            </Text.P>
            <FooterLinks aria-label="Elsewhere">
              <ExternalLink size={TYPOGRAPHY_SIZES.SMALLER} href={SITE_LINKS.STORYBOOK}>
                Storybook
                <ArrowUpRightIcon />
              </ExternalLink>
              <ExternalLink size={TYPOGRAPHY_SIZES.SMALLER} href={SITE_LINKS.REPOSITORY}>
                GitHub
                <ArrowUpRightIcon />
              </ExternalLink>
              <ExternalLink size={TYPOGRAPHY_SIZES.SMALLER} href={SITE_LINKS.NPM}>
                npm
                <ArrowUpRightIcon />
              </ExternalLink>
            </FooterLinks>
          </FooterRow>
        </PageWidth>
      </SiteFooter>
    </ToastProvider>
  );
}
