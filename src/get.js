'use strict';
import curry from 'lodash.curry';
const getters = {
  'milliseconds': date => date.getMilliseconds(),
  'seconds': date => date.getSeconds(),
  'minutes': date => date.getMinutes(),
  'hours': date => date.getHours(),
  'date': date => date.getDate(),
  'month': date => date.getMonth() + 1,
  'year': date => date.getFullYear(),
};

export const get = curry((prop, date) => {
  if (!getters.hasOwnProperty(prop)) {
    return new Error('Invalid Date property');
  }
  return getters[prop](date);
});

export const getMilliseconds = get('milliseconds');
export const getSeconds = get('seconds');
export const getMinutes = get('minutes');
export const getHours = get('hours');
export const getDate = get('date');
export const getMonth = get('month');
export const getYear = get('year');
