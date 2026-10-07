export const PLAYGROUND_PREVIEW_CLASS = 'playground-preview';

/**
 * Confines a reader's stylesheet to the preview by nesting it under the preview class. `:root`
 * is rewritten to the preview itself, so the same rules a consumer would write for a whole
 * application apply to the preview only.
 */
export const scopePlaygroundCss = (css: string) =>
  `.${PLAYGROUND_PREVIEW_CLASS} {\n${css.replaceAll(/:root\b/gu, '&')}\n}`;
