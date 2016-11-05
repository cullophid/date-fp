import assert from 'assert'
import {checkNaN} from '../helpers/util'
import get from '../get'
import of from '../of'

describe('get', () => {
  it('should be curried', () => {
    const date = of([2015, 0, 2, 11, 22, 33, 123])

    assert.equal(get('seconds')(date), get('seconds', date))
  })

  it('should return NaN for an invalid time unit', () => {
    const input = of([2015, 1, 2, 11, 22, 33, 123])
    const actual = get('foo', input)

    assert(checkNaN(actual))
  })

  it('should return the milliseconds', () => {
    const input = of([2015, 0, 2, 11, 22, 33, 123])
    const milliseconds = get('milliseconds', input)

    assert.equal(milliseconds, 123)
  })
  it('should return the seconds', () => {
    const input = of([2015, 0, 2, 11, 22, 33, 123])
    const seconds = get('seconds', input)

    assert.equal(seconds, 33)
  })

  it('should return the minutes', () => {
    const input = of([2015, 0, 2, 11, 22, 33, 123])
    const minutes = get('minutes', input)

    assert.equal(minutes, 22)
  })

  it('should return the hours', () => {
    const input = of([2015, 0, 2, 11, 22, 33, 123])
    const hours = get('hours', input)

    assert.equal(hours, 11)
  })

  it('should return the days', () => {
    const input = of([2015, 0, 2, 11, 22, 33, 123])
    const date = get('date', input)

    assert.equal(date, 2)
  })

  it('should return the day', () => {
    const input = of([2016, 5, 15, 11, 22, 33, 123])
    const date = get('day', input)

    assert.equal(date, 3)
  })

  it('should return the week for a monday', () => {
    const input = of([2015, 2, 2, 9, 8, 5, 23])
    const week = get('week', input)

    assert.equal(week, 10)
  })

  it('should return the week for a sunday', () => {
    const input = of([2015, 2, 8, 11, 22, 33, 123])
    const week = get('week', input)

    assert.equal(week, 10)
  })

  it('should return the month', () => {
    const input = of([2015, 0, 2, 11, 22, 33, 123])
    const month = get('month', input)

    assert.equal(month, 1)
  })

  it('should return the year', () => {
    const input = of([2015, 0, 2, 11, 22, 33, 123])
    const year = get('year', input)

    assert.equal(year, 2015)
  })
})
