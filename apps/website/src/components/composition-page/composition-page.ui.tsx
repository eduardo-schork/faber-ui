'use client';

import { TrashIcon } from '@faber-ui/icons';
import {
  AlertBody,
  AlertTitle,
  ALERT_COLORS,
  Badge,
  BADGE_COLORS,
  Button,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Dialog,
  DialogClose,
  DialogRoot,
  DialogTitle,
  FieldLabel,
  FieldRoot,
  Text,
  Textarea,
  Title,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  type TButtonColor,
  type TButtonSize,
  type TButtonVariant,
} from '@faber-ui/react';
import { useId, useState } from 'react';

import { CodeBlock } from '@/components/code-block/code-block.ui';
import {
  DemoSurface,
  DocsColumns,
  DocsSection,
  DocsSectionTitle,
  DocsStack,
} from '@/components/docs-layout/docs-layout.styles';
import { DocsLayout, type TDocsSectionLink } from '@/components/docs-layout/docs-layout.ui';
import { OptionSwitch } from '@/components/option-switch/option-switch.ui';
import { Prose, TextLink } from '@/components/sheet/sheet.styles';
import { LayerTable } from '@/components/theming-page/theming-page.styles';

import {
  ActionAlertMessage,
  ActionAlertRoot,
  DemoControls,
  DemoStage,
  FieldCounter,
  FieldFooter,
  PlanCard,
  PlanCardHeader,
  SheetActions,
  SheetBody,
  SheetCorner,
  SheetMark,
} from './composition-page.styles';

const SECTIONS: readonly TDocsSectionLink[] = [
  { id: 'levels', label: 'Four levels' },
  { id: 'props', label: 'Props' },
  { id: 'tokens', label: 'Tokens' },
  { id: 'parts', label: 'Rearranging parts' },
  { id: 'molecules', label: 'Your own molecules' },
  { id: 'available', label: 'What exposes parts' },
];

const LEVELS = [
  {
    scope: 'A documented variation',
    tool: 'Typed props',
    example: '<Button variant="outline" size="small" />',
  },
  {
    scope: 'The look of one part',
    tool: 'A part class or styled()',
    example: '.faber-ui-dialog-header { … }',
  },
  {
    scope: 'A new component in the same language',
    tool: 'Tokens in your own styles',
    example: 'border-radius: ${RADII.XL};',
  },
  {
    scope: 'A different structure',
    tool: 'The parts, assembled by you',
    example: '<DialogRoot><DialogBody />…</DialogRoot>',
  },
] as const;

const PART_SETS = [
  {
    component: 'Dialog',
    parts: 'DialogRoot, DialogHeader, DialogTitle, DialogClose, DialogBody, DialogFooter',
  },
  { component: 'Alert', parts: 'AlertRoot, AlertTitle, AlertBody' },
  { component: 'Toast', parts: 'ToastRoot, ToastContent, ToastTitle, ToastBody' },
  { component: 'Field', parts: 'FieldRoot, FieldLabel, FieldDescription, FieldError' },
  { component: 'Accordion', parts: 'AccordionItemRoot, AccordionSummary, AccordionContent' },
  {
    component: 'Button',
    parts: 'ButtonRoot, ButtonContent, ButtonIcon, ButtonLabel, ButtonSpinner',
  },
  {
    component: 'RadioGroup',
    parts: 'RadioGroupRoot, RadioGroupLabel, RadioGroupOptions, RadioGroupMessage, RadioGroupError',
  },
  {
    component: 'Pagination',
    parts: 'PaginationRoot, PaginationList, PaginationButton, PaginationEllipsis',
  },
  {
    component: 'Checkbox, Radio, Switch',
    parts:
      'ChoiceControlRoot, ChoiceControlLabel, ChoiceControlInput, ChoiceControlDescription, ChoiceControlError',
  },
  {
    component: 'CodeBlock',
    parts: 'CodeBlockRoot, CodeBlockHeader, CodeBlockLabel, CodeBlockPre, CodeBlockCopy',
  },
  { component: 'Tabs', parts: 'Tabs, TabList, Tab, TabPanel' },
  { component: 'Menu', parts: 'Menu, MenuItem, MenuLabel, MenuSeparator' },
  { component: 'Breadcrumb', parts: 'Breadcrumb, BreadcrumbItem' },
  { component: 'SegmentedControl', parts: 'SegmentedControl, Segment' },
] as const;

