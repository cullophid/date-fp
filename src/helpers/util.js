import curry from 'lodash.curry'
import isValid from '../isValid'

const ZEROS = '00000000'

export const lastN = curry((n, str) => str.substring(str.length - n, str.length))
export const firstN = curry((n, str) => str.substring(0, n))
export const fill = curry((digits, n) => lastN(digits, ZEROS + n))

export const validate = (dates) => dates.length > 0 && dates.filter(isValid).length === dates.length
export const check = (dates, f, ...args) => validate(dates) ? f(...args) : new Error('Invalid date object(s) provided.')
export const find = curry((f, array) => {
  const filtered = array.filter(isValid)

  return check(filtered, (dates) => new Date(dates.reduce((memo, date) => f(memo, date))), filtered)
})

export const compose = (a, b) => (...args) => a(b(...args))

export const findIndex = curry((list, key) => {
  const _key = key.slice(0, 3).toLowerCase()

  return list.findIndex((m) => m.slice(0, 3) === _key)
})

export const set = curry((key, value, obj) => {
  obj[key] = value
  return obj
})

export const fromPairs = (pairs) =>
  pairs.reduce((obj, pair) => set(pair[0], pair[1], obj), {})
