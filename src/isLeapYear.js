// @flow weak
import of from './of'
export default date => of([date.getUTCFullYear(), 1, 29]).getUTCMonth() === 1
