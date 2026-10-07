'use client';

import {
  Avatar,
  Badge,
  BADGE_COLORS,
  Button,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  Checkbox,
  Divider,
  Field,
  FLEX_ALIGNS,
  FLEX_WRAPS,
  HFlex,
  Input,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Text,
  TYPOGRAPHY_TONES,
} from '@faber-ui/react';

import { Frame, FrameHead, Caption } from '@/components/sheet/sheet.styles';

import { SpecimenBody, SpecimenIdentity } from './recast-panel.styles';

/** A small settings surface built only from library components, used to show theme changes. */
export function Specimen() {
  return (
    <Frame>
      <FrameHead>
        <Caption data-emphasis="ink">Specimen — workspace settings</Caption>
        <Caption>library components only</Caption>
      </FrameHead>
      <SpecimenBody>
        <HFlex align={FLEX_ALIGNS.CENTER} gap="SM">
          <Avatar alt="" fallback="FW" />
          <SpecimenIdentity>
            <Text.Strong>Foundry workspace</Text.Strong>
            <Text.Small tone={TYPOGRAPHY_TONES.SECONDARY}>4 members · Frankfurt</Text.Small>
          </SpecimenIdentity>
          <Badge color={BADGE_COLORS.PRIMARY}>Active</Badge>
        </HFlex>

        <Divider />

        <Field label="Workspace name" description="Shown in the sidebar and in invitations.">
          <Input name="workspace" defaultValue="Foundry" autoComplete="off" />
        </Field>

        <Field label="Region">
          <Select name="region" defaultValue="fra">
            <option value="fra">Frankfurt</option>
            <option value="gru">São Paulo</option>
            <option value="iad">Washington, D.C.</option>
          </Select>
        </Field>

        <RadioGroup label="Visibility">
          <Radio label="Private" name="specimen-visibility" value="private" defaultChecked />
          <Radio label="Anyone with the link" name="specimen-visibility" value="link" />
        </RadioGroup>

        <Switch label="Deploy previews" name="previews" defaultChecked />
        <Checkbox label="Email me when a deploy fails" name="alerts" defaultChecked />

        <Divider />

        <HFlex align={FLEX_ALIGNS.CENTER} gap="SM" wrap={FLEX_WRAPS.WRAP}>
          <Button>Save changes</Button>
          <Button variant={BUTTON_VARIANTS.OUTLINE}>Discard</Button>
          <Button color={BUTTON_COLORS.ACCENT} variant={BUTTON_VARIANTS.LIGHT}>
            Archive
          </Button>
        </HFlex>
      </SpecimenBody>
    </Frame>
  );
}
