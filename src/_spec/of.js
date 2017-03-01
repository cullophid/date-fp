import assert from 'assert'
import of from '../of'

describe('of', () => {
  it('should return a new utc date', () => {
    assert.equal(of([2016, 0, 1]).toISOString(),'2016-01-01T00:00:00.000Z')
  })
  it('should reject invalid year', () => {
    assert.equal(of([-10, 0, 1]).toString(),'Invalid Date')
  })
  it('should reject invalid month', () => {
    assert.equal(of([2015, 12, 1]).toString(),'Invalid Date')
  })
  it('should reject invalid day', () => {
    assert.equal(of([2015, 0, 32]).toString(),'Invalid Date')
  })
  it('should reject invalid hour', () => {
    assert.equal(of([2015, 0, 1, 60]).toString(),'Invalid Date')
  })
  it('should reject invalid minute', () => {
    assert.equal(of([2015, 0, 1, 0, 60]).toString(),'Invalid Date')
  })
  it('should reject invalid second', () => {
    assert.equal(of([2015, 0, 1, 0, 0, 60]).toString(),'Invalid Date')
  })
  it('should reject invalid milies', () => {
    assert.equal(of([2015, 0, 1, 0, 0, 0, 1000]).toString(),'Invalid Date')
  })
})
