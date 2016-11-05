//@flow weak
import {checkDate, checkNaN} from './helpers/util'

export default date => checkDate(date) && checkNaN(date.getTime()) === false
