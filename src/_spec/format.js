'use strict';
import assert from 'assert';
import format from '../format';

const date = new Date('2015-03-04 09:08:05.023');
describe('format', function () {
  it('complex date string', function () {
    assert.equal(format('YYYY-MM-DD HH:mm:ss.SSS', new Date('2015-03-04 22:08:05.023')), '2015-03-04 22:08:05.023');
  });

  it('should be curried', function () {
    const str = '2015-01-02';
    assert.equal(format(str)(date), format(str, date));
  });

  it('YYYY', function () {
    assert.equal(format('YYYY', date), '2015');
  });

  it('YY', function () {
    assert.equal(format('YY', date), '15');
  });

  it('MMMM', function () {
    assert.equal(format('MMMM', date), 'March');
  });

  it('MMM', function () {
    assert.equal(format('MMM', date), 'Mar');
  });

  it('MM', function () {
    assert.equal(format('MM', date), '03');
  });

  it('M', function () {
    assert.equal(format('M', date), '3');
  });

  it('DD', function () {
    assert.equal(format('DD', date), '04');
  });

  it('D', function () {
    assert.equal(format('D', date), '4');
  });


  it('dddd', function () {
    assert.equal(format('dddd', date), 'Wednesday');
  });

  it('ddd', function () {
    assert.equal(format('ddd', date), 'Wed');
  });

  it('dd', function () {
    assert.equal(format('dd', date), 'We');
  });

  it('d', function () {
    assert.equal(format('d', date), '3');
  });

  it('HH', function () {
    assert.equal(format('HH', date), '09');
  });

  it('H', function () {
    assert.equal(format('H', date), '9');
  });

  it('hh', function () {
    assert.equal(format('hh', new Date('2015-03-04 22:08:05.023')), '10');
  });

  it('h', function () {
    assert.equal(format('h', date), '9');
  });

  it('mm', function () {
    assert.equal(format('mm', date), '08');
  });

  it('m', function () {
    assert.equal(format('m', date), '8');
  });

  it('ss', function () {
    assert.equal(format('ss', date), '05');
  });

  it('s', function () {
    assert.equal(format('s', date), '5');
  });

  it('A', function () {
    assert.equal(format('A', new Date('2015-03-04 22:08:05.023')), 'PM');
  });

  it('A', function () {
    assert.equal(format('A', new Date('2015-03-04 11:08:05.023')), 'AM');
  });

  it('a', function () {
    assert.equal(format('a', new Date('2015-03-04 22:08:05.023')), 'pm');
  });

  it('a', function () {
    assert.equal(format('a', new Date('2015-03-04 11:08:05.023')), 'am');
  });

  it('SSS', function () {
    assert.equal(format('SSS', date), '023');
  });

  it('SS', function () {
    assert.equal(format('SS', date), '02');
  });

  it('S', function () {
    assert.equal(format('S', date), '0');
  });



});
