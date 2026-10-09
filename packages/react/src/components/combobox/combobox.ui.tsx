import * as PopoverPrimitive from '@radix-ui/react-popover';
import { SPACING_SCALE } from '@faber-ui/tokens';
import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react';

import {
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxIcon,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionIndicator,
} from './combobox.styles';
import type { TComboboxOption, TComboboxProps } from './combobox.types';

const SIDE_OFFSET = Number.parseInt(SPACING_SCALE.XXS, 10);
const NO_ACTIVE_OPTION = -1;

const defaultRemoveLabel = (label: string) => `Remove ${label}`;

const toValues = (value: string | readonly string[] | undefined): readonly string[] =>
  value === undefined ? [] : typeof value === 'string' ? [value] : value;

/** The next option that can be chosen, walking in one direction and wrapping at the ends. */
const findEnabledIndex = (options: readonly TComboboxOption[], start: number, step: 1 | -1) => {
  for (let offset = 0; offset < options.length; offset += 1) {
    const index = (start + step * offset + options.length * 2) % options.length;

    if (options[index]?.disabled !== true) {
      return index;
    }
  }

  return NO_ACTIVE_OPTION;
};

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

export const Combobox = forwardRef<HTMLInputElement, TComboboxProps>(function Combobox(
  {
    'aria-invalid': ariaInvalid,
    className,
    defaultValue,
    disabled = false,
    emptyMessage = 'No results',
    multiple = false,
    name,
    onBlur,
    onKeyDown,
    onValueChange,
    options,
    removeLabel = defaultRemoveLabel,
    style,
    value,
    ...inputProps
  },
  ref,
) {
  const listId = useId();
  const controlRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [internalValues, setInternalValues] = useState(() => toValues(defaultValue));
  const selectedValues = value === undefined ? internalValues : toValues(value);
  const labelOf = (optionValue: string | undefined) =>
    options.find((option) => option.value === optionValue)?.label ?? '';
  const [query, setQuery] = useState('');
  const [filtering, setFiltering] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(NO_ACTIVE_OPTION);
  const isOpen = open && !disabled;
  const normalizedQuery = filtering ? query.trim().toLowerCase() : '';
  const visibleOptions =
    normalizedQuery !== ''
      ? options.filter((option) => option.label.toLowerCase().includes(normalizedQuery))
      : options;
  const activeOption = visibleOptions[activeIndex];
  const optionId = (index: number) => `${listId}-option-${String(index)}`;
  // While the reader is not typing, a single combobox shows the label of its value.
  const inputValue = filtering ? query : multiple ? '' : labelOf(selectedValues[0]);

  useEffect(() => {
    if (isOpen && activeIndex !== NO_ACTIVE_OPTION) {
      const option = document.getElementById(`${listId}-option-${String(activeIndex)}`);

      if (option !== null && typeof option.scrollIntoView === 'function') {
        option.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [activeIndex, isOpen, listId]);

  const assignRef = (node: HTMLInputElement | null) => {
    inputRef.current = node;

    if (typeof ref === 'function') {
      ref(node);
    } else if (ref !== null) {
      ref.current = node;
    }
  };

  const commit = (nextValues: readonly string[]) => {
    setInternalValues(nextValues);

    const emit = onValueChange as ((nextValue: string | string[]) => void) | undefined;

    if (multiple) {
      emit?.([...nextValues]);
    } else if (nextValues[0] !== undefined) {
      emit?.(nextValues[0]);
    }
  };

  const openList = () => {
    if (!disabled && !open) {
      const selectedIndex = options.findIndex((option) => option.value === selectedValues[0]);

      setOpen(true);
      setActiveIndex(selectedIndex === -1 ? findEnabledIndex(options, 0, 1) : selectedIndex);
    }
  };

  const closeList = () => {
    setOpen(false);
    setFiltering(false);
    setActiveIndex(NO_ACTIVE_OPTION);
  };

  const choose = (option: TComboboxOption) => {
    if (option.disabled === true) {
      return;
    }

    if (multiple) {
      commit(
        selectedValues.includes(option.value)
          ? selectedValues.filter((selected) => selected !== option.value)
          : [...selectedValues, option.value],
      );
      setFiltering(false);
    } else {
      commit([option.value]);
      setFiltering(false);
      setOpen(false);
      setActiveIndex(NO_ACTIVE_OPTION);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextQuery = event.target.value;
    const normalized = nextQuery.trim().toLowerCase();
    const nextOptions =
      normalized === ''
        ? options
        : options.filter((option) => option.label.toLowerCase().includes(normalized));

    setQuery(nextQuery);
    setFiltering(true);
    setOpen(true);
    setActiveIndex(findEnabledIndex(nextOptions, 0, 1));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();

      if (!isOpen) {
        openList();
      } else {
        const step = event.key === 'ArrowDown' ? 1 : -1;
        const start = activeIndex === NO_ACTIVE_OPTION && step === -1 ? 0 : activeIndex;

        setActiveIndex(findEnabledIndex(visibleOptions, start + step, step));
      }
    } else if (event.key === 'Home' && isOpen) {
      event.preventDefault();
      setActiveIndex(findEnabledIndex(visibleOptions, 0, 1));
    } else if (event.key === 'End' && isOpen) {
      event.preventDefault();
      setActiveIndex(findEnabledIndex(visibleOptions, visibleOptions.length - 1, -1));
    } else if (event.key === 'Enter' && isOpen && activeOption !== undefined) {
      event.preventDefault();
      choose(activeOption);
    } else if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      closeList();
    } else if (
      event.key === 'Backspace' &&
      multiple &&
      inputValue === '' &&
      selectedValues.length > 0
    ) {
      commit(selectedValues.slice(0, -1));
    }
  };

  return (
    <PopoverPrimitive.Root
      open={isOpen}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          closeList();
        }
      }}
    >
      <PopoverPrimitive.Anchor asChild>
        <ComboboxControl
          ref={controlRef}
          className={className}
          data-disabled={disabled || undefined}
          data-invalid={ariaInvalid === true || ariaInvalid === 'true' || undefined}
          style={style}
          onMouseDown={(event) => {
            // A press on the frame behaves like a press on the input: focus it and open the list.
            if (event.target !== inputRef.current) {
              event.preventDefault();
              inputRef.current?.focus();
            }

            openList();
          }}
        >
          {multiple
            ? selectedValues.map((selected) => {
                const label = labelOf(selected);

                return (
                  <ComboboxChip key={selected}>
                    {label}
                    <ComboboxChipRemove
                      type="button"
                      aria-label={removeLabel(label)}
                      disabled={disabled}
                      tabIndex={-1}
                      onMouseDown={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                      }}
                      onClick={() => {
                        commit(selectedValues.filter((current) => current !== selected));
                        inputRef.current?.focus();
                      }}
                    >
                      <span aria-hidden="true">×</span>
                    </ComboboxChipRemove>
                  </ComboboxChip>
                );
              })
            : null}
          <ComboboxInput
            autoComplete="off"
            {...inputProps}
            ref={assignRef}
            type="text"
            role="combobox"
            aria-activedescendant={activeOption === undefined ? undefined : optionId(activeIndex)}
            aria-autocomplete="list"
            aria-controls={isOpen ? listId : undefined}
            aria-expanded={isOpen}
            aria-invalid={ariaInvalid}
            disabled={disabled}
            value={inputValue}
            onBlur={(event) => {
              onBlur?.(event);
              closeList();
            }}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <ComboboxIcon>
            <ChevronIcon />
          </ComboboxIcon>
        </ComboboxControl>
      </PopoverPrimitive.Anchor>

      {name === undefined
        ? null
        : selectedValues.map((selected) => (
            <input key={selected} type="hidden" name={name} value={selected} disabled={disabled} />
          ))}

      <PopoverPrimitive.Portal>
        <ComboboxContent
          align="start"
          role="presentation"
          sideOffset={SIDE_OFFSET}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
          }}
          onInteractOutside={(event) => {
            if (event.target instanceof Node && controlRef.current?.contains(event.target)) {
              event.preventDefault();
            }
          }}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
          }}
        >
          <ComboboxList id={listId} role="listbox" aria-multiselectable={multiple || undefined}>
            {visibleOptions.length === 0 ? (
              <ComboboxEmpty role="presentation">{emptyMessage}</ComboboxEmpty>
            ) : (
              visibleOptions.map((option, index) => {
                const selected = selectedValues.includes(option.value);

                return (
                  <ComboboxOption
                    key={option.value}
                    id={optionId(index)}
                    role="option"
                    aria-disabled={option.disabled === true || undefined}
                    aria-selected={selected}
                    data-active={index === activeIndex || undefined}
                    onClick={() => {
                      choose(option);
                    }}
                    onMouseDown={(event) => {
                      // Keeps focus in the input, so choosing with the mouse does not close the list.
                      event.preventDefault();
                    }}
                    onMouseEnter={() => {
                      if (option.disabled !== true) {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    {option.label}
                    {selected ? (
                      <ComboboxOptionIndicator>
                        <CheckIcon />
                      </ComboboxOptionIndicator>
                    ) : null}
                  </ComboboxOption>
                );
              })
            )}
          </ComboboxList>
        </ComboboxContent>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
});
