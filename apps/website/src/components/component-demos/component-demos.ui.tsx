'use client';

import {
  ALERT_COLORS,
  AVATAR_SIZES,
  Accordion,
  AccordionItem,
  Alert,
  AlertDialog,
  Autocomplete,
  Avatar,
  BADGE_COLORS,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  COLORS,
  Card,
  Checkbox,
  CodeBlock as LibraryCodeBlock,
  Container,
  DESCRIPTION_LIST_ORIENTATIONS,
  DIVIDER_ORIENTATIONS,
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
  Dialog,
  Divider,
  Drawer,
  FLEX_ALIGNS,
  FLEX_DIRECTIONS,
  FLEX_JUSTIFIES,
  FLEX_WRAPS,
  Field,
  Flex,
  Footer,
  Grid,
  HFlex,
  Header,
  INPUT_TYPES,
  IconButton,
  Input,
  LIST_MARKERS,
  Link,
  LinkButton,
  List,
  ListItem,
  MENU_ITEM_COLORS,
  Menu,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  NavLink,
  Pagination,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  SPINNER_SIZES,
  Segment,
  SegmentedControl,
  Select,
  SideNav,
  SideNavGroup,
  Skeleton,
  SkipLink,
  Slider,
  Spinner,
  Switch,
  TOAST_COLORS,
  TOOLTIP_SIDES,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
  Tab,
  TabList,
  TabPanel,
  Table,
  Tabs,
  Text,
  Textarea,
  Title,
  Toast,
  ToastViewport,
  Tooltip,
  VFlex,
  VisuallyHidden,
  useToast,
  COLOR_SWATCH_ORIENTATIONS,
  ColorSwatch,
  Listbox,
  ListboxGroup,
  ListboxOption,
  ListboxSeparator,
  RadioCard,
} from '@faber-ui/react';
import NextLink from 'next/link';
import { useEffect, useState, type ReactElement } from 'react';

import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  PlusIcon,
  TrashIcon,
} from '@faber-ui/icons';
import type { TCatalogSlug } from '@/site/component-catalog';

import {
  DemoBox,
  DemoCanvas,
  DemoCentered,
  DemoFieldset,
  DemoFocusZone,
  DemoMedia,
  DemoNote,
  DemoRow,
  DemoStack,
} from './component-demos.styles';

type TComponentDemo = {
  readonly code: string;
  readonly Demo: () => ReactElement;
};

const SAVE_DURATION = 1600;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/u;

// A small inline portrait, so the example needs no network request.
const PORTRAIT_SOURCE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23c9d3d8'/%3E%3Ccircle cx='24' cy='19' r='8' fill='%235b6b73'/%3E%3Cpath d='M8 48c0-10 7-17 16-17s16 7 16 17z' fill='%235b6b73'/%3E%3C/svg%3E";
// An undecodable image: it fires the error event without touching the network.
const BROKEN_SOURCE = 'data:image/png;base64,AAAA';

const toLabel = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

function ButtonDemo() {
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!saving) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setSaving(false);
    }, SAVE_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [saving]);

  return (
    <DemoStack>
      <DemoRow>
        {Object.values(BUTTON_VARIANTS).map((variant) => (
          <Button key={variant} variant={variant}>
            {toLabel(variant)}
          </Button>
        ))}
      </DemoRow>
      <DemoRow>
        {Object.values(BUTTON_VARIANTS).map((variant) => (
          <Button key={variant} color={BUTTON_COLORS.ACCENT} variant={variant}>
            {toLabel(variant)}
          </Button>
        ))}
      </DemoRow>
      <DemoRow>
        <Button size={BUTTON_SIZES.SMALL}>Small</Button>
        <Button size={BUTTON_SIZES.LARGE}>Large</Button>
        <Button
          loading={saving}
          startIcon={<CheckIcon />}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setSaving(true);
          }}
        >
          Save changes
        </Button>
        <Button disabled>Disabled</Button>
      </DemoRow>
    </DemoStack>
  );
}

function IconButtonDemo() {
  return (
    <DemoRow>
      <IconButton aria-label="Add item">
        <PlusIcon />
      </IconButton>
      <IconButton aria-label="Confirm" variant={BUTTON_VARIANTS.LIGHT}>
        <CheckIcon />
      </IconButton>
      <IconButton aria-label="Close" variant={BUTTON_VARIANTS.OUTLINE}>
        <CloseIcon />
      </IconButton>
      <IconButton
        aria-label="Delete item"
        color={BUTTON_COLORS.ACCENT}
        variant={BUTTON_VARIANTS.SUBTLE}
      >
        <TrashIcon />
      </IconButton>
      <IconButton aria-label="Add item, small" size={BUTTON_SIZES.SMALL}>
        <PlusIcon />
      </IconButton>
      <IconButton aria-label="Saving" loading>
        <CheckIcon />
      </IconButton>
    </DemoRow>
  );
}

function LinkButtonDemo() {
  return (
    <DemoRow>
      <LinkButton as={NextLink} href="/docs" endIcon={<ArrowRightIcon />}>
        Get started
      </LinkButton>
      <LinkButton
        as={NextLink}
        href="/docs/customization"
        color={BUTTON_COLORS.NEUTRAL}
        variant={BUTTON_VARIANTS.OUTLINE}
      >
        Theming
      </LinkButton>
      <LinkButton href="#link-button" color={BUTTON_COLORS.ACCENT} variant={BUTTON_VARIANTS.LIGHT}>
        Plain anchor
      </LinkButton>
    </DemoRow>
  );
}

function LinkDemo() {
  return (
    <DemoStack>
      <Text.P>
        Routed through Next.js:{' '}
        <Link as={NextLink} href="/docs/foundations">
          the token tables
        </Link>
        .
      </Text.P>
      <DemoRow>
        <Link href="#link" tone={TYPOGRAPHY_TONES.PRIMARY}>
          Primary tone
        </Link>
        <Link href="#link" tone={TYPOGRAPHY_TONES.SECONDARY} size={TYPOGRAPHY_SIZES.SMALLER}>
          Secondary, smaller
        </Link>
      </DemoRow>
    </DemoStack>
  );
}

function SegmentedControlDemo() {
  const [view, setView] = useState('board');

  return (
    <DemoStack>
      <SegmentedControl label="View">
        {['list', 'board', 'timeline'].map((option) => (
          <Segment
            key={option}
            name="demo-view"
            value={option}
            checked={view === option}
            onChange={() => {
              setView(option);
            }}
          >
            {toLabel(option)}
          </Segment>
        ))}
      </SegmentedControl>
      <SegmentedControl label="Billing period" labelHidden size="small">
        <Segment name="demo-billing" value="monthly" defaultChecked>
          Monthly
        </Segment>
        <Segment name="demo-billing" value="yearly">
          Yearly
        </Segment>
        <Segment name="demo-billing" value="lifetime" disabled>
          Lifetime
        </Segment>
      </SegmentedControl>
      <DemoNote role="status">Showing the {view} view.</DemoNote>
    </DemoStack>
  );
}

