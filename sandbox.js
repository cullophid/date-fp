'use strict';
import D from './index';
const date1 = new Date('2014-02-01 11:12:13.123');
const date2 = new Date('2015-01-03 21:12:13.123');

console.log(D.diff('milliseconds', date1, date2));
console.log(D.diff('seconds', date1, date2));
console.log(D.diff('minutes', date1, date2));
console.log(D.diff('hours', date1, date2));
console.log(D.diff('days', date1, date2));
console.log(D.diff('months', date1, date2));
console.log(D.diff('years', date1, date2));
