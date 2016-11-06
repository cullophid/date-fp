//@flow
import curry from 'lodash.curry'
import isValid from './isValid'
import {DATE_UNITS} from './helpers/constants'

const convertTo = (unit, date) => Math.round(date.getTime() / DATE_UNITS[unit])

export default curry((unit, date) => {
  if (!DATE_UNITS.hasOwnProperty(unit)) {
    return NaN
  }
  return isValid(date) ? convertTo(unit, date) : NaN
})
