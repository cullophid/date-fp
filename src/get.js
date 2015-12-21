import curry from 'lodash.curry'
const getters = {
  'milliseconds': (date) => date.getMilliseconds(),
  'seconds': (date) => date.getSeconds(),
  'minutes': (date) => date.getMinutes(),
  'hours': (date) => date.getHours(),
  'date': (date) => date.getDate(),
  'month': (date) => date.getMonth() + 1,
  'year': (date) => date.getFullYear()
}

export default curry((prop, date) => {
  if (!getters.hasOwnProperty(prop)) return NaN
  return getters[prop](date)
})
