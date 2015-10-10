'use strict';
import assert from 'assert';
import diff from '../diff';
const date1 = new Date('2013-01-02 11:22:33.123');
describe('diff', function () {
  it('should be curried', function () {
    const date2 = new Date('2013-01-02 11:22:33.223');
    assert.equal(diff('milliseconds')(date1)(date2), diff('milliseconds', date1, date2));
  });

  it('should return an error if given an invalid unit', function () {
    const date2 = new Date('2013-01-02 11:22:33.223');
    assert.deepEqual(diff('invalid', date1, date2), new Error('Invalid date unit'));
    assert.equal(diff('invalid', date1, date2).message, 'Invalid date unit');
  });

  it('milliseconds', function () {
    const date2 = new Date('2013-01-02 11:22:33.223');
    assert.equal(diff('milliseconds', date1, date2), 100);
  });

  it('seconds', function () {
    const date2 = new Date('2013-01-02 11:22:42.223');
    assert.equal(diff('seconds', date1, date2), 9);
  });

  it('minutes', function () {
    const date2 = new Date('2013-01-02 11:44:33.223');
    assert.equal(diff('minutes', date1, date2), 22);
  });

  it('hours', function () {
    const date2 = new Date('2013-01-02 22:22:33.223');
    assert.equal(diff('hours', date1, date2), 11);
  });

  it('months', function () {
    const date2 = new Date('2014-02-02 22:22:33.223');
    assert.equal(diff('months', date1, date2), 13);
  });

  it('years', function () {
    const date2 = new Date('2015-01-02 22:22:33.223');
    assert.equal(diff('years', date1, date2), 2);
  });
});
