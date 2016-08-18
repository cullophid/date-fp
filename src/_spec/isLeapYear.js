import assert from 'assert'
import isLeapYear from '../isLeapYear'

describe('isLeapYear', () => {

  it('should return false for an invalid date', () => {
    assert.equal(isLeapYear(new Date('2015-33-33')), false)
  })

  it('should return false for non leap years', () => {
    assert.strictEqual(isLeapYear(new Date('2015-06-01')), false)
  })

  it('should return true years divisible by 4', () => {
    assert.strictEqual(isLeapYear(new Date('1996-06-01')), true)
  })

  it('should return false for years divisible by 100', () => {
    assert.strictEqual(isLeapYear(new Date('1900-06-01')), false)
  })

  it('should return true for years divisible by 400', () => {
    assert.strictEqual(isLeapYear(new Date('2000-06-01')), true)
  })
})
