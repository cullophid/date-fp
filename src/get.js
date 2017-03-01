//@flow
import curry from 'lodash.curry'
import of from './of'
import {DATE_UNITS} from './helpers/constants'


const getWeek = _date => {
  const getWeekDay = d => d.getUTCDay() ? d.getUTCDay() : 7
  const date = new Date(_date)
  // 4th of jan is always week 1. This is because week numbers are ridiculous and make no logical sense
  const firstWeek = of([date.getUTCFullYear(), 0, 4])
  // set the weekday to sunday
  date.setUTCDate(date.getUTCDate() + (7 - getWeekDay(date)))
  firstWeek.setUTCDate(firstWeek.getUTCDate() + (7 - getWeekDay(firstWeek)))
  // return the diff in weeks. add 1 because we are starting at week 1
  return 1 + Math.round((date.getTime() - firstWeek.getTime()) / DATE_UNITS.weeks)
}

const getters = {
  'milliseconds': date => date.getUTCMilliseconds(),
  'seconds': date => date.getUTCSeconds(),
  'minutes': date => date.getUTCMinutes(),
  'hours': date => date.getUTCHours(),
  'date': date => date.getUTCDate(),
  'day': date => date.getUTCDay(),
  'week': getWeek,
  'month': date => date.getUTCMonth() + 1,
  'year': date => date.getUTCFullYear()
}

export default curry((prop, date) => {
  if (!getters.hasOwnProperty(prop)) return NaN

  return getters[prop](date)
})