const VARIANT_OPTIONS = Object.values(BUTTON_VARIANTS);
const COLOR_OPTIONS = Object.values(BUTTON_COLORS);
const SIZE_OPTIONS = Object.values(BUTTON_SIZES);
const NOTE_LIMIT = 120;

const TOKENS_CODE = `import { Card, COLORS, RADII, SPACINGS } from '@faber-ui/react';
import styled from 'styled-components';

// Your component, drawn with the same tokens the library uses.
// It follows every theme and every variable override for free.
export const PlanCard = styled(Card)\`
  display: flex;
  flex-direction: column;
  gap: \${SPACINGS.SM};
  border-color: \${COLORS.PRIMARY};
  border-radius: \${RADII.XL};
  box-shadow: \${SPACINGS.XXS} \${SPACINGS.XXS} 0 \${COLORS.PRIMARY};
\`;`;

const DIALOG_CODE = `import {
  Button,
  DialogBody,
  DialogClose,
  DialogRoot,
  DialogTitle,
} from '@faber-ui/react';

// SheetBody is styled(DialogBody); the corner and actions are plain flex rows.
// No header bar and no footer row: the same modal behavior, another layout.
<DialogRoot open={open} onClose={close}>
  <SheetCorner>
    <DialogClose />
  </SheetCorner>
  <SheetBody>
    <TrashIcon />
    <DialogTitle>Delete this project?</DialogTitle>
    <Text.P tone="secondary">Its deployments go with it.</Text.P>
  </SheetBody>
  <SheetActions>
    <Button color="accent" fullWidth onClick={remove}>Delete</Button>
    <Button color="neutral" variant="subtle" fullWidth onClick={close}>
      Keep it
    </Button>
  </SheetActions>
</DialogRoot>`;

const ALERT_CODE = `import { AlertBody, AlertRoot, AlertTitle, Button, VFlex } from '@faber-ui/react';
import styled from 'styled-components';

const ActionAlertRoot = styled(AlertRoot)\`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
\`;

export function ActionAlert({ action, children, title, ...rootProps }) {
  return (
    <ActionAlertRoot {...rootProps}>
      <VFlex gap="XXS">
        <AlertTitle>{title}</AlertTitle>
        <AlertBody>{children}</AlertBody>
      </VFlex>
      {action}
    </ActionAlertRoot>
  );
}`;

const FIELD_CODE = `import {
  FieldDescription,
  FieldLabel,
  FieldRoot,
  HFlex,
  Textarea,
} from '@faber-ui/react';

// Field wires ids for you. With the parts you place them and wire them yourself.
<FieldRoot>
  <FieldLabel htmlFor={id}>Release note</FieldLabel>
  <Textarea id={id} aria-describedby={hintId} maxLength={120} />
  <HFlex justify="space-between" gap="SM">
    <FieldDescription id={hintId}>Shown on the changelog.</FieldDescription>
    <FieldDescription>{note.length} / 120</FieldDescription>
  </HFlex>
</FieldRoot>`;

function PropsDemo() {
  const [variant, setVariant] = useState<TButtonVariant>(BUTTON_VARIANTS.FILLED);
  const [color, setColor] = useState<TButtonColor>(BUTTON_COLORS.PRIMARY);
  const [size, setSize] = useState<TButtonSize>(BUTTON_SIZES.MEDIUM);
  const code = `<Button variant="${variant}" color="${color}" size="${size}">
  Publish
</Button>`;

  return (
    <DocsColumns>
      <DemoSurface>
        <DemoControls>
          <OptionSwitch
            label="variant"
            options={VARIANT_OPTIONS}
            value={variant}
            onChange={setVariant}
          />
          <OptionSwitch label="color" options={COLOR_OPTIONS} value={color} onChange={setColor} />
          <OptionSwitch label="size" options={SIZE_OPTIONS} value={size} onChange={setSize} />
        </DemoControls>
        <DemoStage>
          <Button color={color} size={size} variant={variant}>
            Publish
          </Button>
        </DemoStage>
      </DemoSurface>
      <CodeBlock code={code} label="props.tsx" language="tsx" />
    </DocsColumns>
  );
}