function CardDemo() {
  return (
    <DemoStack>
      <Card as="section" aria-label="Plan">
        <Text.Strong>Team plan</Text.Strong>
        <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>
          12 seats, renews on the first of the month.
        </Text.P>
      </Card>
      <Card padding="small">
        <Text.Small>padding=&quot;small&quot;</Text.Small>
      </Card>
    </DemoStack>
  );
}

function TableDemo() {
  return (
    <Table>
      <caption>Workspace members</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ada Lovelace</th>
          <td>Admin</td>
          <td>
            <Badge color={BADGE_COLORS.PRIMARY}>Active</Badge>
          </td>
        </tr>
        <tr>
          <th scope="row">Grace Hopper</th>
          <td>Editor</td>
          <td>
            <Badge>Invited</Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

function AlertDemo() {
  return (
    <DemoStack>
      <Alert title="Early release" color={ALERT_COLORS.ACCENT}>
        APIs may change before version 1.0.
      </Alert>
      <Alert title="Saved" color={ALERT_COLORS.PRIMARY}>
        Your changes are live.
      </Alert>
      <Alert color={ALERT_COLORS.ERROR}>The payment could not be processed.</Alert>
      <Alert>A neutral note without a title.</Alert>
    </DemoStack>
  );
}

function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link
          as={NextLink}
          href="/"
          tone={TYPOGRAPHY_TONES.SECONDARY}
          size={TYPOGRAPHY_SIZES.SMALLER}
        >
          Home
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link
          as={NextLink}
          href="/docs"
          tone={TYPOGRAPHY_TONES.SECONDARY}
          size={TYPOGRAPHY_SIZES.SMALLER}
        >
          Documentation
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem current>Components</BreadcrumbItem>
    </Breadcrumb>
  );
}

function PaginationDemo() {
  const [page, setPage] = useState(6);

  return (
    <DemoStack>
      <Pagination count={20} page={page} onPageChange={setPage} />
      <DemoNote role="status">Page {page} of 20.</DemoNote>
    </DemoStack>
  );
}

function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabList aria-label="Project">
        <Tab value="overview">Overview</Tab>
        <Tab value="activity">Activity</Tab>
        <Tab value="settings">Settings</Tab>
        <Tab value="billing" disabled>
          Billing
        </Tab>
      </TabList>
      <TabPanel value="overview">
        <Text.P>A summary of the project. Use the arrow keys to move between tabs.</Text.P>
      </TabPanel>
      <TabPanel value="activity">
        <Text.P>Recent deployments and comments.</Text.P>
      </TabPanel>
      <TabPanel value="settings">
        <Text.P>Names, regions, and members.</Text.P>
      </TabPanel>
      <TabPanel value="billing">
        <Text.P>Invoices and payment methods.</Text.P>
      </TabPanel>
    </Tabs>
  );
}

function SliderDemo() {
  const [volume, setVolume] = useState(40);

  return (
    <DemoStack>
      <Field label="Volume" description={`Currently ${String(volume)} of 100.`}>
        <Slider
          name="volume"
          min={0}
          max={100}
          value={volume}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
      </Field>
      <Field label="Unavailable">
        <Slider name="locked" defaultValue={70} disabled />
      </Field>
    </DemoStack>
  );
}

function AutocompleteDemo() {
  return (
    <Field label="Region" description="Pick a suggestion or type another city.">
      <Autocomplete
        name="region"
        placeholder="Start typing"
        options={['Dublin', 'Frankfurt', 'Lisbon', 'São Paulo', 'Washington, D.C.']}
      />
    </Field>
  );
}

function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem summary="How long does shipping take?" name="demo-faq" open>
        Orders ship within two business days.
      </AccordionItem>
      <AccordionItem summary="Can I return an item?" name="demo-faq">
        Returns are accepted for thirty days.
      </AccordionItem>
      <AccordionItem summary="Do you ship abroad?" name="demo-faq">
        Yes, to most countries.
      </AccordionItem>
    </Accordion>
  );
}

function ProgressDemo() {
  const [uploaded, setUploaded] = useState(35);

  return (
    <DemoStack>
      <Progress label="Uploading report" value={uploaded} max={100} />
      <DemoRow>
        <Button
          size={BUTTON_SIZES.SMALL}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setUploaded((current) => (current >= 100 ? 0 : current + 15));
          }}
        >
          Advance
        </Button>
        <DemoNote role="status">{Math.min(uploaded, 100)}% uploaded.</DemoNote>
      </DemoRow>
      <Progress label="Syncing" />
    </DemoStack>
  );
}

function ToastDemo() {
  const [toasts, setToasts] = useState<readonly number[]>([]);

  return (
    <DemoStack>
      <Toast title="Saved" color={TOAST_COLORS.PRIMARY}>
        A toast rendered in place, to show its anatomy.
      </Toast>
      <DemoRow>
        <Button
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setToasts((current) => [...current, Date.now()]);
          }}
        >
          Show a toast in the corner
        </Button>
      </DemoRow>
      <ToastViewport>
        {toasts.map((id) => (
          <Toast
            key={id}
            title="Link copied"
            onDismiss={() => {
              setToasts((current) => current.filter((toast) => toast !== id));
            }}
          >
            Dismiss it with the button.
          </Toast>
        ))}
      </ToastViewport>
    </DemoStack>
  );
}

function TooltipDemo() {
  return (
    <DemoRow>
      <Tooltip content="Copy the link">
        <IconButton aria-label="Copy" variant={BUTTON_VARIANTS.OUTLINE}>
          <CopyIcon />
        </IconButton>
      </Tooltip>
      {Object.values(TOOLTIP_SIDES).map((side) => (
        <Tooltip key={side} content={`Placed on the ${side}`} side={side}>
          <Button color={BUTTON_COLORS.NEUTRAL} variant={BUTTON_VARIANTS.OUTLINE}>
            {toLabel(side)}
          </Button>
        </Tooltip>
      ))}
    </DemoRow>
  );
}

function PopoverDemo() {
  return (
    <Popover
      label="Share settings"
      content={
        <DemoStack>
          <Text.Strong>Share this project</Text.Strong>
          <Switch label="Anyone with the link can view" name="demo-share" defaultChecked />
        </DemoStack>
      }
    >
      <Button variant={BUTTON_VARIANTS.OUTLINE}>Share</Button>
    </Popover>
  );
}

