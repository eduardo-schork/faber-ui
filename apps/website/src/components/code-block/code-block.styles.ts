import { CodeBlock, COLORS, FONT_WEIGHTS, RADII } from '@faber-ui/react';
import styled from 'styled-components';

/** The library CodeBlock with the colors of this site's syntax tokens. */
export const HighlightedCode = styled(CodeBlock)`
  border-radius: ${RADII.MD};

  [data-token='comment'] {
    color: ${COLORS.TEXT_SECONDARY};
    font-style: italic;
  }

  [data-token='keyword'] {
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  [data-token='string'],
  [data-token='property'] {
    color: ${COLORS.PRIMARY};
  }

  [data-token='tag'],
  [data-token='number'] {
    color: ${COLORS.ACCENT};
  }
`;
