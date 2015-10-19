'use strict';
var assert = require('assert');
var D = require('./');
describe('test build', function () {
  it('should have all the functions available', function () {
    assert.deepEqual(Object.keys(D), [
      'add', 'clone', 'diff', 'format', 'get', 'parse',
      'set', 'sub', 'min', 'max', 'isValid', 'fromEpoch', 'unixTime'
    ]);
    Object.keys(D).forEach(function (key) {
      assert.equal(typeof D[key], 'function', key + 'should be a function');
    })
  });
});
