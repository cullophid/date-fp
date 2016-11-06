//@flow weak
import parse from './parse'
import get from './get'
import equals from './equals'
import diff from './diff'
import isLeapYear from './isLeapYear'
import format from './format'
import set from './set'
import add from './add'
import sub from './sub'
import min from './min'
import max from './max'
import isValid from './isValid'
import convertTo from './convertTo'
import unixTime from './unixTime'

const clone = date => new Date(date.getTime())

module.exports = {
  add,
  clone,
  equals,
  diff,
  format,
  get,
  isLeapYear,
  parse,
  set,
  sub,
  min,
  max,
  isValid,
  convertTo,
  unixTime
}
