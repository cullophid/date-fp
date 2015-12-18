import curry from 'lodash.curry'
import {check} from './helpers/util'

const isLeapYear = (date) => new Date(`${date.getFullYear()}-02-29`).getMonth() === 1

export default curry((date) => check([date], isLeapYear, date))
