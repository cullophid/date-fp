import assert from 'assert'
import {checkNaN} from '../helpers/util'
import get from '../get'

describe('get', () => {
  it('should be curried', () => {
    const date = new Date('2015-01-02 11:22:33.123')

    assert.equal(get('seconds')(date), get('seconds', date))
  })

  it('should return NaN for an invalid time unit', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const actual = get('foo', input)

    assert(checkNaN(actual))
  })

  it('should return the milliseconds', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const milliseconds = get('milliseconds', input)

    assert.equal(milliseconds, 123)
  })
  it('should return the seconds', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const seconds = get('seconds', input)

    assert.equal(seconds, 33)
  })

  it('should return the minutes', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const minutes = get('minutes', input)

    assert.equal(minutes, 22)
  })

  it('should return the hours', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const hours = get('hours', input)

    assert.equal(hours, 11)
  })

  it('should return the days', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const date = get('date', input)

    assert.equal(date, 2)
  })

  it('should return the day', () => {
    const input = new Date('2016-06-15 11:22:33.123')
    const date = get('day', input)

    assert.equal(date, 3)
  })

  it('should return the week for a monday', () => {
    const input = new Date('2015-03-02 09:08:05.023')
    const week = get('week', input)

    assert.equal(week, 10)
  })

  it('should return the week for a sunday', () => {
    const input = new Date('2015-03-8 11:22:33.123')
    const week = get('week', input)

    assert.equal(week, 10)
  })

  it('should return the month', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const month = get('month', input)

    assert.equal(month, 1)
  })

  it('should return the year', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const year = get('year', input)

    assert.equal(year, 2015)
  })

  it('should return timezoneOffset', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const timezoneOffset = get('timezoneOffset', input)

    assert.equal(timezoneOffset, input.getTimezoneOffset())
  })
})
