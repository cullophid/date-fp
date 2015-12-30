import assert from 'assert'
import convertTo from '../convertTo'
import {checkNaN} from '../helpers/util'

describe('convertTo', () => {
  const date = new Date(Date.UTC(1973, 11, 28))

  it('should be curried', () => {
    assert.equal(convertTo('milliseconds')(date), convertTo('milliseconds', date))
  })

  it('should return NaN for invalid units', () => {
    assert(checkNaN(convertTo('foo', date)))
  })

  it('should return NaN for invalid dates', () => {
    assert(checkNaN(convertTo('seconds', new Date('foo'))))
  })

  it('should return the time in milliseconds for valid dates', () => {
    assert.equal(convertTo('milliseconds', date), 125884800000)
  })

  it('should return the time in seconds for valid dates', () => {
    assert.equal(convertTo('seconds', new Date(Date.UTC(1999, 1, 7))), 918345600)
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
