const UNITS = ['B', 'KB', 'MB', 'GB'] as const;
const STEP = 1024;

/** A file size in the largest unit that keeps the number at one or above, such as "1.4 MB". */
export const formatFileSize = (bytes: number) => {
  const exponent = Math.min(
    bytes > 0 ? Math.floor(Math.log(bytes) / Math.log(STEP)) : 0,
    UNITS.length - 1,
  );
  const value = bytes / STEP ** exponent;

  return `${exponent === 0 ? String(value) : value.toFixed(1)} ${UNITS[exponent] ?? 'B'}`;
};
