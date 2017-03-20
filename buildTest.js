'use strict';
var assert = require('assert');
var D = require('./');

var FUNCTIONS = [
  'of',
  'fromTime',
  'add',
  'clone',
  'equals',
  'diff',
  'format',
  'get',
  'isLeapYear',
  'parse',
  'set',
  'sub',
  'min',
  'max',
  'isValid',
  'convertTo',
  'unixTime'
]

describe('test build', () => {
  it('should have all the functions available', () => {
    assert.deepEqual(Object.keys(D), FUNCTIONS);
    Object.keys(D).forEach(key => {
      assert.equal(typeof D[key], 'function', key + 'should be a function');
    })
  });
});