function DialogDemo() {
  const [openDialog, setOpenDialog] = useState<'base' | 'composed' | null>(null);
  const close = () => {
    setOpenDialog(null);
  };

  return (
    <DemoSurface>
      <DemoStage>
        <Button
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setOpenDialog('base');
          }}
        >
          Open the base Dialog
        </Button>
        <Button
          color={BUTTON_COLORS.ACCENT}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setOpenDialog('composed');
          }}
        >
          Open the composed one
        </Button>
      </DemoStage>

      <Dialog
        open={openDialog === 'base'}
        title="Delete this project?"
        onClose={close}
        footer={
          <>
            <Button color={BUTTON_COLORS.NEUTRAL} variant={BUTTON_VARIANTS.OUTLINE} onClick={close}>
              Keep it
            </Button>
            <Button color={BUTTON_COLORS.ACCENT} onClick={close}>
              Delete
            </Button>
          </>
        }
      >
        Its deployments go with it.
      </Dialog>

      <DialogRoot open={openDialog === 'composed'} onClose={close}>
        <SheetCorner>
          <DialogClose />
        </SheetCorner>
        <SheetBody>
          <SheetMark aria-hidden="true">
            <TrashIcon />
          </SheetMark>
          <DialogTitle>Delete this project?</DialogTitle>
          <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>Its deployments go with it.</Text.P>
        </SheetBody>
        <SheetActions>
          <Button color={BUTTON_COLORS.ACCENT} fullWidth onClick={close}>
            Delete
          </Button>
          <Button
            color={BUTTON_COLORS.NEUTRAL}
            variant={BUTTON_VARIANTS.SUBTLE}
            fullWidth
            onClick={close}
          >
            Keep it
          </Button>
        </SheetActions>
      </DialogRoot>
    </DemoSurface>
  );
}

function ActionAlertDemo() {
  const [restored, setRestored] = useState(false);

  return (
    <DemoSurface>
      <ActionAlertRoot color={restored ? ALERT_COLORS.PRIMARY : ALERT_COLORS.ACCENT}>
        <ActionAlertMessage>
          <AlertTitle>{restored ? 'Draft restored' : 'Draft deleted'}</AlertTitle>
          <AlertBody>
            {restored ? 'It is back in your drafts.' : 'You can bring it back for 30 days.'}
          </AlertBody>
        </ActionAlertMessage>
        <Button
          color={BUTTON_COLORS.NEUTRAL}
          size={BUTTON_SIZES.SMALL}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setRestored((current) => !current);
          }}
        >
          {restored ? 'Delete again' : 'Undo'}
        </Button>
      </ActionAlertRoot>
    </DemoSurface>
  );
}

function CounterFieldDemo() {
  const id = useId();
  const hintId = `${id}-hint`;
  const [note, setNote] = useState('Parts are public now.');

  return (
    <DemoSurface>
      <FieldRoot>
        <FieldLabel htmlFor={id}>Release note</FieldLabel>
        <Textarea
          id={id}
          aria-describedby={hintId}
          maxLength={NOTE_LIMIT}
          rows={3}
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
        />
        <FieldFooter>
          <FieldCounter id={hintId}>Shown on the changelog.</FieldCounter>
          <FieldCounter aria-live="polite">
            {note.length} / {NOTE_LIMIT}
          </FieldCounter>
        </FieldFooter>
      </FieldRoot>
    </DemoSurface>
  );
}

