import { forwardRef, useCallback, useState } from 'react';

import { AVATAR_SIZES } from './avatar.constants';
import { AvatarImage, StyledAvatar } from './avatar.styles';
import type { TAvatarProps } from './avatar.types';

export const Avatar = forwardRef<HTMLSpanElement, TAvatarProps>(function Avatar(
  { alt, fallback, onImageError, size = AVATAR_SIZES.MEDIUM, src, ...nativeProps },
  ref,
) {
  const [failedSource, setFailedSource] = useState<string>();
  const showImage = Boolean(src) && failedSource !== src;

  // A server-rendered image can fail before React attaches its error handler, so an image that
  // is already complete without pixels is treated as failed when it mounts.
  const checkLoadedImage = useCallback(
    (image: HTMLImageElement | null) => {
      if (image?.complete === true && image.naturalWidth === 0) {
        setFailedSource(src);
      }
    },
    [src],
  );

  return (
    <StyledAvatar
      {...nativeProps}
      ref={ref}
      aria-hidden={!showImage && alt.length === 0 ? true : undefined}
      aria-label={!showImage && alt.length > 0 ? alt : undefined}
      data-size={size}
      role={!showImage && alt.length > 0 ? 'img' : undefined}
    >
      {showImage ? (
        <AvatarImage
          ref={checkLoadedImage}
          alt={alt}
          src={src}
          onError={(event) => {
            setFailedSource(src);
            onImageError?.(event);
          }}
        />
      ) : (
        fallback
      )}
    </StyledAvatar>
  );
});
