'use strict';
import assert from 'assert';
import unixTime from '../unixTime';

describe('unixTime', () => {

    const date = new Date('December 28, 1973');

    it('should be curried', function () {
        assert.equal(unixTime('milliseconds')(date), unixTime('milliseconds', date));
    });

    it('should return an error for invalid units', () => {
        assert.equal(unixTime('foo', date).message, 'Unit provided must be either seconds or milliseconds.');
    });

    it('should return an error for invalid dates', () => {
        assert.equal(unixTime('seconds', new Date('foo')).message, 'Invalid date object provided.');
    });

    it('should return the time in milliseconds for valid dates', () => {
        assert.equal(unixTime('milliseconds', date), 125884800000);
    });

    it('should return the time in seconds for valid dates', () => {
        assert.equal(unixTime('seconds', new Date('7 February, 1999')), 918345600);
    });

});