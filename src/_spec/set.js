import assert from 'assert'
import set from '../set'
import isValid from '../isValid'
import {checkDate} from '../helpers/util'
import of from '../of'

describe('set', () => {
  it('should return a new date', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])
    const actual = set('milliseconds', 0, input)

    assert.notEqual(actual, input)
  })

  it('should be curried', () => {
    const date = of([2015, 0, 1, 11, 22, 33, 333])

    assert.deepEqual(set('seconds')(5)(date), set('seconds', 5, date))
  })

  it('should return an invalid date for an invalid time unit', () => {
    const input = of([2015, 0, 2, 11, 22, 33, 123])
    const actual = set('foo', 0, input)

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

  it('should not change the original date', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])

    set('milliseconds', 0, input) // ?
    assert.equal(input.getTime(), of([2015, 0, 1, 11, 22, 33, 333]).getTime())
  })

  it('should work for milliseconds', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])
    const actual = set('milliseconds', 123, input)

    assert.equal(actual.getUTCMilliseconds(), 123)
  })

  it('should work for seconds', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])
    const actual = set('seconds', 12, input)

    assert.equal(actual.getUTCSeconds(), 12)
  })

  it('should work for minutes', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])
    const actual = set('minutes', 12, input)

    assert.equal(actual.getUTCMinutes(), 12)
  })

  it('should work for hours', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])
    const actual = set('hours', 12, input)

    assert.equal(actual.getUTCHours(), 12)
  })

  it('should work for date', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])
    const actual = set('date', 12, input)

    assert.equal(actual.getUTCDate(), 12)
  })

  it('should return an invalid date if given an invalid date', () => {
    const input = of([2015, 1, 1, 11, 22, 33, 333])
    const actual = set('date', 30, input)

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

  it('should work for week', () => {
    const input = new Date('2017-02-14 11:22:33.333')
    const actual = set('week', 2, input)
    assert.equal(actual.getMonth() + 1, 1)
    assert.equal(actual.getDay(), 2)
    assert.equal(actual.getDate(), 10)
  })

  it('should work for month', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])
    const actual = set('month', 12, input)

    assert.equal(actual.getUTCMonth() + 1, 12)
  })

  it('should return an invalid date if given an invalid month', () => {
    const input = of([2015, 1, 1, 11, 22, 33, 333])
    const actual = set('month', 13, input)

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

  it('should work for year', () => {
    const input = of([2015, 0, 1, 11, 22, 33, 333])
    const actual = set('year', 12, input)

    assert.equal(actual.getUTCFullYear(), 12)
  })

})
