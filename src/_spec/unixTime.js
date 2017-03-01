import assert from 'assert'
import unixTime from '../unixTime'
import {checkNaN} from '../helpers/util'
import of from '../of'

describe('unixTime', () => {

  it('should return NaN for invalid dates', () => {
    assert(checkNaN(unixTime(new Date('foo'))))
  })

  it('should return the time in seconds for valid dates', () => {
    assert.equal(unixTime(of([1999, 1, 7])), 918345600)
  })
})