export function CompositionPage() {
  return (
    <DocsLayout
      kicker="Composition"
      title="Take it apart."
      lead="Every component is assembled from smaller public pieces. Use the finished component when it fits, adjust it when it almost fits, and build your own from the same parts when it does not."
      sections={SECTIONS}
    >
      <DocsSection id="levels" aria-labelledby="levels-title">
        <DocsSectionTitle id="levels-title">Four levels</DocsSectionTitle>
        <Prose>
          Each level reaches further than the one before and costs a little more code. None of them
          asks you to fork a component or fight its styles.
        </Prose>
        <LayerTable>
          <thead>
            <tr>
              <th scope="col">You need</th>
              <th scope="col">Reach for</th>
              <th scope="col">Looks like</th>
            </tr>
          </thead>
          <tbody>
            {LEVELS.map(({ example, scope, tool }) => (
              <tr key={scope}>
                <th scope="row">{scope}</th>
                <td>{tool}</td>
                <td>{example}</td>
              </tr>
            ))}
          </tbody>
        </LayerTable>
      </DocsSection>

      <DocsSection id="props" aria-labelledby="props-title">
        <DocsSectionTitle id="props-title">Props</DocsSectionTitle>
        <Prose>
          The variations a component was designed for are typed props with closed sets of values.
          Change the switches and the code on the right is what you would write.
        </Prose>
        <PropsDemo />
      </DocsSection>

      <DocsSection id="tokens" aria-labelledby="tokens-title">
        <DocsSectionTitle id="tokens-title">Tokens</DocsSectionTitle>
        <Prose>
          Tokens are exported for your code too. A component you style with them belongs to the
          system: it changes with the theme and with every variable you override. To restyle a
          built-in part instead, target its class in the{' '}
          <TextLink href="/docs/playground">playground</TextLink>.
        </Prose>
        <DocsColumns>
          <DemoSurface>
            <PlanCard>
              <PlanCardHeader>
                <Title.H3 size={TYPOGRAPHY_SIZES.MEDIUM}>Team</Title.H3>
                <Badge color={BADGE_COLORS.PRIMARY}>Current plan</Badge>
              </PlanCardHeader>
              <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>
                12 seats, renews on the first of the month.
              </Text.P>
              <Button variant={BUTTON_VARIANTS.LIGHT}>Manage seats</Button>
            </PlanCard>
          </DemoSurface>
          <CodeBlock code={TOKENS_CODE} label="plan-card.styles.ts" language="tsx" />
        </DocsColumns>
      </DocsSection>

      <DocsSection id="parts" aria-labelledby="parts-title">
        <DocsSectionTitle id="parts-title">Rearranging parts</DocsSectionTitle>
        <Prose>
          <Text.Code>Dialog</Text.Code> takes a title, a body, and a footer and arranges them one
          way. <Text.Code>DialogRoot</Text.Code> is the same native modal without the arrangement:
          the top layer, the backdrop, focus containment, and Escape stay, and the inside is yours.{' '}
          <Text.Code>DialogTitle</Text.Code> still names the dialog and{' '}
          <Text.Code>DialogClose</Text.Code> still closes it, wherever you put them.
        </Prose>
        <DocsColumns>
          <DialogDemo />
          <CodeBlock code={DIALOG_CODE} label="delete-sheet.tsx" language="tsx" />
        </DocsColumns>
      </DocsSection>

      <DocsSection id="molecules" aria-labelledby="molecules-title">
        <DocsSectionTitle id="molecules-title">Your own molecules</DocsSectionTitle>
        <Prose>
          The built-in <Text.Code>Alert</Text.Code> has no action slot, and it does not need one:
          put its parts in a row next to a <Text.Code>Button</Text.Code> and you have an alert with
          an action that still looks like every other alert.
        </Prose>
        <DocsColumns>
          <ActionAlertDemo />
          <CodeBlock code={ALERT_CODE} label="action-alert.tsx" language="tsx" />
        </DocsColumns>
        <Prose>
          The same goes for forms. <Text.Code>Field</Text.Code> places the description under the
          control; with its parts you can add a character counter beside it.
        </Prose>
        <DocsColumns>
          <CounterFieldDemo />
          <CodeBlock code={FIELD_CODE} label="counter-field.tsx" language="tsx" />
        </DocsColumns>
      </DocsSection>

      <DocsSection id="available" aria-labelledby="available-title">
        <DocsSectionTitle id="available-title">What exposes parts</DocsSectionTitle>
        <Prose>
          These components export their pieces today. Every part keeps its{' '}
          <Text.Code>faber-ui-*</Text.Code> class, so a stylesheet that targets the finished
          component also reaches your composition.
        </Prose>
        <DocsStack>
          <LayerTable>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Parts</th>
              </tr>
            </thead>
            <tbody>
              {PART_SETS.map(({ component, parts }) => (
                <tr key={component}>
                  <th scope="row">{component}</th>
                  <td>{parts}</td>
                </tr>
              ))}
            </tbody>
          </LayerTable>
        </DocsStack>
      </DocsSection>
    </DocsLayout>
  );
}
