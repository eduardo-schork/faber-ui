export const COMPONENT_FAMILIES = [
  { id: 'actions', name: 'Actions' },
  { id: 'navigation', name: 'Navigation' },
  { id: 'forms', name: 'Forms' },
  { id: 'layout', name: 'Layout' },
  { id: 'typography', name: 'Typography' },
  { id: 'display', name: 'Display' },
  { id: 'feedback', name: 'Feedback' },
  { id: 'overlays', name: 'Overlays' },
  { id: 'utility', name: 'Utility' },
] as const;

export type TComponentFamilyId = (typeof COMPONENT_FAMILIES)[number]['id'];

export type TCatalogEntry = {
  /** The native element the component renders. */
  readonly element: string;
  readonly entry: string;
  readonly family: TComponentFamilyId;
  readonly name: string;
  /** The DOM interface the forwarded ref receives. */
  readonly ref: string;
  readonly slug: string;
  readonly storybookId: string;
  readonly summary: string;
};

export const COMPONENT_CATALOG = [
  {
    slug: 'button',
    name: 'Button',
    family: 'actions',
    element: '<button>',
    ref: 'HTMLButtonElement',
    entry: '@faber-ui/react/button',
    storybookId: 'components-button',
    summary:
      'A text action in four variants, three sizes, and three colors. It defaults to type="button" and keeps its width while loading.',
  },
  {
    slug: 'icon-button',
    name: 'IconButton',
    family: 'actions',
    element: '<button>',
    ref: 'HTMLButtonElement',
    entry: '@faber-ui/react/icon-button',
    storybookId: 'components-iconbutton',
    summary:
      'A square, icon-only action built on the Button vocabulary. The type contract will not compile without an aria-label.',
  },
  {
    slug: 'link-button',
    name: 'LinkButton',
    family: 'navigation',
    element: '<a>',
    ref: 'HTMLAnchorElement',
    entry: '@faber-ui/react/link-button',
    storybookId: 'components-linkbutton',
    summary:
      'Navigation with the weight of a button. It shares every Button color, variant, and size, and has no disabled or loading state because a link has none.',
  },
  {
    slug: 'link',
    name: 'Link',
    family: 'navigation',
    element: '<a>',
    ref: 'HTMLAnchorElement',
    entry: '@faber-ui/react/link',
    storybookId: 'components-link',
    summary:
      'A text link that can hand the anchor to a router component through the as prop, while keeping the typography props of Text.A.',
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    family: 'navigation',
    element: '<nav> + <ol>',
    ref: 'HTMLElement',
    entry: '@faber-ui/react/breadcrumb',
    storybookId: 'components-breadcrumb',
    summary:
      'The trail from the top of a hierarchy to the current page, as a navigation landmark with an ordered list.',
  },
  {
    slug: 'nav-link',
    name: 'NavLink',
    family: 'navigation',
    element: '<a>',
    ref: 'HTMLAnchorElement',
    entry: '@faber-ui/react/nav-link',
    storybookId: 'components-navlink',
    summary:
      'A navigation destination with a current-page state. It accepts a router link through as.',
  },
  {
    slug: 'header',
    name: 'Header',
    family: 'navigation',
    element: '<header>',
    ref: 'HTMLElement',
    entry: '@faber-ui/react/header',
    storybookId: 'components-header',
    summary:
      'The top bar of an application: a bordered row for the brand, navigation, and actions, optionally sticky.',
  },
  {
    slug: 'side-nav',
    name: 'SideNav',
    family: 'navigation',
    element: '<nav>',
    ref: 'HTMLElement',
    entry: '@faber-ui/react/side-nav',
    storybookId: 'components-sidenav',
    summary: 'Vertical navigation in labelled groups, for documentation sections and settings.',
  },
  {
    slug: 'footer',
    name: 'Footer',
    family: 'navigation',
    element: '<footer>',
    ref: 'HTMLElement',
    entry: '@faber-ui/react/footer',
    storybookId: 'components-footer',
    summary:
      'The closing region of a page, with the border, spacing, and quiet text of the system.',
  },
  {
    slug: 'skip-link',
    name: 'SkipLink',
    family: 'navigation',
    element: '<a>',
    ref: 'HTMLAnchorElement',
    entry: '@faber-ui/react/skip-link',
    storybookId: 'components-skiplink',
    summary: 'A link that appears on keyboard focus and jumps past the navigation to the content.',
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    family: 'navigation',
    element: '<nav> + <button>',
    ref: 'HTMLElement',
    entry: '@faber-ui/react/pagination',
    storybookId: 'components-pagination',
    summary:
      'Controlled page navigation that keeps the first, last, and nearby pages visible and collapses the rest. Every label is replaceable.',
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    family: 'navigation',
    element: '<button role="tab">',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/tabs',
    storybookId: 'components-tabs',
    summary:
      'Related views switched in place. One tab sits in the tab order and the arrow keys move between them.',
  },
  {
    slug: 'input',
    name: 'Input',
    family: 'forms',
    element: '<input>',
    ref: 'HTMLInputElement',
    entry: '@faber-ui/react/input',
    storybookId: 'components-input',
    summary:
      'A single-line control for text-like types. Value, events, name, and ref stay native, so any form library can register it.',
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    family: 'forms',
    element: '<textarea>',
    ref: 'HTMLTextAreaElement',
    entry: '@faber-ui/react/textarea',
    storybookId: 'components-textarea',
    summary:
      'A multiline control sized by the native rows attribute and resizable vertically by the reader.',
  },
  {
    slug: 'select',
    name: 'Select',
    family: 'forms',
    element: '<select>',
    ref: 'HTMLSelectElement',
    entry: '@faber-ui/react/select',
    storybookId: 'components-select',
    summary:
      'A native option list with option and optgroup children. It keeps platform keyboard, touch, and screen-reader behavior.',
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    family: 'forms',
    element: '<input type="checkbox">',
    ref: 'HTMLInputElement',
    entry: '@faber-ui/react/checkbox',
    storybookId: 'components-checkbox',
    summary:
      'An independent binary choice with its own inline label and an optional connected description or error.',
  },
  {
    slug: 'radio',
    name: 'Radio',
    family: 'forms',
    element: '<input type="radio">',
    ref: 'HTMLInputElement',
    entry: '@faber-ui/react/radio',
    storybookId: 'components-radio',
    summary:
      'One option in an exclusive set. Options that share a name get browser-native exclusivity and arrow-key movement.',
  },
  {
    slug: 'radio-group',
    name: 'RadioGroup',
    family: 'forms',
    element: '<fieldset> + <legend>',
    ref: 'HTMLFieldSetElement',
    entry: '@faber-ui/react/radio-group',
    storybookId: 'components-radiogroup',
    summary:
      'A group label, description, and error for a set of radios. It structures the question and leaves the selected value to the form.',
  },
  {
    slug: 'switch',
    name: 'Switch',
    family: 'forms',
    element: '<input role="switch">',
    ref: 'HTMLInputElement',
    entry: '@faber-ui/react/switch',
    storybookId: 'components-switch',
    summary:
      'An on/off setting that applies immediately. Underneath it is a native checkbox announced with switch semantics.',
  },
  {
    slug: 'segmented-control',
    name: 'SegmentedControl',
    family: 'forms',
    element: '<fieldset> + <input type="radio">',
    ref: 'HTMLFieldSetElement',
    entry: '@faber-ui/react/segmented-control',
    storybookId: 'components-segmentedcontrol',
    summary:
      'A few exclusive options side by side. Every Segment is a native radio, so arrow keys, form submission, and form libraries work unchanged.',
  },
  {
    slug: 'slider',
    name: 'Slider',
    family: 'forms',
    element: '<input type="range">',
    ref: 'HTMLInputElement',
    entry: '@faber-ui/react/slider',
    storybookId: 'components-slider',
    summary:
      'A native range input colored by the theme. Keyboard, touch, and form behavior come from the platform.',
  },
  {
    slug: 'autocomplete',
    name: 'Autocomplete',
    family: 'forms',
    element: '<input> + <datalist>',
    ref: 'HTMLInputElement',
    entry: '@faber-ui/react/autocomplete',
    storybookId: 'components-autocomplete',
    summary:
      'A text input with native suggestions. The reader can pick one or type something else.',
  },
  {
    slug: 'field',
    name: 'Field',
    family: 'forms',
    element: '<div> + <label>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/field',
    storybookId: 'components-field',
    summary:
      'Connects a visible label, a description, and a validation error to one control through generated ids and ARIA attributes.',
  },
  {
    slug: 'flex',
    name: 'Flex',
    family: 'layout',
    element: '<div>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/flex',
    storybookId: 'components-flex',
    summary:
      'One-axis layout with responsive direction, alignment, and token gaps. HFlex and VFlex lock the direction; outlineColor draws a debug outline.',
  },
  {
    slug: 'container',
    name: 'Container',
    family: 'layout',
    element: '<div>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/container',
    storybookId: 'components-container',
    summary:
      'Page width. Without a size it follows the breakpoint scale; with one it becomes a responsive maximum width.',
  },
  {
    slug: 'box',
    name: 'Box',
    family: 'layout',
    element: '<div>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/box',
    storybookId: 'components-box',
    summary:
      'A block container with token padding and no layout of its own. Children keep normal flow.',
  },
  {
    slug: 'grid',
    name: 'Grid',
    family: 'layout',
    element: '<div>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/grid',
    storybookId: 'components-grid',
    summary:
      'Columns from a number, a track template, or a minimum width, with responsive values and token gaps.',
  },
  {
    slug: 'center-flex',
    name: 'CenterFlex',
    family: 'layout',
    element: '<div>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/center-flex',
    storybookId: 'components-centerflex',
    summary:
      'Centers its children on both axes. Direction and alignment are fixed because they are the whole contract.',
  },
  {
    slug: 'divider',
    name: 'Divider',
    family: 'layout',
    element: '<hr>',
    ref: 'HTMLHRElement',
    entry: '@faber-ui/react/divider',
    storybookId: 'components-divider',
    summary:
      'A horizontal or vertical separator that keeps the native separator role. Spacing around it belongs to the parent.',
  },
  {
    slug: 'text',
    name: 'Text',
    family: 'typography',
    element: '<p> <span> <a> <label> <strong> <em> <small> <code>',
    ref: 'The matching element',
    entry: '@faber-ui/react/text',
    storybookId: 'components-text',
    summary:
      'Eight members, one per element. Size, weight, and tone change how the text looks and never which element is rendered.',
  },
  {
    slug: 'title',
    name: 'Title',
    family: 'typography',
    element: '<h1> to <h6>',
    ref: 'HTMLHeadingElement',
    entry: '@faber-ui/react/title',
    storybookId: 'components-title',
    summary:
      'Six heading levels. The level is the document outline; the size prop is a separate, purely visual decision.',
  },
  {
    slug: 'badge',
    name: 'Badge',
    family: 'display',
    element: '<span>',
    ref: 'HTMLSpanElement',
    entry: '@faber-ui/react/badge',
    storybookId: 'components-badge',
    summary:
      'Short, read-only metadata such as a status or a release channel. It is not an action.',
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    family: 'display',
    element: '<span> + <img>',
    ref: 'HTMLSpanElement',
    entry: '@faber-ui/react/avatar',
    storybookId: 'components-avatar',
    summary:
      'An identity image with a required fallback, shown when there is no source or the image fails to load.',
  },
  {
    slug: 'card',
    name: 'Card',
    family: 'display',
    element: '<div>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/card',
    storybookId: 'components-card',
    summary:
      'A bordered surface that groups related content, with a closed padding scale and a semantic as prop.',
  },
  {
    slug: 'table',
    name: 'Table',
    family: 'display',
    element: '<table>',
    ref: 'HTMLTableElement',
    entry: '@faber-ui/react/table',
    storybookId: 'components-table',
    summary:
      'Styles native table markup: caption, header cells, row headers, and data cells. The semantics stay in your markup.',
  },
  {
    slug: 'list',
    name: 'List',
    family: 'display',
    element: '<ul> or <ol>',
    ref: 'HTMLUListElement',
    entry: '@faber-ui/react/list',
    storybookId: 'components-list',
    summary:
      'Unordered and ordered lists with token spacing. Markers can be removed without losing list semantics.',
  },
  {
    slug: 'description-list',
    name: 'DescriptionList',
    family: 'display',
    element: '<dl>',
    ref: 'HTMLDListElement',
    entry: '@faber-ui/react/description-list',
    storybookId: 'components-descriptionlist',
    summary: 'Name and value pairs as a native description list, stacked or side by side.',
  },
  {
    slug: 'code-block',
    name: 'CodeBlock',
    family: 'display',
    element: '<pre> + <code>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/code-block',
    storybookId: 'components-codeblock',
    summary:
      'Source code with a label and a copy button. Pass highlighted nodes as children; the plain code is what gets copied.',
  },
  {
    slug: 'alert',
    name: 'Alert',
    family: 'feedback',
    element: '<div role="note">',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/alert',
    storybookId: 'components-alert',
    summary:
      'A titled message that stands out from its surroundings. Static by default; pass a live role when it must be announced.',
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    family: 'display',
    element: '<details> + <summary>',
    ref: 'HTMLDetailsElement',
    entry: '@faber-ui/react/accordion',
    storybookId: 'components-accordion',
    summary:
      'Native disclosure sections. Items that share a name are exclusive, and hidden text stays searchable by the browser.',
  },
  {
    slug: 'progress',
    name: 'Progress',
    family: 'feedback',
    element: '<progress>',
    ref: 'HTMLProgressElement',
    entry: '@faber-ui/react/progress',
    storybookId: 'components-progress',
    summary:
      'Measurable progress with a required accessible name. Without a value it is indeterminate.',
  },
  {
    slug: 'toast',
    name: 'Toast',
    family: 'feedback',
    element: '<div role="status">',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/toast',
    storybookId: 'components-toast',
    summary:
      'A brief notification after an action, with an optional dismiss button and a fixed viewport to stack in.',
  },
  {
    slug: 'spinner',
    name: 'Spinner',
    family: 'feedback',
    element: '<span role="status">',
    ref: 'HTMLSpanElement',
    entry: '@faber-ui/react/spinner',
    storybookId: 'components-spinner',
    summary:
      'An indeterminate wait. The types require either a label or the decorative flag, so an unnamed spinner cannot ship.',
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    family: 'feedback',
    element: '<div aria-hidden>',
    ref: 'HTMLDivElement',
    entry: '@faber-ui/react/skeleton',
    storybookId: 'components-skeleton',
    summary:
      'Reserves the shape of content that is still loading. Always hidden from assistive technology; the region carries the status.',
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    family: 'overlays',
    element: '<div role="tooltip">',
    ref: 'The trigger element',
    entry: '@faber-ui/react/tooltip',
    storybookId: 'components-tooltip',
    summary:
      'A short hint on hover and focus that describes its trigger. Positioning and timing come from Radix, kept internal.',
  },
  {
    slug: 'popover',
    name: 'Popover',
    family: 'overlays',
    element: '<div role="dialog">',
    ref: 'The trigger element',
    entry: '@faber-ui/react/popover',
    storybookId: 'components-popover',
    summary:
      'A small panel anchored to the button that opens it. It flips and shifts to stay in view and returns focus when it closes.',
  },
  {
    slug: 'menu',
    name: 'Menu',
    family: 'overlays',
    element: '<div role="menu">',
    ref: 'The trigger element',
    entry: '@faber-ui/react/menu',
    storybookId: 'components-menu',
    summary:
      'A list of actions behind a button, with arrow-key movement, typeahead, and a destructive item color.',
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    family: 'overlays',
    element: '<dialog>',
    ref: 'HTMLDialogElement',
    entry: '@faber-ui/react/dialog',
    storybookId: 'components-dialog',
    summary:
      'A native modal dialog. The browser provides the top layer, the backdrop, focus containment, and Escape.',
  },
  {
    slug: 'alert-dialog',
    name: 'AlertDialog',
    family: 'overlays',
    element: '<dialog role="alertdialog">',
    ref: 'HTMLDialogElement',
    entry: '@faber-ui/react/alert-dialog',
    storybookId: 'components-alertdialog',
    summary:
      'A modal that stops for a decision. It has two actions, no close button, and puts focus on the safe one.',
  },
  {
    slug: 'drawer',
    name: 'Drawer',
    family: 'overlays',
    element: '<dialog>',
    ref: 'HTMLDialogElement',
    entry: '@faber-ui/react/drawer',
    storybookId: 'components-drawer',
    summary: 'The same native modal dialog docked to the inline start or end edge.',
  },
  {
    slug: 'visually-hidden',
    name: 'VisuallyHidden',
    family: 'utility',
    element: '<span>',
    ref: 'HTMLSpanElement',
    entry: '@faber-ui/react/visually-hidden',
    storybookId: 'components-visuallyhidden',
    summary:
      'Content for assistive technology only. The focusable option reveals it on focus, which is how a skip link works.',
  },
] as const satisfies readonly TCatalogEntry[];

export type TCatalogSlug = (typeof COMPONENT_CATALOG)[number]['slug'];

export const formatCatalogNumber = (index: number) => String(index + 1).padStart(2, '0');
