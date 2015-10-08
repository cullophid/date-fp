'use strict';
import curry from 'lodash.curry';
const steps = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000
};

const _addMonth = (count, date) => {
  let clone = new Date(date);
  clone.setMonth(date.getMonth() + count);
  if (clone.getMonth() !== (date.getMonth() + count) % 12) {
    return new Error('Invalid date');
  }
  return clone;
};

const _addYear = (count, date) => {
  let clone = new Date(date);
  clone.setFullYear(date.getFullYear() + count);
  return clone;
};

export const add = curry((step, count, date) => {
  switch (step) {
    case 'months':
      return _addMonth(count, date);
    case 'years':
      return _addYear(count, date);
    default:
      if (steps[step] === undefined) {
        return new Error('Step is invalid');
      }
      return new Date((steps[step] * count) + date.getTime());
  }
});

export const addMilliseconds = add('milliseconds');
export const addSeconds = add('seconds');
export const addMinutes = add('minutes');
export const addHours = add('hours');
export const addDays = add('days');
export const addMonths = add('months');
export const addYears = add('years');
