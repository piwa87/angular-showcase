import { formatDate } from '@angular/common';

export function isItSameDate(
  date1: Date | undefined,
  date2: Date | undefined
): boolean {
  if (!date1 || !date2) return false;

  const realDate1 = ensureItIsADateFormat(date1);
  const realDate2 = ensureItIsADateFormat(date2);
  return realDate1.setHours(0, 0, 0, 0) === realDate2.setHours(0, 0, 0, 0);
}

export function isDateToday(date: Date | undefined): boolean {
  return date ? isItSameDate(date, new Date()) : false;
}
export function getFormatetDatestring(
  date: Date,
  format: string = 'dd-MM-yyyy',
  locale: string = 'da-DK'
): string {
  return formatDate(date, format, locale);
}
export function getNextDay(date: Date): Date {
  return addDay(date);
}

export function getPreviousDay(date: Date): Date {
  return subtractDay(date);
}

export function isDateTodayOrBefore(theDate: Date): boolean {
  const today = new Date();
  const realDate = ensureItIsADateFormat(theDate);
  today.setHours(0, 0, 0, 0);
  realDate.setHours(0, 0, 0, 0);
  return realDate <= today;
}

export function isNowInsideTimeRange(from: Date, to: Date): boolean {
  const realFrom = ensureItIsADateFormat(from);
  const realTo = ensureItIsADateFormat(to);
  const now = new Date();
  return now >= realFrom && now <= realTo;
}

function addDay(date: Date): Date {
  const realDate = ensureItIsADateFormat(date);
  realDate.setDate(realDate.getDate() + 1);
  return realDate;
}

function subtractDay(date: Date): Date {
  const realDate = ensureItIsADateFormat(date);
  realDate.setDate(realDate.getDate() - 1);
  return realDate;
}

export function ensureItIsADateFormat(date: Date | string): Date {
  return typeof date === 'string' ? new Date(date) : date;
}

export function getHoursMinutesAsStringFromDate(
  date: Date | undefined
): string {
  if (!date) {
    return '';
  }
  const dateObject = ensureItIsADateFormat(date);

  return `${String(dateObject.getHours()).padStart(2, '0')}:${String(
    dateObject.getMinutes()
  ).padStart(2, '0')}`;
}

export function createDateWithHoursAndMinutes(
  hoursMinutes: string | undefined,
  date: Date | undefined
): Date | undefined {
  return hoursMinutes && date
    ? createDateFromString(hoursMinutes, date)
    : undefined;
}

export function createTodayWithHoursAndMinutes(hoursMinutes?: string) {
  return hoursMinutes
    ? createDateFromString(hoursMinutes, new Date())
    : undefined;
}

function createDateFromString(
  hoursMinutes: string,
  date: Date
): Date | undefined {
  const returnDate = ensureItIsADateFormat(date);
  if (!isValidHoursMinuteFormat(hoursMinutes)) {
    return undefined;
  }
  const hours: number = Number.parseInt(hoursMinutes.slice(0, 2));
  const minutes: number = Number.parseInt(hoursMinutes.slice(3, 5));
  returnDate.setHours(hours);
  returnDate.setMinutes(minutes);
  returnDate.setSeconds(0);
  returnDate.setMilliseconds(0);
  return returnDate;
}

export function isValidHoursMinuteFormat(timeString: string): boolean {
  const pattern: RegExp = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;
  return pattern.test(timeString);
}

export function formatDateFromIntlToDK(date: Date): string {
  return new Intl.DateTimeFormat('da-DK', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date).replace(/\./g, '/'); // Replace '.' with '/'
}

export function formatTimeFromIntlToDK(date: Date): string {
  return new Intl.DateTimeFormat('da-DK', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date).replace(/\./g, ':'); // Replace '.' with ':'
}
