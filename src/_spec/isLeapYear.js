import assert from 'assert'
import isLeapYear from '../isLeapYear'
import of from '../of'

describe('isLeapYear', () => {

  it('should return false for an invalid date', () => {
    assert.equal(isLeapYear(of([2015, 32, 33])), false)
  })

  it('should return false for non leap years', () => {
    assert.strictEqual(isLeapYear(of([2015, 5, 1])), false)
  })

  it('should return true years divisible by 4', () => {
    assert.strictEqual(isLeapYear(of([1996, 5, 1])), true)
  })

  it('should return false for years divisible by 100', () => {
    assert.strictEqual(isLeapYear(of([1900, 5, 1])), false)
  })

  it('should return true for years divisible by 400', () => {
    assert.strictEqual(isLeapYear(of([2000, 5, 1])), true)
  })
})
