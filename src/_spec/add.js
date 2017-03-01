import assert from 'assert'
import of from '../of'
import add from '../add'
import fromTime from '../fromTime'
import isValid from '../isValid'
import {checkDate} from '../helpers/util'
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const WEEK = 7 * DAY

describe('add', () => {
  it('should return a new date with the correct time difference', () => {
    const date = of([2015, 0, 1])
    const actual = add('days', 2, date)

    assert.notEqual(date, actual, 'should return a new date')
    assert.equal(date.getTime(), of([2015, 0, 1]).getTime(), 'should not change the original date')
    assert.equal(actual.getTime(), of([2015, 0, 3]).getTime(), 'should return a date 2 days after the input date')
  })

  it('should be curried', () => {
    const date = of([2015, 0, 1])

    assert.deepEqual(add('days')(2)(date), add('days', 2, date))
  })

  it('should work for milliseconds', () => {
    const actual = add('milliseconds', 1, fromTime(0))

    assert.equal(1, actual.getTime())
  })

  it('should work for seconds', () => {
    const actual = add('seconds', 1, fromTime(0))

    assert.equal(SECOND, actual.getTime())
  })

  it('should work for minutes', () => {
    const actual = add('minutes', 1, fromTime(0))

    assert.equal(MINUTE, actual.getTime())
  })

  it('should work for hours', () => {
    const actual = add('hours', 1, fromTime(0))

    assert.equal(HOUR, actual.getTime())
  })

  it('should work for days', () => {
    const actual = add('days', 1, fromTime(0))

    assert.equal(DAY, actual.getTime())
  })

  it('should work for weeks', () => {
    const actual = add('weeks', 1, new Date(0))

    assert.equal(WEEK, actual.getTime())
  })

  it('should work for months', () => {
    const actual = add('months', 1, of([2015, 0, 15]))

    assert.equal(1, actual.getUTCMonth())
  })

  it('should return an invalid date if the result is invalid', () => {
    const actual = add('months', 1, of([2015, 0, 30]))

    assert(checkDate(actual))
    assert(!isValid(actual))
  })

  it('should return an invalid date if the unit of time is invalid', () => {
    const actual = add('foo', 1, of([2015, 0, 30]))

    assert(checkDate(actual))
    assert(!isValid(actual))
  })

  it('should work for year', () => {
    const actual = add('years', 1, of([1970, 5, 15]))

    assert.equal(1971, actual.getUTCFullYear())
  })
})
