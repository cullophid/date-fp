import assert from 'assert'
import isValid from '../isValid'

describe('isValid', () => {
  it('should return false for non date objects', () => {
    assert.strictEqual(isValid('date'), false)
  })

  it('should identify invalid dates', () => {
    const invalidDate = new Date('foo')
    const invalidDate1 = new Date('19-16-2011')

    assert.strictEqual(isValid(invalidDate), false)
    assert.strictEqual(isValid(invalidDate1), false)
  })

  it('should identify valid dates', () => {
    const validDate = new Date('2011-06-19 18:40:33.333')

    assert.strictEqual(isValid(validDate), true)
  })

})
