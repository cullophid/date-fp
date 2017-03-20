import assert from 'assert'
import max from '../max'
import {checkDate} from '../helpers/util'
import isValid from '../isValid'
import of from '../of'

describe('max', () => {

  const maxDate1 = of([2014, 0, 1, 11, 22, 33, 333])
  const maxDate2 = of([2915, 3, 9, 1, 22, 33, 333])
  const date1 = of([2013, 5, 11, 12, 0, 0, 0])
  const date2 = of([2011, 5, 19, 18, 40, 0, 0])
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

  it('should return an invalid date when passed no dates', () => {
    const actual = max([])

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

  it('should return an invalid date when passed only invalid dates', () => {
    const actual = max([invalidDate, invalidDate1])

    assert(checkDate(actual))
    assert.equal(isValid(actual), false)
  })

})
