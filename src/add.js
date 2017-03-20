//@flow
import curry from 'lodash.curry'
import fromTime from './fromTime'

const steps = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
  weeks: 7 * 24 * 60 * 60 * 1000
}

const _addMonth = (count, date) => {
  const clone = new Date(date)

  clone.setMonth(date.getUTCMonth() + count)
  if (clone.getUTCMonth() !== (date.getUTCMonth() + count) % 12) {
    return new Date('invalid')
  }
  return clone
}

const _addYear = (count, date) => {
  const clone = new Date(date)

  clone.setUTCFullYear(date.getUTCFullYear() + count)
  return clone
}

export default curry((step, count, date) => {
  switch (step) {
  case 'months':
    return _addMonth(count, date)
  case 'years':
    return _addYear(count, date)
  default:
    if (steps[step] === void 0) {
      return new Date('invalid')
    }
    return fromTime((steps[step] * count) + date.getTime())
  }
})
