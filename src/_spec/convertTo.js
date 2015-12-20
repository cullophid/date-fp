import assert from 'assert'
import convertTo from '../convertTo'
import isValid from '../isValid'

describe('convertTo', () => {

  const date = new Date('December 28, 1973')

  it('should be curried', () => {
    assert.equal(convertTo('milliseconds')(date), convertTo('milliseconds', date))
  })

  it('should return an error for invalid units', () => {
    assert.equal(isNaN(convertTo('foo', date)), true)
  })

  it('should return an error for invalid dates', () => {
    assert.equal(isNaN(convertTo('seconds', new Date('foo'))), true)
  })

  it('should return the time in milliseconds for valid dates', () => {
    assert.equal(convertTo('milliseconds', date), 125884800000)
  })

  it('should return the time in seconds for valid dates', () => {
    assert.equal(convertTo('seconds', new Date('7 February, 1999')), 918345600)
  })

  it('should return the time in minutes for valid dates', () => {
    assert.equal(convertTo('minutes', date), 2098080)
  })

  it('should return the time in hours for valid dates', () => {
    assert.equal(convertTo('hours', date), 34968)
  })

  it('should return the time in days for valid dates', () => {
    assert.equal(convertTo('days', date), 1457)
  })

})
