import assert from 'assert'
import isValid from '../isValid'
import of from '../of'

describe('isValid', () => {
  it('should return false for non date objects', () => {
    assert.strictEqual(isValid('date'), false)
  })

  it('should identify invalid dates', () => {
    const invalidDate = new Date('foo')
    const invalidDate1 = of([2011, 15, 19])

    assert.strictEqual(isValid(invalidDate), false)
    assert.strictEqual(isValid(invalidDate1), false)
  })

  it('should identify valid dates', () => {
    const validDate = of([2011, 5, 19, 18, 40, 33, 333])

    assert.strictEqual(isValid(validDate), true)
  })

})
