import assert from 'assert'
import equals from '../equals'
import of from '../of'

describe('equals', () => {

  const date = of([2011, 5, 19, 18, 40, 33, 333])
  const invalidDate = new Date('foo')

  it('should return false when given two invalid dates', () => {
    assert.equal(equals(invalidDate, new Date('bar')), false)
  })

  it('should return an false for a date and an invalid date', () => {
    assert.equal(equals(date, new Date('bar')), false)
  })

  it('should return an false for an invalid date and an invalid date', () => {
    assert.equal(equals(new Date('bar'), date), false)
  })

  it('should return false for different dates', () => {
    assert.strictEqual(equals(date, of([2013, 0, 1])), false)
  })

  it('should return true for the same date', () => {
    assert.strictEqual(equals(date, of([2011, 5, 19, 18, 40, 33, 333])), true)
  })
})
