//@flow
import curry from 'lodash.curry'
import {DATE_TOKENS, WEEKDAYS, MONTHS} from './helpers/constants'
import {fill, firstN, lastN} from './helpers/util'
import isValid from './isValid'
import get from './get'

const tokenFunctions = {
  YYYY: d => fill(4, d.getUTCFullYear()),
  YY: d => lastN(2, fill(4, d.getUTCFullYear())),
  MMMM: d => MONTHS[d.getUTCMonth()],
  MMM: d => firstN(3, MONTHS[d.getUTCMonth()]),
  MM: d => fill(2, d.getUTCMonth() + 1),
  M: d => d.getUTCMonth() + 1,
  w: d => get('week', d),
  ww: d => fill(2, get('week', d)),
  DD: d => fill(2, d.getUTCDate()),
  D: d => d.getUTCDate(),
  dddd: d => WEEKDAYS[d.getUTCDay()],
  ddd: d => firstN(3, WEEKDAYS[d.getUTCDay()]),
  dd: d => firstN(2, WEEKDAYS[d.getUTCDay()]),
  d: d => d.getUTCDay(),
  HH: d => fill(2, d.getUTCHours()),
  H: d => d.getUTCHours(),
  hh: d => fill(2, modCeiling(12, d.getUTCHours())),
  h: d => modCeiling(12, d.getUTCHours()),
  mm: d => fill(2, d.getUTCMinutes()),
  m: d => d.getUTCMinutes(),
  ss: d => fill(2, d.getUTCSeconds()),
  s: d => d.getUTCSeconds(),
  A: d => d.getUTCHours() > 11 ? 'PM' : 'AM',
  a: d => d.getUTCHours() > 11 ? 'pm' : 'am',
  SSS: d => fill(3, d.getUTCMilliseconds()),
  SS: d => firstN(2, fill(3, d.getUTCMilliseconds())),
  S: d => firstN(1, fill(3, d.getUTCMilliseconds())),
  Q: d => Math.ceil((d.getUTCMonth() + 1) / 3),
}

const modCeiling = (mod, val) => val % mod || mod

const swapTokenWithValue = curry((date, token) => tokenFunctions[token] ? tokenFunctions[token](date) : token)

export default curry((format, date) => {
  if (isValid(date) === false) return 'Invalid Date'

  return format.match(DATE_TOKENS)
    .map(swapTokenWithValue(date))
    .join('')
})
