//@flow
import curry from 'lodash.curry'
import {DATE_TOKENS, WEEKDAYS, MONTHS} from './helpers/constants'
import {fill, firstN, lastN} from './helpers/util'
import isValid from './isValid'
import get from './get'

const tokenFunctions = {
  YYYY: d => fill(4, d.getFullYear()),
  YY: d => lastN(2, fill(4, d.getFullYear())),
  MMMM: d => MONTHS[d.getMonth()],
  MMM: d => firstN(3, MONTHS[d.getMonth()]),
  MM: d => fill(2, d.getMonth() + 1),
  M: d => d.getMonth() + 1,
  w: d => get('week', d),
  ww: d => fill(2, get('week', d)),
  DD: d => fill(2, d.getDate()),
  D: d => d.getDate(),
  dddd: d => WEEKDAYS[d.getDay()],
  ddd: d => firstN(3, WEEKDAYS[d.getDay()]),
  dd: d => firstN(2, WEEKDAYS[d.getDay()]),
  d: d => d.getDay(),
  HH: d => fill(2, d.getHours()),
  H: d => d.getHours(),
  hh: d => fill(2, modCeiling(12, d.getHours())),
  h: d => modCeiling(12, d.getHours()),
  mm: d => fill(2, d.getMinutes()),
  m: d => d.getMinutes(),
  ss: d => fill(2, d.getSeconds()),
  s: d => d.getSeconds(),
  A: d => d.getHours() > 11 ? 'PM' : 'AM',
  a: d => d.getHours() > 11 ? 'pm' : 'am',
  SSS: d => fill(3, d.getMilliseconds()),
  SS: d => firstN(2, fill(3, d.getMilliseconds())),
  S: d => firstN(1, fill(3, d.getMilliseconds())),
  Q: d => Math.ceil((d.getMonth() + 1) / 3),
}

const modCeiling = (mod, val) => val % mod || mod

const swapTokenWithValue = curry((date, token) => tokenFunctions[token] ? tokenFunctions[token](date) : token)

export default curry((format, date) => {
  if (isValid(date) === false) return 'Invalid Date'

  return format.match(DATE_TOKENS)
    .map(swapTokenWithValue(date))
    .join('')
})
