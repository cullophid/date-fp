import assert from 'assert'
import set from '../set'
import isValid from '../isValid'
import {checkDate} from '../helpers/util'

describe('set', () => {
  it('should return a new date', () => {
    const input = new Date('2015-01-01 11:22:33.333')
    const actual = set('milliseconds', 0, input)

    assert.notEqual(actual, input)
  })

  it('should be curried', () => {
    const date = new Date('2015-01-01 11:22:33.333')

    assert.deepEqual(set('seconds')(5)(date), set('seconds', 5, date))
  })

  it('should return an invalid date for an invalid time unit', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const actual = set('foo', 0, input)

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

  it('should not change the original date', () => {
    const input = new Date('2015-01-01 11:22:33.333')

    set('milliseconds', 0, input) // ?
    assert.equal(input.getTime(), new Date('2015-01-01 11:22:33.333').getTime())
  })

  it('should work for milliseconds', () => {
    const input = new Date('2015-01-01 11:22:33.333')
    const actual = set('milliseconds', 123, input)

    assert.equal(actual.getMilliseconds(), 123)
  })

  it('should work for seconds', () => {
    const input = new Date('2015-01-01 11:22:33.333')
    const actual = set('seconds', 12, input)

    assert.equal(actual.getSeconds(), 12)
  })

  it('should work for minutes', () => {
    const input = new Date('2015-01-01 11:22:33.333')
    const actual = set('minutes', 12, input)

    assert.equal(actual.getMinutes(), 12)
  })

  it('should work for hours', () => {
    const input = new Date('2015-01-01 11:22:33.333')
    const actual = set('hours', 12, input)

    assert.equal(actual.getHours(), 12)
  })

  it('should work for date', () => {
    const input = new Date('2015-01-01 11:22:33.333')
    const actual = set('date', 12, input)

    assert.equal(actual.getDate(), 12)
  })

  it('should return an invalid date if given an invalid date', () => {
    const input = new Date('2015-02-01 11:22:33.333')
    const actual = set('date', 30, input)

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

  it('should work for month', () => {
    const input = new Date('2015-01-01 11:22:33.333')
    const actual = set('month', 12, input)

    assert.equal(actual.getMonth() + 1, 12)
  })

  it('should return an invalid date if given an invalid month', () => {
    const input = new Date('2015-02-01 11:22:33.333')
    const actual = set('month', 13, input)

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

  it('should work for year', () => {
    const input = new Date('2015-01-01 11:22:33.333')
    const actual = set('year', 12, input)

    assert.equal(actual.getFullYear(), 12)
  })

})
