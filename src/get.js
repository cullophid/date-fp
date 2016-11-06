//@flow
import curry from 'lodash.curry'
import {DATE_UNITS} from './helpers/constants'


const getWeek = _date => {
  const getWeekDay = d => d.getDay() ? d.getDay() : 7
  const date = new Date(_date)
  // 4th of jan is always week 1. This is because week numbers are ridiculous and make no logical sense
  const firstWeek = new Date(date.getFullYear(), 0, 4)
  // set the weekday to sunday
  date.setDate(date.getDate() + (7 - getWeekDay(date)))
  firstWeek.setDate(firstWeek.getDate() + (7 - getWeekDay(firstWeek)))
  // return the diff in weeks. add 1 because we are starting at week 1
  return 1 + Math.round((date.getTime() - firstWeek.getTime()) / DATE_UNITS.weeks)
}

const getters = {
  'milliseconds': date => date.getMilliseconds(),
  'seconds': date => date.getSeconds(),
  'minutes': date => date.getMinutes(),
  'hours': date => date.getHours(),
  'date': date => date.getDate(),
  'day': date => date.getDay(),
  'week': getWeek,
  'month': date => date.getMonth() + 1,
  'year': date => date.getFullYear(),
  'timezoneOffset': date => date.getTimezoneOffset()
}

export default curry((prop, date) => {
  if (!getters.hasOwnProperty(prop)) return NaN

  return getters[prop](date)
})
