import type { TCatalogSlug } from '@/site/component-catalog';

import type { TComponentDemo } from './component-demo.types';
import { BREADCRUMB_DEMO } from './demos/breadcrumb-demo.ui';
import { PAGINATION_DEMO } from './demos/pagination-demo.ui';
import { TABS_DEMO } from './demos/tabs-demo.ui';
import { SLIDER_DEMO } from './demos/slider-demo.ui';
import { AUTOCOMPLETE_DEMO } from './demos/autocomplete-demo.ui';
import { ACCORDION_DEMO } from './demos/accordion-demo.ui';
import { PROGRESS_DEMO } from './demos/progress-demo.ui';
import { TOAST_DEMO } from './demos/toast-demo.ui';
import { TOOLTIP_DEMO } from './demos/tooltip-demo.ui';
import { POPOVER_DEMO } from './demos/popover-demo.ui';
import { MENU_DEMO } from './demos/menu-demo.ui';
import { DIALOG_DEMO } from './demos/dialog-demo.ui';
import { DRAWER_DEMO } from './demos/drawer-demo.ui';
import { BUTTON_DEMO } from './demos/button-demo.ui';
import { ICON_BUTTON_DEMO } from './demos/icon-button-demo.ui';
import { LINK_BUTTON_DEMO } from './demos/link-button-demo.ui';
import { LINK_DEMO } from './demos/link-demo.ui';
import { INPUT_DEMO } from './demos/input-demo.ui';
import { TEXTAREA_DEMO } from './demos/textarea-demo.ui';
import { SELECT_DEMO } from './demos/select-demo.ui';
import { LISTBOX_DEMO } from './demos/listbox-demo.ui';
import { RADIO_CARD_DEMO } from './demos/radio-card-demo.ui';
import { COLOR_SWATCH_DEMO } from './demos/color-swatch-demo.ui';
import { CHECKBOX_DEMO } from './demos/checkbox-demo.ui';
import { RADIO_DEMO } from './demos/radio-demo.ui';
import { RADIO_GROUP_DEMO } from './demos/radio-group-demo.ui';
import { SWITCH_DEMO } from './demos/switch-demo.ui';
import { SEGMENTED_CONTROL_DEMO } from './demos/segmented-control-demo.ui';
import { FIELD_DEMO } from './demos/field-demo.ui';
import { FLEX_DEMO } from './demos/flex-demo.ui';
import { CONTAINER_DEMO } from './demos/container-demo.ui';
import { CENTER_FLEX_DEMO } from './demos/center-flex-demo.ui';
import { DIVIDER_DEMO } from './demos/divider-demo.ui';
import { TEXT_DEMO } from './demos/text-demo.ui';
import { TITLE_DEMO } from './demos/title-demo.ui';
import { BADGE_DEMO } from './demos/badge-demo.ui';
import { AVATAR_DEMO } from './demos/avatar-demo.ui';
import { BOX_DEMO } from './demos/box-demo.ui';
import { GRID_DEMO } from './demos/grid-demo.ui';
import { LIST_DEMO } from './demos/list-demo.ui';
import { DESCRIPTION_LIST_DEMO } from './demos/description-list-demo.ui';
import { CODE_BLOCK_DEMO } from './demos/code-block-demo.ui';
import { SKIP_LINK_DEMO } from './demos/skip-link-demo.ui';
import { NAV_LINK_DEMO } from './demos/nav-link-demo.ui';
import { HEADER_DEMO } from './demos/header-demo.ui';
import { SIDE_NAV_DEMO } from './demos/side-nav-demo.ui';
import { FOOTER_DEMO } from './demos/footer-demo.ui';
import { ALERT_DIALOG_DEMO } from './demos/alert-dialog-demo.ui';
import { CARD_DEMO } from './demos/card-demo.ui';
import { TABLE_DEMO } from './demos/table-demo.ui';
import { ALERT_DEMO } from './demos/alert-demo.ui';
import { SPINNER_DEMO } from './demos/spinner-demo.ui';
import { SKELETON_DEMO } from './demos/skeleton-demo.ui';
import { VISUALLY_HIDDEN_DEMO } from './demos/visually-hidden-demo.ui';
import { COMBOBOX_DEMO } from './demos/combobox-demo.ui';
import { DATE_PICKER_DEMO } from './demos/date-picker-demo.ui';
import { CALENDAR_DEMO } from './demos/calendar-demo.ui';
import { FILE_UPLOAD_DEMO } from './demos/file-upload-demo.ui';
import { STAT_DEMO } from './demos/stat-demo.ui';
import { EMPTY_STATE_DEMO } from './demos/empty-state-demo.ui';

/** One live example and snippet per catalog entry. The compiler rejects a missing one. */
export const COMPONENT_DEMOS: Readonly<Record<TCatalogSlug, TComponentDemo>> = {
  breadcrumb: BREADCRUMB_DEMO,
  pagination: PAGINATION_DEMO,
  tabs: TABS_DEMO,
  slider: SLIDER_DEMO,
  autocomplete: AUTOCOMPLETE_DEMO,
  accordion: ACCORDION_DEMO,
  progress: PROGRESS_DEMO,
  toast: TOAST_DEMO,
  tooltip: TOOLTIP_DEMO,
  popover: POPOVER_DEMO,
  menu: MENU_DEMO,
  dialog: DIALOG_DEMO,
  drawer: DRAWER_DEMO,
  button: BUTTON_DEMO,
  'icon-button': ICON_BUTTON_DEMO,
  'link-button': LINK_BUTTON_DEMO,
  link: LINK_DEMO,
  input: INPUT_DEMO,
  textarea: TEXTAREA_DEMO,
  select: SELECT_DEMO,
  listbox: LISTBOX_DEMO,
  'radio-card': RADIO_CARD_DEMO,
  'color-swatch': COLOR_SWATCH_DEMO,
  checkbox: CHECKBOX_DEMO,
  radio: RADIO_DEMO,
  'radio-group': RADIO_GROUP_DEMO,
  switch: SWITCH_DEMO,
  'segmented-control': SEGMENTED_CONTROL_DEMO,
  field: FIELD_DEMO,
  flex: FLEX_DEMO,
  container: CONTAINER_DEMO,
  'center-flex': CENTER_FLEX_DEMO,
  divider: DIVIDER_DEMO,
  text: TEXT_DEMO,
  title: TITLE_DEMO,
  badge: BADGE_DEMO,
  avatar: AVATAR_DEMO,
  box: BOX_DEMO,
  grid: GRID_DEMO,
  list: LIST_DEMO,
  'description-list': DESCRIPTION_LIST_DEMO,
  'code-block': CODE_BLOCK_DEMO,
  'skip-link': SKIP_LINK_DEMO,
  'nav-link': NAV_LINK_DEMO,
  header: HEADER_DEMO,
  'side-nav': SIDE_NAV_DEMO,
  footer: FOOTER_DEMO,
  'alert-dialog': ALERT_DIALOG_DEMO,
  card: CARD_DEMO,
  table: TABLE_DEMO,
  alert: ALERT_DEMO,
  spinner: SPINNER_DEMO,
  skeleton: SKELETON_DEMO,
  'visually-hidden': VISUALLY_HIDDEN_DEMO,
  combobox: COMBOBOX_DEMO,
  'date-picker': DATE_PICKER_DEMO,
  calendar: CALENDAR_DEMO,
  'file-upload': FILE_UPLOAD_DEMO,
  stat: STAT_DEMO,
  'empty-state': EMPTY_STATE_DEMO,
};
