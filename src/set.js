//@flow
import curry from 'lodash.curry'
import get from './get'
import { DATE_UNITS } from './helpers/constants'

const setWeek = (value, date) => {
  const currentWeek = get('week', date)
  const diffWeeks = value - currentWeek
  const diffTime = DATE_UNITS.weeks * diffWeeks
  let changedDate = new Date(date.getTime() + diffTime)
  date.setMonth(changedDate.getMonth())
  date.setDate(changedDate.getDate())
}

const setters = {
  'milliseconds': (value, date) => date.setMilliseconds(value),
  'seconds': (value, date) => date.setSeconds(value),
  'minutes': (value, date) => date.setMinutes(value),
  'hours': (value, date) => date.setHours(value),
  'date': (value, date) => date.setDate(value),
  'week': setWeek,
  'month': (value, date) => date.setMonth(value - 1),
  'year': (value, date) => date.setFullYear(value)
}

export default curry((step, value, date) => {
  if (!setters.hasOwnProperty(step)) return new Date('invalid')

  const clone = new Date(date.getTime())

  setters[step](value, clone)

  return (get(step, clone) === value) ? clone : new Date('invalid')
})
