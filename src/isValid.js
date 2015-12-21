/* eslint no-self-compare: 0*/
import curry from 'lodash.curry'

const checkNaN = n => {
  return isNaN(n) && n !== n
}

export default curry(date => {
  if (Object.prototype.toString.call(date) !== "[object Date]") return false

  return !checkNaN(date.getTime())
})
