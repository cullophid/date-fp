'use strict';
import assert from 'assert';
import {set} from '../set';

describe('set', function () {
  it('should return a new date', function () {
      const input = new Date('2015-01-01 11:22:33.333 11:22:33.333');
      const actual = set('milliseconds', 0, input);
      assert.notEqual(actual, input);
  });

  it('should not change the original date', function () {
      const input = new Date('2015-01-01 11:22:33.333');
      set('milliseconds', 0, input);
      assert.equal(input.getTime(), new Date('2015-01-01 11:22:33.333').getTime());
  });

  it('should work for milliseconds', function () {
      const input = new Date('2015-01-01 11:22:33.333');
      const actual = set('milliseconds', 123, input);
      assert.equal(actual.getMilliseconds(), 123);
  });

  it('should work for seconds', function () {
      const input = new Date('2015-01-01 11:22:33.333');
      const actual = set('seconds', 12, input);
      assert.equal(actual.getSeconds(), 12);
  });

  it('should work for minutes', function () {
      const input = new Date('2015-01-01 11:22:33.333');
      const actual = set('minutes', 12, input);
      assert.equal(actual.getMinutes(), 12);
  });

  it('should work for hours', function () {
      const input = new Date('2015-01-01 11:22:33.333');
      const actual = set('hours', 12, input);
      assert.equal(actual.getHours(), 12);
  });

  it('should work for date', function () {
      const input = new Date('2015-01-01 11:22:33.333');
      const actual = set('date', 12, input);
      assert.equal(actual.getDate(), 12);
  });

  it('should return an error if given an invalid date', function () {
      const input = new Date('2015-02-01 11:22:33.333');
      const actual = set('date', 30, input);
      assert.equal(actual.toString(), 'Error: Invalid value for date');
  });

  it('should work for month', function () {
      const input = new Date('2015-01-01 11:22:33.333');
      const actual = set('month', 12, input);
      assert.equal(actual.getMonth() + 1, 12);
  });

  it('should return an error if given an invalid month', function () {
      const input = new Date('2015-02-01 11:22:33.333');
      const actual = set('month', 13, input);
      assert.equal(actual.toString(), 'Error: Invalid value for month');
  });

  it('should work for year', function () {
      const input = new Date('2015-01-01 11:22:33.333');
      const actual = set('year', 12, input);
      assert.equal(actual.getFullYear(), 12);
  });

});
