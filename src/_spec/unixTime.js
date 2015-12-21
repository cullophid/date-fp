import assert from 'assert'
import unixTime from '../unixTime'
import {checkNaN} from '../helpers/util'

describe('unixTime', () => {

  it('should return NaN for invalid dates', () => {
    assert(checkNaN(unixTime(new Date('foo'))))
  })

  it('should return the time in seconds for valid dates', () => {
    assert.equal(unixTime(new Date('7 February, 1999')), 918345600)
  })
})
