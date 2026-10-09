import * as SelectPrimitive from '@radix-ui/react-select';
import { SPACING_SCALE } from '@faber-ui/tokens';
import { forwardRef } from 'react';

import {
  ListboxContent,
  ListboxGroupLabel,
  ListboxIcon,
  ListboxOptionIndicator,
  ListboxTrigger,
  ListboxViewport,
  StyledListboxGroup,
  StyledListboxOption,
  StyledListboxSeparator,
} from './listbox.styles';
import type {
  TListboxGroupProps,
  TListboxOptionProps,
  TListboxProps,
  TListboxSeparatorProps,
} from './listbox.types';

const SIDE_OFFSET = Number.parseInt(SPACING_SCALE.XXS, 10);

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export const Listbox = forwardRef<HTMLButtonElement, TListboxProps>(function Listbox(
  {
    children,
    defaultOpen,
    defaultValue,
    disabled,
    name,
    onOpenChange,
    onValueChange,
    open,
    placeholder,
    required,
    value,
    ...triggerProps
  },
  ref,
) {
  return (
    <SelectPrimitive.Root
      {...(defaultOpen === undefined ? {} : { defaultOpen })}
      {...(defaultValue === undefined ? {} : { defaultValue })}
      {...(disabled === undefined ? {} : { disabled })}
      {...(name === undefined ? {} : { name })}
      {...(onOpenChange === undefined ? {} : { onOpenChange })}
      {...(onValueChange === undefined ? {} : { onValueChange })}
      {...(open === undefined ? {} : { open })}
      {...(required === undefined ? {} : { required })}
      {...(value === undefined ? {} : { value })}
    >
      <ListboxTrigger {...triggerProps} ref={ref}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <ListboxIcon>
          <ChevronIcon />
        </ListboxIcon>
      </ListboxTrigger>
      <SelectPrimitive.Portal>
        <ListboxContent position="popper" sideOffset={SIDE_OFFSET}>
          <ListboxViewport>{children}</ListboxViewport>
        </ListboxContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});

export const ListboxOption = forwardRef<HTMLDivElement, TListboxOptionProps>(function ListboxOption(
  { children, disabled = false, textValue, ...nativeProps },
  ref,
) {
  return (
    <StyledListboxOption
      {...nativeProps}
      {...(textValue === undefined ? {} : { textValue })}
      ref={ref}
      disabled={disabled}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <ListboxOptionIndicator>
        <CheckIcon />
      </ListboxOptionIndicator>
    </StyledListboxOption>
  );
});

export const ListboxGroup = forwardRef<HTMLDivElement, TListboxGroupProps>(function ListboxGroup(
  { children, label, ...nativeProps },
  ref,
) {
  return (
    <StyledListboxGroup {...nativeProps} ref={ref}>
      <ListboxGroupLabel>{label}</ListboxGroupLabel>
      {children}
    </StyledListboxGroup>
  );
});

export const ListboxSeparator = forwardRef<HTMLDivElement, TListboxSeparatorProps>(
  function ListboxSeparator(props, ref) {
    return <StyledListboxSeparator {...props} ref={ref} />;
  },
);
