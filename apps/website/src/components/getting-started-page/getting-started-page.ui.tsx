'use client';

import {
  Button,
  Checkbox,
  Field,
  HFlex,
  INPUT_TYPES,
  Input,
  Select,
  TYPOGRAPHY_TONES,
  Text,
  VFlex,
} from '@faber-ui/react';
import { useState, type SyntheticEvent } from 'react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import {
  DemoSurface,
  DocsColumns,
  DocsSection,
  DocsSectionTitle,
  DocsStack,
} from '@/components/docs-layout/docs-layout.styles';
import { DocsLayout, type TDocsSectionLink } from '@/components/docs-layout/docs-layout.ui';
import { ArrowUpRightIcon } from '@faber-ui/icons';
import { OptionSwitch } from '@/components/option-switch/option-switch.ui';
import { ExternalLink, Prose, TextLink } from '@/components/sheet/sheet.styles';
import { getStorybookDocsUrl } from '@/site/site.constants';

type TInviteErrors = {
  readonly email?: string;
  readonly name?: string;
  readonly terms?: string;
};

const SECTIONS: readonly TDocsSectionLink[] = [
  { id: 'install', label: 'Install' },
  { id: 'styles', label: 'Load the foundation' },
  { id: 'frameworks', label: 'Next.js and Vite' },
  { id: 'first-form', label: 'A first form' },
];

const INSTALL_COMMANDS = {
  bun: 'bun add @faber-ui/react styled-components',
  npm: 'npm install @faber-ui/react styled-components',
  yarn: 'yarn add @faber-ui/react styled-components',
} as const;

type TPackageManager = keyof typeof INSTALL_COMMANDS;

const PACKAGE_MANAGERS = Object.keys(INSTALL_COMMANDS) as TPackageManager[];

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/u;

const STYLES_CODE = `// Once, at the entry of the application.
import '@faber-ui/react/styles.css';`;

const REGISTRY_CODE = `'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useState, type PropsWithChildren } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function StyledComponentsRegistry({ children }: PropsWithChildren) {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();

    styleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return <StyleSheetManager sheet={styleSheet.instance}>{children}</StyleSheetManager>;
}`;

const NEXT_CONFIG_CODE = `import type { NextConfig } from 'next';

const nextConfig = {
  compiler: { styledComponents: true },
} satisfies NextConfig;

export default nextConfig;`;

const FORM_CODE = `import { Button, Checkbox, Field, Input, Select, VFlex } from '@faber-ui/react';

export function InviteForm() {
  const [errors, setErrors] = useState<TInviteErrors>({});

  return (
    <form noValidate onSubmit={validate}>
      <VFlex gap="MD">
        <Field label="Name" error={errors.name}>
          <Input name="name" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email}>
          <Input name="email" type="email" autoComplete="email" />
        </Field>
        <Field label="Role">
          <Select name="role" defaultValue="editor">
            <option value="viewer">Viewer</option>
            <option value="editor">Editor</option>
          </Select>
        </Field>
        <Checkbox label="They agreed to be invited" name="terms" error={errors.terms} />
        <Button type="submit">Send invitation</Button>
      </VFlex>
    </form>
  );
}`;

const readField = (data: FormData, name: string) => {
  const value = data.get(name);

  return typeof value === 'string' ? value.trim() : '';
};

function InviteForm() {
  const [errors, setErrors] = useState<TInviteErrors>({});
  const [invited, setInvited] = useState<string | null>(null);

  const validate = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = readField(data, 'name');
    const email = readField(data, 'email');
    const nextErrors: TInviteErrors = {
      ...(name === '' ? { name: 'Enter a name.' } : {}),
      ...(EMAIL_PATTERN.test(email) ? {} : { email: 'Enter an address like name@company.com.' }),
      ...(data.get('terms') === null ? { terms: 'Confirm before sending.' } : {}),
    };

    setErrors(nextErrors);
    setInvited(Object.keys(nextErrors).length === 0 ? name : null);
  };

  return (
    <form noValidate onSubmit={validate}>
      <VFlex gap="MD">
        <Field label="Name" error={errors.name}>
          <Input name="name" autoComplete="name" />
        </Field>
        <Field
          label="Email"
          description="Nothing is sent; this form only validates."
          error={errors.email}
        >
          <Input name="email" type={INPUT_TYPES.EMAIL} autoComplete="email" />
        </Field>
        <Field label="Role">
          <Select name="role" defaultValue="editor">
            <option value="viewer">Viewer</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </Select>
        </Field>
        <Checkbox label="They agreed to be invited" name="terms" error={errors.terms} />
        <HFlex>
          <Button type="submit">Send invitation</Button>
        </HFlex>
        {invited === null ? null : (
          <Text.P role="status" tone={TYPOGRAPHY_TONES.SECONDARY}>
            Valid. An invitation for {invited} would be sent now.
          </Text.P>
        )}
      </VFlex>
    </form>
  );
}

