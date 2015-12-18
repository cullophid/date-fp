import curry from 'lodash.curry'

export default curry((date) => {
  if (Object.prototype.toString.call(date) !== "[object Date]") return false
  const unixTime = date.getTime()

  return isNaN(unixTime)
})
