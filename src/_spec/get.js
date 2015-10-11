'use strict';
import assert from 'assert';
import get from '../get';

describe('get', function () {
  it('should be curried', function () {
    const date = new Date('2015-01-02 11:22:33.123');
    assert.equal(get('seconds')(date), get('seconds', date));
  });

  it('should return the milliseconds', function () {
    const input = new Date('2015-01-02 11:22:33.123');
    const milliseconds = get('milliseconds', input);
    assert.equal(milliseconds, 123);
  });
  it('should return the seconds', function () {
    const input = new Date('2015-01-02 11:22:33.123');
    const seconds = get('seconds', input);
    assert.equal(seconds, 33);
  });

  it('should return the minutes', function () {
    const input = new Date('2015-01-02 11:22:33.123');
    const minutes = get('minutes', input);
    assert.equal(minutes, 22);
  });

  it('should return the hours', function () {
    const input = new Date('2015-01-02 11:22:33.123');
    const hours = get('hours', input);
    assert.equal(hours, 11);
  });

  it('should return the days', function () {
    const input = new Date('2015-01-02 11:22:33.123');
    const date = get('date', input);
    assert.equal(date, 2);
  });

  it('should return the month', function () {
    const input = new Date('2015-01-02 11:22:33.123');
    const month = get('month', input);
    assert.equal(month, 1);
  });

  it('should return the year', function () {
    const input = new Date('2015-01-02 11:22:33.123');
    const year = get('year', input);
    assert.equal(year, 2015);
  });
});
