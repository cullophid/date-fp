'use strict';
import curry from 'lodash.curry';
import {add} from './add';

export const sub = curry((step, value, date) => add(step, -value, date));

export const subMilliseconds = sub('milliseconds');
export const subSeconds = sub('seconds');
export const subMinutes = sub('minutes');
export const subHours = sub('hours');
export const subDays = sub('days');
export const subMonths = sub('months');
export const subYears = sub('years');
