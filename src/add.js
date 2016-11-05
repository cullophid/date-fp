//@flow
import curry from 'lodash.curry'

const steps = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000
}

const _addMonth = (count, date) => {
  const clone = new Date(date)

  clone.setMonth(date.getMonth() + count)
  if (clone.getMonth() !== (date.getMonth() + count) % 12) {
    return new Date('invalid')
  }
  return clone
}

const _addYear = (count, date) => {
  const clone = new Date(date)

  clone.setFullYear(date.getFullYear() + count)
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
    return new Date((steps[step] * count) + date.getTime())
  }
})
