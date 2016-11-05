//@flow
import curry from 'lodash.curry'
import get from './get'

const setters = {
  'milliseconds': (value, date) => date.setMilliseconds(value),
  'seconds': (value, date) => date.setSeconds(value),
  'minutes': (value, date) => date.setMinutes(value),
  'hours': (value, date) => date.setHours(value),
  'date': (value, date) => date.setDate(value),
  'month': (value, date) => date.setMonth(value - 1),
  'year': (value, date) => date.setFullYear(value)
}

export default curry((step, value, date) => {
  if (!setters.hasOwnProperty(step)) return new Date('invalid')

  const clone = new Date(date.getTime())

  setters[step](value, clone)

  return (get(step, clone) === value) ? clone : new Date('invalid')
})
