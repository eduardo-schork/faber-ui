'use client';

import {
  Button,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  FONT_SIZE_SCALE,
  FONT_WEIGHT_SCALE,
  RADIUS_SCALE,
  SIZE_SCALE,
  SPACING_SCALE,
  type TButtonSize,
  type TButtonVariant,
} from '@faber-ui/react';
import { useCallback, useState, type CSSProperties } from 'react';

import { OptionSwitch } from '@/components/option-switch/option-switch.ui';
import { FrameHead, Caption } from '@/components/sheet/sheet.styles';
import { findTokenName } from '@/site/find-token-name';

import {
  AnatomyControls,
  AnatomyFigure,
  AnatomyStage,
  AnatomySubject,
  AnnotationLabel,
  HeightDimension,
  PaddingDimension,
  RadiusLeader,
  TitleBlock,
  TypeLeader,
} from './button-anatomy.styles';

type TButtonMetrics = {
  readonly fontSize: string;
  readonly fontWeight: string;
  readonly height: string;
  readonly offsetHeight: number;
  readonly offsetWidth: number;
  readonly paddingInline: string;
  readonly radius: string;
};

type TStageStyle = CSSProperties & {
  readonly '--subject-height'?: number;
  readonly '--subject-padding'?: number;
  readonly '--subject-width'?: number;
};

type TMeasurement = {
  readonly token: string;
  readonly value: string;
};

type TAnnotationProps = {
  readonly tokens: readonly string[];
  readonly value: string;
};

const SIZE_OPTIONS = Object.values(BUTTON_SIZES);
const VARIANT_OPTIONS = Object.values(BUTTON_VARIANTS);
const UNMEASURED: TMeasurement = { token: 'measuring', value: '…' };

const readMetrics = (button: HTMLButtonElement): TButtonMetrics => {
  const style = window.getComputedStyle(button);

  return {
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    height: `${String(button.offsetHeight)}px`,
    offsetHeight: button.offsetHeight,
    offsetWidth: button.offsetWidth,
    paddingInline: style.paddingInlineStart,
    radius: style.borderTopLeftRadius,
  };
};

const describeToken = (table: string, name: string | undefined) =>
  name === undefined ? 'not a token' : `${table}.${name}`;

function Annotation({ tokens, value }: TAnnotationProps) {
  return (
    <AnnotationLabel>
      <strong>{value}</strong>
      {tokens.map((token, index) => (
        <span key={index}>{token}</span>
      ))}
    </AnnotationLabel>
  );
}

function TitleBlockCell({ label, token, value }: TMeasurement & { readonly label: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>
        {value}
        <span>{token}</span>
      </dd>
    </div>
  );
}

/**
 * A dimensioned drawing of a live Button. Every figure is read from the rendered element with
 * `getComputedStyle` and matched back to the raw token scales, so the drawing cannot drift from the
 * component.
 */
export function ButtonAnatomy() {
  const [size, setSize] = useState<TButtonSize>(BUTTON_SIZES.MEDIUM);
  const [variant, setVariant] = useState<TButtonVariant>(BUTTON_VARIANTS.FILLED);
  const [metrics, setMetrics] = useState<TButtonMetrics | null>(null);

  const observeSubject = useCallback((button: HTMLButtonElement | null) => {
    if (button === null) {
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      setMetrics(readMetrics(button));
    });

    observer.observe(button);

    return () => {
      observer.disconnect();
    };
  }, []);

  const height: TMeasurement =
    metrics === null
      ? UNMEASURED
      : {
          token: describeToken('SIZES', findTokenName(SIZE_SCALE, metrics.height)),
          value: metrics.height,
        };
  const padding: TMeasurement =
    metrics === null
      ? UNMEASURED
      : {
          token: describeToken('SPACINGS', findTokenName(SPACING_SCALE, metrics.paddingInline)),
          value: metrics.paddingInline,
        };
  const radius: TMeasurement =
    metrics === null
      ? UNMEASURED
      : {
          token: describeToken('RADII', findTokenName(RADIUS_SCALE, metrics.radius)),
          value: metrics.radius,
        };
  const fontSize: TMeasurement =
    metrics === null
      ? UNMEASURED
      : {
          token: describeToken('FONT_SIZES', findTokenName(FONT_SIZE_SCALE, metrics.fontSize)),
          value: metrics.fontSize,
        };
  const fontWeight: TMeasurement =
    metrics === null
      ? UNMEASURED
      : {
          token: describeToken(
            'FONT_WEIGHTS',
            findTokenName(FONT_WEIGHT_SCALE, metrics.fontWeight),
          ),
          value: metrics.fontWeight,
        };

  const stageStyle: TStageStyle =
    metrics === null
      ? {}
      : {
          '--subject-height': metrics.offsetHeight,
          '--subject-padding': Number.parseFloat(metrics.paddingInline),
          '--subject-width': metrics.offsetWidth,
        };

  return (
    <AnatomyFigure forwardedAs="figure" aria-label="Button anatomy, measured from the live element">
      <FrameHead>
        <Caption data-tone="ink">Fig. 01 — Button</Caption>
        <Caption>read with getComputedStyle()</Caption>
      </FrameHead>

      <AnatomyStage style={stageStyle} data-measured={metrics === null ? undefined : ''}>
        <AnatomySubject>
          <Button ref={observeSubject} size={size} variant={variant}>
            Save
          </Button>
        </AnatomySubject>

        <HeightDimension aria-hidden="true" data-annotation="">
          <Annotation tokens={[height.token]} value={height.value} />
        </HeightDimension>
        <PaddingDimension aria-hidden="true" data-annotation="">
          <Annotation tokens={[padding.token]} value={padding.value} />
        </PaddingDimension>
        <RadiusLeader aria-hidden="true" data-annotation="">
          <Annotation tokens={[radius.token]} value={radius.value} />
        </RadiusLeader>
        <TypeLeader aria-hidden="true" data-annotation="">
          <Annotation
            tokens={[fontSize.token, fontWeight.token]}
            value={`${fontSize.value} / ${fontWeight.value}`}
          />
        </TypeLeader>
      </AnatomyStage>

      <AnatomyControls>
        <OptionSwitch label="Size" options={SIZE_OPTIONS} value={size} onChange={setSize} />
        <OptionSwitch
          label="Variant"
          options={VARIANT_OPTIONS}
          value={variant}
          onChange={setVariant}
        />
      </AnatomyControls>

      <TitleBlock>
        <div>
          <dt>Renders</dt>
          <dd>
            {'<button>'}
            <span>type=&quot;button&quot;</span>
          </dd>
        </div>
        <TitleBlockCell label="Height" {...height} />
        <TitleBlockCell label="Padding inline" {...padding} />
        <TitleBlockCell label="Radius" {...radius} />
        <TitleBlockCell label="Font size" {...fontSize} />
        <TitleBlockCell label="Font weight" {...fontWeight} />
      </TitleBlock>
    </AnatomyFigure>
  );
}
