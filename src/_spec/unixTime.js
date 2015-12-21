import assert from 'assert'
import unixTime from '../unixTime'

describe('unixTime', () => {

  it('should return an error for invalid dates', () => {
    assert.equal(unixTime(new Date('foo')).message, 'Invalid date object(s) provided.')
  })

  it('should return the time in seconds for valid dates', () => {
    assert.equal(unixTime(new Date('7 February, 1999')), 918345600)
  })
})
