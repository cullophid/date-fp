/* eslint no-self-compare: 0*/
import curry from 'lodash.curry'
import isValid from '../isValid'

const ZEROS = '00000000'

export const lastN = curry((n, str) => str.substring(str.length - n, str.length))
export const firstN = curry((n, str) => str.substring(0, n))
export const fill = curry((digits, n) => lastN(digits, ZEROS + n))

export const find = curry((f, array) => {
  const filtered = array.filter(isValid)

  return filtered.length === 0 ? new Date('invalid') : new Date(filtered.reduce((memo, date) => f(memo, date)))
})

export const any = curry((f, coll) => coll.reduce((r, e) => r || f(e), false))

export const checkNaN = n => n !== n // NaN is the only number that is not equal to itself

export const checkDate = date =>
  Object.prototype.toString.call(date) === "[object Date]"
export const set = curry((prop, value, obj) => {
  obj[prop] = value
  return obj
})

export const fromPairs = pairs => pairs.reduce((obj, pair) => set(pair[0], pair[1], obj), {})
