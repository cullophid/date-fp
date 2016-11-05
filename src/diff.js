//@flow
import curry from 'lodash.curry'
import get from './get'
import {DATE_UNITS} from './helpers/constants'

export default curry((unit, date1, date2) => {
  if (unit === 'years') {
    return get('year', date2) - get('year', date1)
  }

  if (unit === 'months') {
    return (get('year', date2) - get('year', date1)) * 12 +
      (get('month', date2) - get('month', date1))
  }

  if (!DATE_UNITS[unit]) return NaN

  return Math.round((date2 - date1) / DATE_UNITS[unit])
})
