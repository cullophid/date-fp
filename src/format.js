'use strict';
import curry from 'lodash.curry';
import {fill, firstN, lastN} from './helpers/util';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const TOKENS = [
  [/YYYY/g,  '%1%',  d => fill(4, d.getFullYear())],
  [/YY/g,    '%2%',  d => lastN(2, fill(4, d.getFullYear()))],
  [/MMMM/g,  '%3%',  d => MONTHS[d.getMonth()]],
  [/MMM/g,   '%4%',  d => firstN(3, MONTHS[d.getMonth()])],
  [/MM/g,    '%5%',  d => fill(2, d.getMonth() + 1)],
  [/M/g,     '%6%',  d => d.getMonth() + 1],
  [/DD/g,    '%7%',  d => fill(2, d.getDate())],
  [/D/g,     '%8%',  d => d.getDate()],
  [/dddd/g,  '%9%',  d => DAYS[d.getDay()]],
  [/ddd/g,  '%10%',  d => firstN(3,DAYS[d.getDay()])],
  [/dd/g,   '%11%',  d => firstN(2,DAYS[d.getDay()])],
  [/d/g,    '%12%',  d => d.getDay()],
  [/HH/g,   '%13%',  d => fill(2, d.getHours())],
  [/H/g,    '%14%',  d => d.getHours()],
  [/hh/g,   '%15%',  d => fill(2, d.getHours() % 12)],
  [/h/g,    '%16%',  d => d.getHours() % 12],
  [/mm/g,   '%17%',  d => fill(2, d.getMinutes())],
  [/m/g,    '%18%',  d => d.getMinutes()],
  [/ss/g,   '%19%',  d => fill(2, d.getSeconds())],
  [/s/g,    '%20%',  d => d.getSeconds()],
  [/A/g,    '%21%',  d => d.getHours() > 11 ? 'PM': 'AM'],
  [/a/g,    '%22%',  d => d.getHours() > 11 ? 'pm': 'am'],
  [/SSS/g,  '%23%',  d => fill(3, d.getMilliseconds())],
  [/SS/g,   '%24%',  d => firstN(2, fill(3, d.getMilliseconds()))],
  [/S/g,    '%25%',  d => firstN(1, fill(3, d.getMilliseconds()))],
]

const swapTokensWithPlaceholders = format => TOKENS.reduce((format, token) => {
  return format.replace(token[0], token[1]);
}, format);

const swapPlaceholdersWithValues = curry((date, format) =>
  TOKENS.reduce((result, token) => result.replace(token[1], token[2](date)), format));

export default curry((format, date) => {
  const tempString = swapTokensWithPlaceholders(format);
  return swapPlaceholdersWithValues(date, tempString);
});
