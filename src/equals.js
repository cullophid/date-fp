import curry from 'lodash.curry'
import {check} from './helpers/util'

const equals = (d1, d2) => d1.getTime() === d2.getTime()

export default curry((d1, d2) => check([d1, d2], equals, d1, d2))
