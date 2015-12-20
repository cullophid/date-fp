import assert from 'assert'
import unixTime from '../unixTime'

describe('unixTime', () => {
  it('should return an NaN for invalid dates', () => {
    assert.equal(isNaN(unixTime(new Date('foo'))), true)
  })

  it('should return the time in seconds for valid dates', () => {
    assert.equal(unixTime(new Date('7 February, 1999')), 918345600)
  })

})