function MenuDemo() {
  const [lastAction, setLastAction] = useState('nothing yet');

  return (
    <DemoStack>
      <DemoRow>
        <Menu trigger={<Button variant={BUTTON_VARIANTS.OUTLINE}>Options</Button>}>
          <MenuLabel>Project</MenuLabel>
          {['Rename', 'Duplicate'].map((action) => (
            <MenuItem
              key={action}
              onSelect={() => {
                setLastAction(action);
              }}
            >
              {action}
            </MenuItem>
          ))}
          <MenuItem disabled>Transfer</MenuItem>
          <MenuSeparator />
          <MenuItem
            color={MENU_ITEM_COLORS.ERROR}
            onSelect={() => {
              setLastAction('Delete');
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </DemoRow>
      <DemoNote role="status">Last action: {lastAction}.</DemoNote>
    </DemoStack>
  );
}

function DialogDemo() {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };

  return (
    <DemoRow>
      <Button
        color={BUTTON_COLORS.ACCENT}
        variant={BUTTON_VARIANTS.OUTLINE}
        onClick={() => {
          setOpen(true);
        }}
      >
        Delete project
      </Button>
      <Dialog
        open={open}
        title="Delete project"
        onClose={close}
        footer={
          <>
            <Button color={BUTTON_COLORS.NEUTRAL} variant={BUTTON_VARIANTS.OUTLINE} onClick={close}>
              Cancel
            </Button>
            <Button color={BUTTON_COLORS.ACCENT} onClick={close}>
              Delete
            </Button>
          </>
        }
      >
        The project and its deployments will be removed. This cannot be undone.
      </Dialog>
    </DemoRow>
  );
}

function DrawerDemo() {
  const [open, setOpen] = useState(false);

  return (
    <DemoRow>
      <Button
        variant={BUTTON_VARIANTS.OUTLINE}
        onClick={() => {
          setOpen(true);
        }}
      >
        Open filters
      </Button>
      <Drawer
        open={open}
        title="Filters"
        onClose={() => {
          setOpen(false);
        }}
      >
        <DemoStack>
          <Checkbox label="Only my projects" name="drawer-mine" defaultChecked />
          <Checkbox label="Include archived" name="drawer-archived" />
          <Field label="Region">
            <Select name="drawer-region" defaultValue="all">
              <option value="all">All regions</option>
              <option value="fra">Frankfurt</option>
            </Select>
          </Field>
        </DemoStack>
      </Drawer>
    </DemoRow>
  );
}

function InputDemo() {
  return (
    <DemoStack>
      <Field label="Email" description="Used for account notices only.">
        <Input
          name="email"
          type={INPUT_TYPES.EMAIL}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </Field>
      <Field label="Search">
        <Input name="query" type={INPUT_TYPES.SEARCH} placeholder="Find a component" />
      </Field>
      <Field label="API key">
        <Input name="key" defaultValue="fb_live_3f9a" disabled />
      </Field>
    </DemoStack>
  );
}

function TextareaDemo() {
  return (
    <Field label="Release notes" description="Drag the corner to resize vertically.">
      <Textarea name="notes" rows={4} placeholder="What changed in this version?" />
    </Field>
  );
}

function SelectDemo() {
  return (
    <Field label="Region" description="Where the workspace data is stored.">
      <Select name="region" defaultValue="fra">
        <optgroup label="Europe">
          <option value="fra">Frankfurt</option>
          <option value="dub">Dublin</option>
        </optgroup>
        <optgroup label="Americas">
          <option value="gru">São Paulo</option>
          <option value="iad">Washington, D.C.</option>
        </optgroup>
      </Select>
    </Field>
  );
}

function ListboxDemo() {
  const [region, setRegion] = useState('fra');

  return (
    <Field label="Region" description={`Selected value: ${region}`}>
      <Listbox name="listbox-region" value={region} onValueChange={setRegion}>
        <ListboxGroup label="Europe">
          <ListboxOption value="fra">Frankfurt</ListboxOption>
          <ListboxOption value="dub">Dublin</ListboxOption>
        </ListboxGroup>
        <ListboxSeparator />
        <ListboxGroup label="Americas">
          <ListboxOption value="gru">São Paulo</ListboxOption>
          <ListboxOption value="iad" disabled>
            Washington, D.C.
          </ListboxOption>
        </ListboxGroup>
      </Listbox>
    </Field>
  );
}

function RadioCardDemo() {
  return (
    <RadioGroup label="Plan">
      <Grid columns={{ MOBILE: 1, MOBILE_LARGE: 2 }} gap="SM">
        <RadioCard name="demo-plan" value="solo" label="Solo" description="One seat" />
        <RadioCard
          name="demo-plan"
          value="team"
          label="Team"
          description="Up to 12 seats"
          defaultChecked
        />
      </Grid>
    </RadioGroup>
  );
}

function ColorSwatchDemo() {
  return (
    <DemoStack>
      <ColorSwatch color={COLORS.PRIMARY} label="PRIMARY" value="--faber-ui-color-primary" />
      <ColorSwatch color={COLORS.ACCENT} label="ACCENT" value="--faber-ui-color-accent" />
      <Grid columns={3} gap="SM">
        <ColorSwatch
          color={COLORS.PRIMARY}
          label="Primary"
          orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
        />
        <ColorSwatch
          color={COLORS.PRIMARY_HOVER}
          label="Hover"
          orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
        />
        <ColorSwatch
          color={COLORS.PRIMARY_ACTIVE}
          label="Active"
          orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
        />
      </Grid>
    </DemoStack>
  );
}

function CheckboxDemo() {
  const [accepted, setAccepted] = useState(false);

  return (
    <DemoStack>
      <Checkbox label="Send me product updates" name="updates" defaultChecked />
      <Checkbox
        label="Share anonymous usage data"
        name="usage"
        description="Helps prioritize which components to build next."
      />
      <Checkbox
        label="I accept the terms"
        name="terms"
        checked={accepted}
        error={accepted ? undefined : 'Accept the terms to continue.'}
        onChange={(event) => {
          setAccepted(event.target.checked);
        }}
      />
      <Checkbox label="Unavailable on this plan" name="sso" disabled />
    </DemoStack>
  );
}

function RadioDemo() {
  return (
    <DemoFieldset>
      <legend>Density</legend>
      <Radio label="Comfortable" name="demo-density" value="comfortable" defaultChecked />
      <Radio label="Compact" name="demo-density" value="compact" />
      <Radio
        label="Custom"
        name="demo-density"
        value="custom"
        description="Set spacing per view."
      />
    </DemoFieldset>
  );
}

function RadioGroupDemo() {
  const [plan, setPlan] = useState<string | null>(null);

  return (
    <RadioGroup
      label="Plan"
      description="You can change this at any time."
      error={plan === null ? 'Choose a plan to continue.' : undefined}
    >
      {['Starter', 'Team', 'Enterprise'].map((option) => (
        <Radio
          key={option}
          label={option}
          name="demo-plan"
          value={option}
          checked={plan === option}
          onChange={() => {
            setPlan(option);
          }}
        />
      ))}
    </RadioGroup>
  );
}

function SwitchDemo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <DemoStack>
      <Switch
        label="Deploy previews"
        name="previews"
        description="Build a preview for every pull request."
        checked={enabled}
        onChange={(event) => {
          setEnabled(event.target.checked);
        }}
      />
      <Switch label="Single sign-on" name="demo-sso" disabled />
      <DemoNote role="status">Previews are {enabled ? 'on' : 'off'}.</DemoNote>
    </DemoStack>
  );
}

