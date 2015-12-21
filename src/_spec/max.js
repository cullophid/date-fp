import assert from 'assert'
import max from '../max'
import isValid from '../isValid'

describe('max', () => {
  const maxDate1 = new Date('2014-01-01 11:22:33.333')
  const maxDate2 = new Date('2015-04-09 01:22:33.333')
  const date1 = new Date('2013-06-11 12:00:00.000')
  const date2 = new Date('2011-06-19 18:40:00.000')
  const invalidDate = new Date('foo')
  const invalidDate1 = new Date('bar')

  it('should return the oldest date', () => {
    assert.equal(max([maxDate1, date1]).toString(), maxDate1.toString())
    assert.equal(max([maxDate1, date1, date2]).toString(), maxDate1.toString())
    assert.equal(max([maxDate1, maxDate2, date1, date2]).toString(), maxDate2.toString())
  })

  it('should ignore invalid dates', () => {
    assert.equal(max([maxDate1, invalidDate]).toString(), maxDate1.toString())
    assert.equal(max([invalidDate, maxDate1, maxDate2, date1, invalidDate1]).toString(), maxDate2.toString())
  })

  it('should return an error when passed only invalid dates', () => {
    assert.equal(isValid(max([])), false)
    assert.equal(isValid(max([invalidDate, invalidDate1])), false)
  })

})
