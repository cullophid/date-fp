import assert from 'assert'
import parse from '../parse'
import format from '../format'
import isValid from '../isValid'

describe('parse', () => {
  it('should parse YYYY-MM-DD', () => {
    const datestring = '2010-01-02'
    const pattern = 'YYYY-MM-DD'
    const actual = parse(pattern, datestring).toString()
    const expected = new Date(2010, 0, 2).toString()

    assert.equal(actual, expected)
  })

  it('should parse DD/MM/YYYY', () => {
    const datestring = '01/12/2014'
    const pattern = 'DD/MM/YYYY'
    const actual = parse(pattern, datestring).toString()
    const expected = new Date(2014, 11, 1).toString()

    assert.equal(actual, expected)
  })
  it('should parse DD/MM/YY', () => {
    const datestring = '01/12/14'
    const pattern = 'DD/MM/YY'
    const actual = parse(pattern, datestring).toString()
    const expected = new Date(2014, 11, 1).toString()

    assert.equal(actual, expected)
  })

  it('should parse MMMM Do, YYYY', () => {
    const datestring = 'July 5th, 2013'
    const pattern = 'MMMM Do, YYYY'
    const actual = parse(pattern, datestring).toString()
    const expected = new Date('2013-07-05 00:00:00').toString()

    assert.equal(actual, expected)
  })

  it('should parse HH:mm:ss.SSS', () => {
    const datestring = '12:13:14.156'
    const pattern = 'HH:mm:ss.SSS'
    const actual = format('YYYY-MM-DD HH:mm:ss.SSS', parse(pattern, datestring))
    const d = new Date()

    d.setHours(12)
    d.setMinutes(13)
    d.setSeconds(14)
    d.setMilliseconds(156)
    const expected = format('YYYY-MM-DD HH:mm:ss.SSS', d)

    assert.equal(actual, expected)
  })


  it('should return an invalid date if given a date before 100-01-01', () => {
    const datestring = '0099-01-01'
    const pattern = 'YYYY-MM-DD'
    const actual = parse(pattern, datestring).toString()

    assert.equal(isValid(actual), false)
  })

  it('should return Invalid Date if given bad month', () => {
    const datestring = '2015-13-01'
    const pattern = 'YYYY-MM-DD'
    const actual = parse(pattern, datestring)

    assert.equal(isValid(actual), false)
  })

  it('should return Invalid Date if given bad date', () => {
    const datestring = '2015-02-29'
    const pattern = 'YYYY-MM-DD'
    const actual = parse(pattern, datestring)

    assert.equal(isValid(actual), false)
  })
  it('should return Invalid Date if given bad hour', () => {
    const datestring = '2015-11-01 24:00:00'
    const pattern = 'YYYY-MM-DD HH:mm:ss'
    const actual = parse(pattern, datestring)

    assert.equal(isValid(actual), false)
  })
  it('should return Invalid Date if given bad minutes', () => {
    const datestring = '2015-11-01 22:60:00'
    const pattern = 'YYYY-MM-DD HH:mm:ss'
    const actual = parse(pattern, datestring)

    assert.equal(isValid(actual), false)
  })
  it('should return Invalid Date if given bad seconds', () => {
    const datestring = '2015-11-01 22:00:60'
    const pattern = 'YYYY-MM-DD HH:mm:ss'
    const actual = parse(pattern, datestring)

    assert.equal(isValid(actual), false)
  })
})