function FieldDemo() {
  const [email, setEmail] = useState('ada@example');
  const isValid = EMAIL_PATTERN.test(email);

  return (
    <Field
      label="Work email"
      description="Edit the value to see the error connect and clear."
      error={isValid ? undefined : 'Enter an address like name@company.com.'}
    >
      <Input
        name="work-email"
        type={INPUT_TYPES.EMAIL}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
    </Field>
  );
}

function FlexDemo() {
  const [outlined, setOutlined] = useState(true);
  const outlineColor = outlined ? COLORS.ACCENT : undefined;

  return (
    <DemoStack>
      <Flex
        align={{ MOBILE: FLEX_ALIGNS.STRETCH, TABLET: FLEX_ALIGNS.CENTER }}
        direction={{ MOBILE: FLEX_DIRECTIONS.COLUMN, TABLET: FLEX_DIRECTIONS.ROW }}
        gap={{ MOBILE: 'XS', TABLET: 'LG' }}
        outlineColor={outlineColor}
      >
        <DemoBox>Column below 768px</DemoBox>
        <DemoBox>Row above it</DemoBox>
        <DemoBox>gap: XS, then LG</DemoBox>
      </Flex>
      <HFlex gap="XS" outlineColor={outlineColor}>
        <DemoBox>HFlex</DemoBox>
        <DemoBox>always a row</DemoBox>
      </HFlex>
      <VFlex gap="XS" outlineColor={outlineColor}>
        <DemoBox>VFlex</DemoBox>
        <DemoBox>always a column</DemoBox>
      </VFlex>
      <Switch
        label="Show outlines"
        name="flex-outlines"
        checked={outlined}
        onChange={(event) => {
          setOutlined(event.target.checked);
        }}
      />
    </DemoStack>
  );
}

function ContainerDemo() {
  return (
    <DemoCanvas>
      <Container center gap="XS" outlineColor={COLORS.ACCENT} size="320px">
        <DemoBox>max-width: 320px</DemoBox>
        <DemoBox>centered with logical margins</DemoBox>
      </Container>
    </DemoCanvas>
  );
}

function CenterFlexDemo() {
  return (
    <DemoCentered gap="SM" outlineColor={COLORS.ACCENT}>
      <Spinner decorative size={SPINNER_SIZES.SMALL} />
      <Text.Span>Centered on both axes</Text.Span>
    </DemoCentered>
  );
}

function DividerDemo() {
  return (
    <DemoStack>
      <Text.P>Billing</Text.P>
      <Divider />
      <Text.P>Invoices</Text.P>
      <HFlex align={FLEX_ALIGNS.CENTER} gap="SM">
        <Text.Span>Edit</Text.Span>
        <Divider orientation={DIVIDER_ORIENTATIONS.VERTICAL} />
        <Text.Span>Duplicate</Text.Span>
        <Divider orientation={DIVIDER_ORIENTATIONS.VERTICAL} />
        <Text.Span>Archive</Text.Span>
      </HFlex>
    </DemoStack>
  );
}

function TextDemo() {
  return (
    <DemoStack>
      <Text.P>
        A paragraph with <Text.Strong>strong</Text.Strong> and <Text.Em>emphasized</Text.Em>{' '}
        phrases, and a <Text.A href="#text">link that keeps its underline</Text.A>.
      </Text.P>
      <Text.P tone={TYPOGRAPHY_TONES.SECONDARY} size={TYPOGRAPHY_SIZES.SMALLER}>
        Secondary tone, smaller size. Still a paragraph element.
      </Text.P>
      <Text.Span truncate weight={TYPOGRAPHY_WEIGHTS.SEMIBOLD}>
        A truncated span follows the width of its parent and ends in an ellipsis when the line runs
        out of room, which this sentence is long enough to demonstrate.
      </Text.Span>
      <Text.Small tone={TYPOGRAPHY_TONES.SECONDARY}>Small print, rendered as small.</Text.Small>
      <Text.P>
        Inline code such as <Text.Code>bun add @faber-ui/react</Text.Code> sits on its own surface.
      </Text.P>
    </DemoStack>
  );
}

function TitleDemo() {
  return (
    <DemoStack>
      <Title.H1>Heading level 1</Title.H1>
      <Title.H2>Heading level 2</Title.H2>
      <Title.H3>Heading level 3</Title.H3>
      <Title.H4>Heading level 4</Title.H4>
      <Divider />
      <Title.H2 size={TYPOGRAPHY_SIZES.SMALLER}>Still an h2, drawn at the smaller size</Title.H2>
    </DemoStack>
  );
}

function BadgeDemo() {
  return (
    <DemoRow>
      <Badge>Draft</Badge>
      <Badge color={BADGE_COLORS.PRIMARY}>Stable</Badge>
      <Badge color={BADGE_COLORS.ACCENT}>Breaking</Badge>
    </DemoRow>
  );
}

function AvatarDemo() {
  return (
    <DemoRow>
      <Avatar alt="Ada Lovelace" fallback="AL" size={AVATAR_SIZES.SMALL} />
      <Avatar alt="Ada Lovelace" fallback="AL" />
      <Avatar alt="Ada Lovelace" fallback="AL" size={AVATAR_SIZES.LARGE} />
      <Avatar alt="Grace Hopper" fallback="GH" src={PORTRAIT_SOURCE} size={AVATAR_SIZES.LARGE} />
      <Avatar alt="Alan Turing" fallback="AT" src={BROKEN_SOURCE} size={AVATAR_SIZES.LARGE} />
      <DemoNote>The last source cannot be decoded, so its fallback renders.</DemoNote>
    </DemoRow>
  );
}

function SpinnerDemo() {
  return (
    <DemoRow>
      <Spinner label="Loading, small" size={SPINNER_SIZES.SMALL} />
      <Spinner label="Loading" />
      <Spinner label="Loading, large" size={SPINNER_SIZES.LARGE} />
      <Text.Span>
        <Spinner decorative size={SPINNER_SIZES.CURRENT} /> Syncing at the size of this text
      </Text.Span>
      <Button loading>Saving</Button>
    </DemoRow>
  );
}

