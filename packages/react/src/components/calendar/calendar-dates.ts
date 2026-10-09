/** Calendar days are handled as `YYYY-MM-DD` strings, which carry no time and no time zone. */
export type TIsoDate = string;

const ISO_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/u;
const DAYS_IN_WEEK = 7;

const pad = (value: number) => String(value).padStart(2, '0');

export const toIsoDate = (date: Date): TIsoDate =>
  `${String(date.getFullYear())}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

/** A local date at noon, so daylight-saving shifts never move it to another day. */
export const fromIsoDate = (value: TIsoDate | undefined): Date | undefined => {
  const match = value === undefined ? null : ISO_PATTERN.exec(value);

  if (match === null) {
    return undefined;
  }

  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 12);

  return toIsoDate(date) === value ? date : undefined;
};

export const addDays = (date: Date, amount: number) => {
  const next = new Date(date);

  next.setDate(next.getDate() + amount);

  return next;
};

/** Moves by whole months and clamps the day, so January 31 plus one month is the end of February. */
export const addMonths = (date: Date, amount: number) => {
  const next = new Date(date.getFullYear(), date.getMonth() + amount, 1, 12);
  const lastDay = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();

  next.setDate(Math.min(date.getDate(), lastDay));

  return next;
};

/** The weeks that cover a month, each with seven days, including days of the adjacent months. */
export const getMonthWeeks = (month: Date, weekStartsOn: number): Date[][] => {
  const first = new Date(month.getFullYear(), month.getMonth(), 1, 12);
  const offset = (first.getDay() - weekStartsOn + DAYS_IN_WEEK) % DAYS_IN_WEEK;
  const start = addDays(first, -offset);
  const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const weekCount = Math.ceil((offset + lastDay) / DAYS_IN_WEEK);

  return Array.from({ length: weekCount }, (_, week) =>
    Array.from({ length: DAYS_IN_WEEK }, (__, day) => addDays(start, week * DAYS_IN_WEEK + day)),
  );
};

export const isOutOfRange = (date: Date, min?: TIsoDate, max?: TIsoDate) => {
  const value = toIsoDate(date);

  return (min !== undefined && value < min) || (max !== undefined && value > max);
};
