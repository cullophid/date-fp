import assert from 'assert'
import add from '../add'
import isValid from '../isValid'
import {checkDate} from '../helpers/util'
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

describe('add', () => {
  it('should return a new date with the correct time difference', () => {
    const date = new Date('2015-01-01')
    const actual = add('days', 2, date)

    assert.notEqual(date, actual, 'should return a new date')
    assert.equal(date.toString(), new Date('2015-01-01').toString(), 'should not change the original date')
    assert.equal(
      actual.toString(),
      new Date('2015-01-03').toString(),
      'should return a date 2 days after the input date')
  })

  it('should be curried', () => {
    const date = new Date('2015-01-01')

    assert.deepEqual(add('days')(2)(date), add('days', 2, date))
  })

  it('should work for milliseconds', () => {
    const actual = add('milliseconds', 1, new Date(0))

    assert.equal(1, actual.getTime())
  })

  it('should work for seconds', () => {
    const actual = add('seconds', 1, new Date(0))

    assert.equal(SECOND, actual.getTime())
  })

  it('should work for minutes', () => {
    const actual = add('minutes', 1, new Date(0))

    assert.equal(MINUTE, actual.getTime())
  })

  it('should work for hours', () => {
    const actual = add('hours', 1, new Date(0))

    assert.equal(HOUR, actual.getTime())
  })

  it('should work for days', () => {
    const actual = add('days', 1, new Date(0))

    assert.equal(DAY, actual.getTime())
  })

  it('should work for months', () => {
    const actual = add('months', 1, new Date('2015-01-15'))

    assert.equal(1, actual.getMonth())
  })

  it('should return an invalid date if the result is invalid', () => {
    const actual = add('months', 1, new Date('2015-01-30'))

    assert(checkDate(actual))
    assert(!isValid(actual))
  })

  it('should return an invalid date if the unit of time is invalid', () => {
    const actual = add('foo', 1, new Date('2015-01-30'))

    assert(checkDate(actual))
    assert(!isValid(actual))
  })

  it('should work for year', () => {
    const actual = add('years', 1, new Date('1970-06-15'))

    assert.equal(1971, actual.getFullYear())
  })
})
