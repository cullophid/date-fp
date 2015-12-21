import assert from 'assert'
import min from '../min'
import isValid from '../isValid'

describe('min', () => {

  const minDate1 = new Date('2015-01-01 11:22:33.333')
  const minDate2 = new Date('2014-04-09 01:22:33.333')
  const date1 = new Date('2015-06-11 12:00:00.000')
  const date2 = new Date('2015-11-11 09:00:00.000')
  const invalidDate = new Date('foo')
  const invalidDate1 = new Date('bar')

  it('should return the oldest date', () => {
    assert.equal(min([minDate1, date1]).toString(), minDate1.toString())
    assert.equal(min([minDate1, date1, date2]).toString(), minDate1.toString())
    assert.equal(min([minDate1, minDate2, date1, date2]).toString(), minDate2.toString())
  })

  it('should ignore invalid dates', () => {
    assert.equal(min([minDate1, invalidDate]).toString(), minDate1.toString())
    assert.equal(min([invalidDate, minDate1, minDate2, date1, invalidDate1]).toString(), minDate2.toString())
  })

  it('should return an error when passed only invalid dates', () => {
    assert.equal(isValid(min([])), false)
  })

})
