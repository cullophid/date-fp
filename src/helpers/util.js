/* eslint no-self-compare: 0*/
import curry from 'lodash.curry'
import isValid from '../isValid'

const ZEROS = '00000000'

export const lastN = curry((n, str) => str.substring(str.length - n, str.length))
export const firstN = curry((n, str) => str.substring(0, n))
export const fill = curry((digits, n) => lastN(digits, ZEROS + n))

export const validate = dates => dates.length > 0 && dates.filter(isValid).length === dates.length
export const check = (dates, f, ...args) => validate(dates) ? f(...args) : new Error('Invalid date object(s) provided.')
export const find = curry((f, array) => {
  const filtered = array.filter(isValid)

  return check(filtered, dates => new Date(dates.reduce((memo, date) => f(memo, date))), filtered)
})


export const checkNaN = n => n !== n // NaN is the only number that is not equal to itself

export const checkDate = date =>
  Object.prototype.toString.call(date) === "[object Date]"
