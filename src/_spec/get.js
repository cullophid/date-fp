import assert from 'assert'
import get from '../get'

describe('get', () => {
  it('should be curried', () => {
    const date = new Date('2015-01-02 11:22:33.123')

    assert.equal(get('seconds')(date), get('seconds', date))
  })

  it('should return an error for an invalid time unit', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const errorMsg = get('foo', input).message

    assert.equal(errorMsg,
        'Invalid Date property, must be one of milliseconds,seconds,minutes,hours,date,month,year.')
  })

  it('should return the milliseconds', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const milliseconds = get('milliseconds', input)

    assert.equal(milliseconds, 123)
  })
  it('should return the seconds', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const seconds = get('seconds', input)

    assert.equal(seconds, 33)
  })

  it('should return the minutes', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const minutes = get('minutes', input)

    assert.equal(minutes, 22)
  })

  it('should return the hours', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const hours = get('hours', input)

    assert.equal(hours, 11)
  })

  it('should return the days', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const date = get('date', input)

    assert.equal(date, 2)
  })

  it('should return the month', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const month = get('month', input)

    assert.equal(month, 1)
  })

  it('should return the year', () => {
    const input = new Date('2015-01-02 11:22:33.123')
    const year = get('year', input)

    assert.equal(year, 2015)
  })
})
