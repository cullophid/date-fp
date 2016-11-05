//@flow
import curry from 'lodash.curry'

export default curry((d1, d2) => d1.getTime() === d2.getTime())
