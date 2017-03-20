// @flow
import curry from 'lodash.curry'
import add from './add'

export default curry((step, value, date) => add(step, -value, date))