function SkeletonDemo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <DemoStack>
      <DemoMedia aria-busy={!loaded}>
        {loaded ? (
          <>
            <Avatar alt="" fallback="GH" size={AVATAR_SIZES.LARGE} />
            <VFlex>
              <Text.Strong>Grace Hopper</Text.Strong>
              <Text.Small tone={TYPOGRAPHY_TONES.SECONDARY}>Compiler team · 12 reviews</Text.Small>
            </VFlex>
          </>
        ) : (
          <>
            <Skeleton circle />
            <VFlex gap="XXS">
              <Skeleton style={{ width: '45%' }} />
              <Skeleton style={{ width: '70%' }} />
            </VFlex>
          </>
        )}
      </DemoMedia>
      <Switch
        label="Content has loaded"
        name="skeleton-loaded"
        checked={loaded}
        onChange={(event) => {
          setLoaded(event.target.checked);
        }}
      />
    </DemoStack>
  );
}

function VisuallyHiddenDemo() {
  return (
    <DemoStack>
      <DemoRow>
        <Badge color={BADGE_COLORS.ACCENT}>
          3<VisuallyHidden> unread notifications</VisuallyHidden>
        </Badge>
        <DemoNote>Sighted readers see 3; a screen reader hears the full phrase.</DemoNote>
      </DemoRow>
      <DemoFocusZone>
        <DemoNote>Tab into this box: a hidden link appears while it has focus.</DemoNote>
        <VisuallyHidden focusable>
          <Text.A href="#visually-hidden">Skip to the example</Text.A>
        </VisuallyHidden>
        <Button variant={BUTTON_VARIANTS.OUTLINE} size={BUTTON_SIZES.SMALL}>
          Next focusable control
        </Button>
      </DemoFocusZone>
    </DemoStack>
  );
}

function BoxDemo() {
  return (
    <DemoStack>
      <DemoBox as={Box} padding="LG">
        <Text.P>
          Padding from a token. Inline content such as <Text.Strong>this</Text.Strong> keeps flowing
          as text.
        </Text.P>
      </DemoBox>
    </DemoStack>
  );
}

function GridDemo() {
  return (
    <DemoStack>
      <Grid columns={3} gap="XS">
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
      </Grid>
      <Grid columns="2fr 1fr" gap="XS">
        <DemoBox>2fr</DemoBox>
        <DemoBox>1fr</DemoBox>
      </Grid>
      <Grid minColumnWidth="7rem" gap="XS">
        <DemoBox>fits</DemoBox>
        <DemoBox>as many</DemoBox>
        <DemoBox>as the</DemoBox>
        <DemoBox>width</DemoBox>
        <DemoBox>allows</DemoBox>
      </Grid>
    </DemoStack>
  );
}

function ListDemo() {
  return (
    <DemoStack>
      <List>
        <ListItem>Native elements first</ListItem>
        <ListItem>Typed options</ListItem>
      </List>
      <List ordered>
        <ListItem>Install the package.</ListItem>
        <ListItem>Import the stylesheet.</ListItem>
      </List>
      <List marker={LIST_MARKERS.NONE} gap="XS">
        <ListItem>
          <Badge>Draft</Badge> Without markers
        </ListItem>
      </List>
    </DemoStack>
  );
}

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

function CodeBlockDemo() {
  return (
    <DemoStack>
      <LibraryCodeBlock label="terminal" code="bun add @faber-ui/react styled-components" />
      <LibraryCodeBlock hideCopy code="No header: neither a label nor a copy button." />
    </DemoStack>
  );
}

function SkipLinkDemo() {
  return (
    <DemoStack>
      <DemoNote>
        The link is off screen until it has keyboard focus. Press the button, then Shift and Tab.
      </DemoNote>
      <DemoRow>
        <SkipLink href="#skip-link">Skip to this example</SkipLink>
        <Button variant={BUTTON_VARIANTS.OUTLINE}>Focus me first</Button>
      </DemoRow>
    </DemoStack>
  );
}

function NavLinkDemo() {
  const [current, setCurrent] = useState('Overview');

  return (
    <HFlex as="nav" aria-label="Example" gap="XXS" wrap={FLEX_WRAPS.WRAP}>
      {['Overview', 'Activity', 'Settings'].map((label) => (
        <NavLink
          key={label}
          href="#nav-link"
          current={label === current}
          onClick={(event) => {
            event.preventDefault();
            setCurrent(label);
          }}
        >
          {label}
        </NavLink>
      ))}
    </HFlex>
  );
}

function HeaderDemo() {
  return (
    <DemoCanvas>
      <Header>
        <Text.Strong>Acme</Text.Strong>
        <HFlex as="nav" aria-label="Example header" gap="XXS">
          <NavLink current href="#header">
            Projects
          </NavLink>
          <NavLink href="#header">Team</NavLink>
        </HFlex>
      </Header>
    </DemoCanvas>
  );
}

function SideNavDemo() {
  return (
    <SideNav aria-label="Example sections">
      <SideNavGroup label="Guides">
        <NavLink current href="#side-nav">
          Get started
        </NavLink>
        <NavLink href="#side-nav">Theming</NavLink>
      </SideNavGroup>
      <SideNavGroup label="Reference">
        <NavLink href="#side-nav">Components</NavLink>
      </SideNavGroup>
    </SideNav>
  );
}

function FooterDemo() {
  return (
    <DemoCanvas>
      <Footer>
        <HFlex justify={FLEX_JUSTIFIES.SPACE_BETWEEN} gap="MD" wrap={FLEX_WRAPS.WRAP}>
          <Text.Span>Acme, Inc.</Text.Span>
          <Link href="#footer">Privacy</Link>
        </HFlex>
      </Footer>
    </DemoCanvas>
  );
}

function AlertDialogDemo() {
  const [open, setOpen] = useState(false);
  const [outcome, setOutcome] = useState('nothing yet');
  const { toast } = useToast();

  return (
    <DemoStack>
      <DemoRow>
        <Button
          color={BUTTON_COLORS.ACCENT}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => {
            setOpen(true);
          }}
        >
          Delete project
        </Button>
      </DemoRow>
      <DemoNote role="status">Last decision: {outcome}.</DemoNote>
      <AlertDialog
        open={open}
        destructive
        title="Delete this project?"
        confirmLabel="Delete"
        onCancel={() => {
          setOpen(false);
          setOutcome('cancelled');
        }}
        onConfirm={() => {
          setOpen(false);
          setOutcome('confirmed');
          toast({ title: 'Project deleted', color: TOAST_COLORS.ACCENT });
        }}
      >
        The project and its deployments will be removed. This cannot be undone.
      </AlertDialog>
    </DemoStack>
  );
}

