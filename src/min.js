import curry from 'lodash.curry'
import {find, any} from './helpers/util'
import isValid from './isValid'

export default curry((dates) => any(isValid, dates) ? find(Math.min, dates) : new Date(undefined))
