import assert from 'assert'
import isValid from '../isValid'
import fromTime from '../fromTime'

describe('fromTime', () => {
  it('should return a date given number of millies since epoch', () => {
    assert.equal(isValid(fromTime(0)), true)
    assert.equal(fromTime(0).getTime(), 0)
  })

  it('should return an invalid date given a non integer', () => {
    assert.equal(fromTime('no').toString(), 'Invalid Date')
  })
})
