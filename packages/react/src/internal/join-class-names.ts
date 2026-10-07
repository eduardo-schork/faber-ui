/** Joins class names, skipping empty and missing entries. */
export const joinClassNames = (...classNames: readonly (string | undefined)[]) =>
  classNames.filter((className) => className !== undefined && className !== '').join(' ');
