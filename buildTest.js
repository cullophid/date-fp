'use strict';
var assert = require('assert');
var D = require('./');
describe('test build', function () {
  it('should have all the functions awailable', function () {
    assert.deepEqual(Object.keys(D), ['add', 'clone', 'diff', 'format', 'get', 'parse', 'set', 'sub']);
    Object.keys(D).forEach(function (key) {
      assert.equal(typeof D[key], 'function', key + 'should be a function');
    })
  });
});
