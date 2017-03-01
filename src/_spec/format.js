import assert from 'assert'
import format from '../format'
import of from '../of'

const date = of([2015, 2, 4, 9, 8, 5, 23])

describe('format', () => {
  it('complex date string', () => {
    assert.equal(format('YYYY-MM-DD HH:mm:ss.SSS', of([2015, 2, 4, 22, 8, 5, 23])), '2015-03-04 22:08:05.023')
  })

  it('should be curried', () => {
    const str = '2015-01-02'

    assert.equal(format(str)(date), format(str, date))
  })

  it('should return "invalid date" if given an invalid date', () => {
    assert.equal(format('YYYY-MM-DD')(new Date('invalid')), 'Invalid Date')
  })

  it('YYYY', () => {
    assert.equal(format('YYYY', date), '2015')
  })

  it('YY', () => {
    assert.equal(format('YY', date), '15')
  })

  it('MMMM', () => {
    assert.equal(format('MMMM', date), 'March')
  })

  it('MMM', () => {
    assert.equal(format('MMM', date), 'Mar')
  })

  it('MM', () => {
    assert.equal(format('MM', date), '03')
  })

  it('M', () => {
    assert.equal(format('M', date), '3')
  })
  it('ww', () => {
    assert.equal(format('ww', of([2015, 1, 10])), '07')
  })
  it('w', () => {
    assert.equal(format('w', of([2015, 1, 10])), '7')
  })

  it('DD', () => {
    assert.equal(format('DD', date), '04')
  })

  it('D', () => {
    assert.equal(format('D', date), '4')
  })

  it('dddd', () => {
    assert.equal(format('dddd', date), 'Wednesday')
  })

  it('ddd', () => {
    assert.equal(format('ddd', date), 'Wed')
  })

  it('dd', () => {
    assert.equal(format('dd', date), 'We')
  })

  it('d', () => {
    assert.equal(format('d', date), '3')
  })

  it('HH', () => {
    assert.equal(format('HH', date), '09')
  })

  it('H', () => {
    assert.equal(format('H', date), '9')
  })

  it('hh', () => {
    assert.equal(format('hh', of([2015, 2, 4, 22, 8, 5, 23])), '10')
    assert.equal(format('hh', of([2015, 2, 4, 12, 1, 1])), '12');
  })

  it('h', () => {
    assert.equal(format('h', date), '9')
    assert.equal(format('h', of([2015, 2, 4, 12, 1, 1])), '12');
  })

  it('mm', () => {
    assert.equal(format('mm', date), '08')
  })

  it('m', () => {
    assert.equal(format('m', date), '8')
  })

  it('ss', () => {
    assert.equal(format('ss', date), '05')
  })

  it('s', () => {
    assert.equal(format('s', date), '5')
  })

  it('A', () => {
    assert.equal(format('A', of([2015, 2, 4, 22, 8, 5, 23])), 'PM')
  })

  it('A', () => {
    assert.equal(format('A', of([2015, 2, 4, 11, 8, 5, 23])), 'AM')
  })

  it('a', () => {
    assert.equal(format('a', of([2015, 2, 4, 22, 8, 5, 23])), 'pm')
  })

  it('a', () => {
    assert.equal(format('a', of([2015, 2, 4, 11, 8, 5, 23])), 'am')
  })

  it('SSS', () => {
    assert.equal(format('SSS', date), '023')
  })

  it('SS', () => {
    assert.equal(format('SS', date), '02')
  })

  it('S', () => {
    assert.equal(format('S', date), '0')
  })

  it('Q', () => {
    assert.equal(format('Q', date), '1')
  })

  it('Q', () => {
    assert.equal(format('Q', of([2015, 10, 15])), '4')
  })
})
