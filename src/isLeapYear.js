import curry from 'lodash.curry'
import isValid from './isValid'

const isLeapYear = (date) =>
  new Date(`${date.getFullYear()}-02-29`).getMonth() === 1

export default curry((date) => isValid(date) ? isLeapYear(date) : false)
