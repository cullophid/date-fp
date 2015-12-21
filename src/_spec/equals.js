import assert from 'assert'
import equals from '../equals'

describe('equals', () => {

  const date = new Date('2011-06-19 18:40:33.333')
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
    assert.strictEqual(equals(date, new Date('2013-01-01')), false)
  })

  it('should return true for the same date', () => {
    assert.strictEqual(equals(date, new Date('2011-06-19 18:40:33.333')), true)
  })
})
