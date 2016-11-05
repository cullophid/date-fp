import assert from 'assert'
import min from '../min'
import isValid from '../isValid'
import {checkDate} from '../helpers/util'
import of from '../of'

describe('min', () => {

  const minDate1 = of([2015, 0, 1, 11, 22, 33, 333])
  const minDate2 = of([2014, 3, 9, 1, 22, 33, 333])
  const date1 = of([2015, 5, 11, 12, 0, 0, 0])
  const date2 = of([2015, 10, 11, 9, 0, 0, 0])
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

  it('should return an invalid date when passed no dates', () => {
    const actual = min([])

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

  it('should return an invalid date when passed only invalid dates', () => {
    const actual = min([invalidDate, invalidDate1])

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

})