export const COMPONENT_DEMOS: Readonly<Record<TCatalogSlug, TComponentDemo>> = {
  breadcrumb: {
    Demo: BreadcrumbDemo,
    code: `import { Breadcrumb, BreadcrumbItem, Link } from '@faber-ui/react';

<Breadcrumb>
  <BreadcrumbItem>
    <Link href="/">Home</Link>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <Link href="/docs">Documentation</Link>
  </BreadcrumbItem>
  <BreadcrumbItem current>Components</BreadcrumbItem>
</Breadcrumb>`,
  },
  pagination: {
    Demo: PaginationDemo,
    code: `import { Pagination } from '@faber-ui/react/pagination';

const [page, setPage] = useState(6);

<Pagination count={20} page={page} onPageChange={setPage} />

// Every label can be translated.
<Pagination
  aria-label="Paginação"
  count={20}
  page={page}
  onPageChange={setPage}
  nextLabel="Próxima página"
/>`,
  },
  tabs: {
    Demo: TabsDemo,
    code: `import { Tab, TabList, TabPanel, Tabs } from '@faber-ui/react/tabs';

<Tabs defaultValue="overview">
  <TabList aria-label="Project">
    <Tab value="overview">Overview</Tab>
    <Tab value="activity">Activity</Tab>
    <Tab value="billing" disabled>Billing</Tab>
  </TabList>
  <TabPanel value="overview">A summary of the project.</TabPanel>
  <TabPanel value="activity">Recent deployments.</TabPanel>
  <TabPanel value="billing">Invoices.</TabPanel>
</Tabs>`,
  },
  slider: {
    Demo: SliderDemo,
    code: `import { Field, Slider } from '@faber-ui/react';

<Field label="Volume">
  <Slider
    min={0}
    max={100}
    value={volume}
    onChange={(event) => setVolume(event.target.valueAsNumber)}
  />
</Field>`,
  },
  autocomplete: {
    Demo: AutocompleteDemo,
    code: `import { Autocomplete, Field } from '@faber-ui/react';

<Field label="Region">
  <Autocomplete name="region" options={['Dublin', 'Frankfurt', 'Lisbon']} />
</Field>`,
  },
  accordion: {
    Demo: AccordionDemo,
    code: `import { Accordion, AccordionItem } from '@faber-ui/react/accordion';

// Items that share a name close each other.
<Accordion>
  <AccordionItem summary="How long does shipping take?" name="faq" open>
    Orders ship within two business days.
  </AccordionItem>
  <AccordionItem summary="Can I return an item?" name="faq">
    Returns are accepted for thirty days.
  </AccordionItem>
</Accordion>`,
  },
  progress: {
    Demo: ProgressDemo,
    code: `import { Progress } from '@faber-ui/react/progress';

<Progress label="Uploading report" value={uploaded} max={100} />

// Without a value the bar is indeterminate.
<Progress label="Syncing" />`,
  },
  toast: {
    Demo: ToastDemo,
    code: `import { Toast, ToastViewport } from '@faber-ui/react/toast';

<ToastViewport>
  {toasts.map((toast) => (
    <Toast key={toast.id} title={toast.title} onDismiss={() => dismiss(toast.id)}>
      {toast.message}
    </Toast>
  ))}
</ToastViewport>`,
  },
  tooltip: {
    Demo: TooltipDemo,
    code: `import { CopyIcon } from '@faber-ui/icons';
import { IconButton, Tooltip } from '@faber-ui/react';

<Tooltip content="Copy the link">
  <IconButton aria-label="Copy">
    <CopyIcon />
  </IconButton>
</Tooltip>

<Tooltip content="Placed on the right" side="right">
  <Button>Right</Button>
</Tooltip>`,
  },
  popover: {
    Demo: PopoverDemo,
    code: `import { Button, Popover } from '@faber-ui/react';

<Popover label="Share settings" content={<ShareForm />}>
  <Button variant="outline">Share</Button>
</Popover>`,
  },
  menu: {
    Demo: MenuDemo,
    code: `import { Button, Menu, MenuItem, MenuLabel, MenuSeparator } from '@faber-ui/react';

<Menu trigger={<Button variant="outline">Options</Button>}>
  <MenuLabel>Project</MenuLabel>
  <MenuItem onSelect={rename}>Rename</MenuItem>
  <MenuItem disabled>Transfer</MenuItem>
  <MenuSeparator />
  <MenuItem color="error" onSelect={remove}>
    Delete
  </MenuItem>
</Menu>`,
  },
  dialog: {
    Demo: DialogDemo,
    code: `import { Button, Dialog } from '@faber-ui/react';

<Dialog
  open={open}
  title="Delete project"
  onClose={() => setOpen(false)}
  footer={
    <>
      <Button color="neutral" variant="outline" onClick={close}>Cancel</Button>
      <Button color="accent" onClick={remove}>Delete</Button>
    </>
  }
>
  The project and its deployments will be removed.
</Dialog>`,
  },
  drawer: {
    Demo: DrawerDemo,
    code: `import { Drawer } from '@faber-ui/react/drawer';

<Drawer open={open} title="Filters" side="end" onClose={() => setOpen(false)}>
  <FilterForm />
</Drawer>`,
  },
  button: {
    Demo: ButtonDemo,
    code: `import { CheckIcon } from '@faber-ui/icons';
import { Button, BUTTON_VARIANTS } from '@faber-ui/react';

<Button>Filled</Button>
<Button variant={BUTTON_VARIANTS.OUTLINE}>Outline</Button>
<Button color="accent" variant="light">Light</Button>
<Button size="small">Small</Button>

<Button loading={saving} startIcon={<CheckIcon />} onClick={save}>
  Save changes
</Button>`,
  },
  'icon-button': {
    Demo: IconButtonDemo,
    code: `import { PlusIcon, TrashIcon } from '@faber-ui/icons';
import { IconButton } from '@faber-ui/react/icon-button';

<IconButton aria-label="Add item">
  <PlusIcon />
</IconButton>

<IconButton aria-label="Delete item" color="accent" variant="subtle">
  <TrashIcon />
</IconButton>

// Omitting aria-label does not compile.`,
  },
  'link-button': {
    Demo: LinkButtonDemo,
    code: `import { ArrowRightIcon } from '@faber-ui/icons';
import { LinkButton } from '@faber-ui/react/link-button';
import NextLink from 'next/link';

<LinkButton as={NextLink} href="/docs" endIcon={<ArrowRightIcon />}>
  Get started
</LinkButton>

<LinkButton as={NextLink} href="/docs/customization" color="neutral" variant="outline">
  Theming
</LinkButton>

// Without as, it renders a plain anchor.
<LinkButton href="#pricing">Plain anchor</LinkButton>`,
  },
  link: {
    Demo: LinkDemo,
    code: `import { Link } from '@faber-ui/react/link';
import NextLink from 'next/link';

<Link as={NextLink} href="/docs/foundations">
  the token tables
</Link>

<Link href="/changelog" tone="primary">
  Primary tone
</Link>`,
  },
  input: {
    Demo: InputDemo,
    code: `import { Field, Input, INPUT_TYPES } from '@faber-ui/react';

<Field label="Email" description="Used for account notices only.">
  <Input name="email" type={INPUT_TYPES.EMAIL} autoComplete="email" />
</Field>

<Field label="API key">
  <Input name="key" defaultValue="fb_live_3f9a" disabled />
</Field>`,
  },
  textarea: {
    Demo: TextareaDemo,
    code: `import { Field, Textarea } from '@faber-ui/react';

<Field label="Release notes">
  <Textarea name="notes" rows={4} />
</Field>`,
  },
  select: {
    Demo: SelectDemo,
    code: `import { Field, Select } from '@faber-ui/react';

<Field label="Region">
  <Select name="region" defaultValue="fra">
    <optgroup label="Europe">
      <option value="fra">Frankfurt</option>
      <option value="dub">Dublin</option>
    </optgroup>
  </Select>
</Field>`,
  },
  listbox: {
    Demo: ListboxDemo,
    code: `import { Field, Listbox, ListboxGroup, ListboxOption } from '@faber-ui/react';

<Field label="Region">
  <Listbox name="region" value={region} onValueChange={setRegion}>
    <ListboxGroup label="Europe">
      <ListboxOption value="fra">Frankfurt</ListboxOption>
      <ListboxOption value="dub">Dublin</ListboxOption>
    </ListboxGroup>
  </Listbox>
</Field>`,
  },
  'radio-card': {
    Demo: RadioCardDemo,
    code: `import { Grid, RadioCard, RadioGroup } from '@faber-ui/react';

<RadioGroup label="Plan">
  <Grid columns={2} gap="SM">
    <RadioCard name="plan" value="solo" label="Solo" description="One seat" />
    <RadioCard name="plan" value="team" label="Team" description="Up to 12 seats" />
  </Grid>
</RadioGroup>`,
  },
  'color-swatch': {
    Demo: ColorSwatchDemo,
    code: `import { COLORS, ColorSwatch } from '@faber-ui/react';

<ColorSwatch color={COLORS.PRIMARY} label="PRIMARY" value="--faber-ui-color-primary" />

<ColorSwatch color={COLORS.PRIMARY} label="Primary" orientation="vertical" />`,
  },
  checkbox: {
    Demo: CheckboxDemo,
    code: `import { Checkbox } from '@faber-ui/react/checkbox';

<Checkbox label="Send me product updates" name="updates" defaultChecked />

<Checkbox
  label="I accept the terms"
  checked={accepted}
  error={accepted ? undefined : 'Accept the terms to continue.'}
  onChange={(event) => setAccepted(event.target.checked)}
/>`,
  },
  radio: {
    Demo: RadioDemo,
    code: `import { Radio } from '@faber-ui/react/radio';

<fieldset>
  <legend>Density</legend>
  <Radio label="Comfortable" name="density" value="comfortable" defaultChecked />
  <Radio label="Compact" name="density" value="compact" />
</fieldset>`,
  },
  'radio-group': {
    Demo: RadioGroupDemo,
    code: `import { Radio, RadioGroup } from '@faber-ui/react';

<RadioGroup label="Plan" error={errors.plan?.message}>
  <Radio label="Starter" value="starter" {...register('plan')} />
  <Radio label="Team" value="team" {...register('plan')} />
</RadioGroup>`,
  },
  switch: {
    Demo: SwitchDemo,
    code: `import { Switch } from '@faber-ui/react/switch';

<Switch
  label="Deploy previews"
  description="Build a preview for every pull request."
  checked={enabled}
  onChange={(event) => setEnabled(event.target.checked)}
/>`,
  },
  'segmented-control': {
    Demo: SegmentedControlDemo,
    code: `import { Segment, SegmentedControl } from '@faber-ui/react';

<SegmentedControl label="View">
  <Segment name="view" value="list" checked={view === 'list'} onChange={selectList}>
    List
  </Segment>
  <Segment name="view" value="board" checked={view === 'board'} onChange={selectBoard}>
    Board
  </Segment>
</SegmentedControl>

// Uncontrolled, with the legend kept for screen readers only.
<SegmentedControl label="Billing period" labelHidden size="small">
  <Segment name="billing" value="monthly" defaultChecked>Monthly</Segment>
  <Segment name="billing" value="yearly">Yearly</Segment>
</SegmentedControl>`,
  },
  field: {
    Demo: FieldDemo,
    code: `import { Field, Input } from '@faber-ui/react';

// Field adds htmlFor, aria-describedby, and aria-invalid.
// Validation stays in your code or your form library.
<Field label="Work email" error={errors.email?.message}>
  <Input type="email" {...register('email')} />
</Field>`,
  },
  flex: {
    Demo: FlexDemo,
    code: `import { COLORS, Flex, HFlex, VFlex } from '@faber-ui/react';

<Flex
  direction={{ MOBILE: 'column', TABLET: 'row' }}
  gap={{ MOBILE: 'XS', TABLET: 'LG' }}
  outlineColor={COLORS.ACCENT}
>
  <Summary />
  <Actions />
</Flex>

<HFlex gap="XS">Always a row</HFlex>
<VFlex gap="XS">Always a column</VFlex>`,
  },
  container: {
    Demo: ContainerDemo,
    code: `import { Container } from '@faber-ui/react/container';

// Follows the breakpoint scale: 720, 960, 1140, 1320px.
<Container as="main" center>
  <Page />
</Container>

// A token name or any CSS length caps the width instead.
<Container center size="320px">
  <Card />
</Container>`,
  },
  'center-flex': {
    Demo: CenterFlexDemo,
    code: `import { CenterFlex } from '@faber-ui/react/center-flex';

<CenterFlex gap="SM">
  <Spinner decorative size="small" />
  <Text.Span>Centered on both axes</Text.Span>
</CenterFlex>`,
  },
  divider: {
    Demo: DividerDemo,
    code: `import { Divider } from '@faber-ui/react/divider';

<Divider />

<HFlex align="center" gap="SM">
  <Text.Span>Edit</Text.Span>
  <Divider orientation="vertical" />
  <Text.Span>Duplicate</Text.Span>
</HFlex>`,
  },
  text: {
    Demo: TextDemo,
    code: `import { Text } from '@faber-ui/react/text';

<Text.P>
  A paragraph with <Text.Strong>strong</Text.Strong> phrases
  and a <Text.A href="/docs">link</Text.A>.
</Text.P>

<Text.P tone="secondary" size="smaller">Secondary tone</Text.P>
<Text.Span truncate>Long content constrained by its parent</Text.Span>`,
  },
  title: {
    Demo: TitleDemo,
    code: `import { Title } from '@faber-ui/react/title';

<Title.H1>Heading level 1</Title.H1>
<Title.H2>Heading level 2</Title.H2>

// The level is semantic; the size is visual.
<Title.H2 size="smaller">Still an h2</Title.H2>`,
  },
  badge: {
    Demo: BadgeDemo,
    code: `import { Badge, BADGE_COLORS } from '@faber-ui/react/badge';

<Badge>Draft</Badge>
<Badge color={BADGE_COLORS.PRIMARY}>Stable</Badge>
<Badge color={BADGE_COLORS.ACCENT}>Breaking</Badge>`,
  },
  avatar: {
    Demo: AvatarDemo,
    code: `import { Avatar } from '@faber-ui/react/avatar';

<Avatar alt="Ada Lovelace" fallback="AL" />
<Avatar alt="Grace Hopper" fallback="GH" src="/people/grace.jpg" size="large" />

// A failed image falls back on its own.
<Avatar alt="Alan Turing" fallback="AT" src={brokenUrl} onImageError={report} />`,
  },
  box: {
    Demo: BoxDemo,
    code: `import { Box } from '@faber-ui/react/box';

<Box as="section" padding="LG">
  Inline content such as <strong>this</strong> keeps flowing as text.
</Box>

<Box padding={{ MOBILE: 'MD', TABLET: 'XL' }} />`,
  },
  grid: {
    Demo: GridDemo,
    code: `import { Grid } from '@faber-ui/react/grid';

<Grid columns={3} gap="XS" />

// Unequal tracks take a template.
<Grid columns="2fr 1fr" gap="XS" />

// Or let the width decide how many columns fit.
<Grid minColumnWidth="7rem" gap="XS" />

// Any value can change per breakpoint.
<Grid columns={{ MOBILE: 1, TABLET: 2, DESKTOP: 3 }} />`,
  },
  list: {
    Demo: ListDemo,
    code: `import { List, ListItem } from '@faber-ui/react/list';

<List>
  <ListItem>Native elements first</ListItem>
</List>

<List ordered>
  <ListItem>Install the package.</ListItem>
</List>

<List marker="none" gap="XS">
  <ListItem>Without markers</ListItem>
</List>`,
  },
  'description-list': {
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
  },
  'code-block': {
    Demo: CodeBlockDemo,
    code: `import { CodeBlock } from '@faber-ui/react/code-block';

<CodeBlock label="terminal" code="bun add @faber-ui/react styled-components" />

// Highlighted nodes go in as children; the plain code is still what is copied.
<CodeBlock code={source}>{highlight(source)}</CodeBlock>

<CodeBlock hideCopy code="No header." />`,
  },
  'skip-link': {
    Demo: SkipLinkDemo,
    code: `import { SkipLink } from '@faber-ui/react/skip-link';

// First in the document, before the header.
<SkipLink href="#content" />

<main id="content" tabIndex={-1} />`,
  },
  'nav-link': {
    Demo: NavLinkDemo,
    code: `import { NavLink } from '@faber-ui/react/nav-link';
import Link from 'next/link';

<nav aria-label="Primary">
  <NavLink as={Link} href="/overview" current={pathname === '/overview'}>
    Overview
  </NavLink>
  <NavLink as={Link} href="/activity">Activity</NavLink>
</nav>`,
  },
  header: {
    Demo: HeaderDemo,
    code: `import { Header, HFlex, NavLink } from '@faber-ui/react';

<Header sticky>
  <Brand />
  <HFlex as="nav" aria-label="Primary" gap="XXS">
    <NavLink current href="/projects">Projects</NavLink>
    <NavLink href="/team">Team</NavLink>
  </HFlex>
</Header>`,
  },
  'side-nav': {
    Demo: SideNavDemo,
    code: `import { NavLink, SideNav, SideNavGroup } from '@faber-ui/react';

<SideNav aria-label="Documentation">
  <SideNavGroup label="Guides">
    <NavLink current href="/docs">Get started</NavLink>
    <NavLink href="/docs/customization">Customization</NavLink>
  </SideNavGroup>
</SideNav>`,
  },
  footer: {
    Demo: FooterDemo,
    code: `import { Footer } from '@faber-ui/react/footer';

<Footer>
  <HFlex justify="space-between" gap="MD">
    <Text.Span>Acme, Inc.</Text.Span>
    <Link href="/privacy">Privacy</Link>
  </HFlex>
</Footer>`,
  },
  'alert-dialog': {
    Demo: AlertDialogDemo,
    code: `import { AlertDialog, useToast } from '@faber-ui/react';

const { toast } = useToast();

<AlertDialog
  open={open}
  destructive
  title="Delete this project?"
  confirmLabel="Delete"
  onCancel={() => setOpen(false)}
  onConfirm={() => {
    setOpen(false);
    toast({ title: 'Project deleted', color: 'accent' });
  }}
>
  The project and its deployments will be removed. This cannot be undone.
</AlertDialog>`,
  },
  card: {
    Demo: CardDemo,
    code: `import { Card } from '@faber-ui/react/card';

<Card as="section" aria-label="Plan">
  <Text.Strong>Team plan</Text.Strong>
  <Text.P tone="secondary">12 seats, renews monthly.</Text.P>
</Card>

<Card padding="small">Compact</Card>`,
  },
  table: {
    Demo: TableDemo,
    code: `import { Table } from '@faber-ui/react/table';

<Table>
  <caption>Workspace members</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ada Lovelace</th>
      <td>Admin</td>
    </tr>
  </tbody>
</Table>`,
  },
  alert: {
    Demo: AlertDemo,
    code: `import { Alert, ALERT_COLORS } from '@faber-ui/react/alert';

<Alert title="Early release" color={ALERT_COLORS.ACCENT}>
  APIs may change before version 1.0.
</Alert>

// Announced immediately by screen readers.
<Alert role="alert" color={ALERT_COLORS.ERROR}>
  The payment could not be processed.
</Alert>`,
  },
  spinner: {
    Demo: SpinnerDemo,
    code: `import { Spinner } from '@faber-ui/react/spinner';

<Spinner label="Loading" />
<Spinner label="Loading, large" size="large" />

// Inside a control that is already labeled and busy.
<Spinner decorative size="current" />`,
  },
  skeleton: {
    Demo: SkeletonDemo,
    code: `import { Skeleton } from '@faber-ui/react/skeleton';

<section aria-busy={!loaded}>
  {loaded ? (
    <Profile />
  ) : (
    <>
      <Skeleton circle />
      <Skeleton style={{ width: '45%' }} />
    </>
  )}
</section>`,
  },
  'visually-hidden': {
    Demo: VisuallyHiddenDemo,
    code: `import { VisuallyHidden } from '@faber-ui/react/visually-hidden';

<Badge>
  3<VisuallyHidden> unread notifications</VisuallyHidden>
</Badge>

<VisuallyHidden focusable>
  <a href="#content">Skip to content</a>
</VisuallyHidden>`,
  },
};