export function GettingStartedPage() {
  const [packageManager, setPackageManager] = useState<TPackageManager>('bun');

  return (
    <DocsLayout
      kicker="Get started"
      title="From install to a working form."
      lead="One package, one stylesheet, and no required provider. This guide ends with a validated form."
      sections={SECTIONS}
    >
      <DocsSection id="install" aria-labelledby="install-title">
        <DocsSectionTitle id="install-title">Install</DocsSectionTitle>
        <Prose>
          Install the React package and its one peer, styled-components. Tokens and themes arrive as
          dependencies of the React package. Icons are optional and live in their own package,{' '}
          <Text.Code>@faber-ui/icons</Text.Code>. React 18 and 19 are supported, and the packages
          are ESM only. Until 1.0, a minor version may change an API.
        </Prose>
        <OptionSwitch
          label="With"
          options={PACKAGE_MANAGERS}
          value={packageManager}
          onChange={setPackageManager}
        />
        <CodeBlock code={INSTALL_COMMANDS[packageManager]} label="terminal" language="bash" />
      </DocsSection>

      <DocsSection id="styles" aria-labelledby="styles-title">
        <DocsSectionTitle id="styles-title">Load the foundation</DocsSectionTitle>
        <Prose>
          Import the stylesheet once. It defines the theme variables for light, dark, and system,
          and loads the packaged font. Components work from this point on; mounting a provider is
          optional.
        </Prose>
        <CodeBlock code={STYLES_CODE} label="entry file" language="tsx" />
        <Prose>
          Use <Text.Code>@faber-ui/react/theme.css</Text.Code> instead if you bring your own font.{' '}
          <TextLink href="/docs/customization#variables">More on fonts</TextLink>. For a small page
          baseline (border-box sizing, body colors and font, reduced motion), mount the optional{' '}
          <Text.Code>GlobalStyles</Text.Code> component once.
        </Prose>
      </DocsSection>

      <DocsSection id="frameworks" aria-labelledby="frameworks-title">
        <DocsSectionTitle id="frameworks-title">Next.js and Vite</DocsSectionTitle>
        <Prose>
          In a Vite application there is nothing more to configure. In the Next.js App Router,
          styled-components needs a registry so styles are collected during server rendering, and
          the compiler flag that keeps class names stable between server and client. This site uses
          exactly this setup.
        </Prose>
        <DocsColumns>
          <CodeBlock code={REGISTRY_CODE} label="styled-components-registry.tsx" language="tsx" />
          <DocsStack>
            <CodeBlock code={NEXT_CONFIG_CODE} label="next.config.ts" language="tsx" />
            <Prose>
              The components are marked as client components inside the package, so a server
              component can import and render them directly, and tokens and option constants stay
              readable on the server. Your own file needs <Text.Code>{"'use client'"}</Text.Code>{' '}
              only when it holds state or event handlers.
            </Prose>
          </DocsStack>
        </DocsColumns>
      </DocsSection>

      <DocsSection id="first-form" aria-labelledby="first-form-title">
        <DocsSectionTitle id="first-form-title">A first form</DocsSectionTitle>
        <Prose>
          <Text.Code>Field</Text.Code> connects a label, a description, and an error to the control
          inside it. Validation stays in your code: pass the message in, and Field sets{' '}
          <Text.Code>aria-invalid</Text.Code> and <Text.Code>aria-describedby</Text.Code>. Submit
          the form empty to see it.
        </Prose>
        <DocsColumns>
          <DemoSurface>
            <InviteForm />
          </DemoSurface>
          <CodeBlock code={FORM_CODE} label="invite-form.tsx" language="tsx" />
        </DocsColumns>
        <Prose>
          For validation libraries and translated messages, read the{' '}
          <ExternalLink href={getStorybookDocsUrl('introduction-forms')}>
            Forms guide in Storybook
            <ArrowUpRightIcon />
          </ExternalLink>
          .
        </Prose>
      </DocsSection>
    </DocsLayout>
  );
}
