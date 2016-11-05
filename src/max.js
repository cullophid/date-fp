// @flow weak
import {find, any} from './helpers/util'
import isValid from './isValid'
export default dates =>
  any(isValid, dates) ? find(Math.max, dates) : new Date('invalid')
