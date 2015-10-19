'use strict';
import assert from 'assert';
import fromEpoch from '../fromEpoch';

describe('fromEpoch', () => {

    const date = new Date('December 28, 1973');

    it('should be curried', function () {
        assert.equal(fromEpoch('milliseconds')(date), fromEpoch('milliseconds', date));
    });

    it('should return an error for invalid units', () => {
        assert.equal(fromEpoch('foo', date).message, 'Unit provided must be one of milliseconds,seconds,minutes,hours,days.');
    });

    it('should return an error for invalid dates', () => {
        assert.equal(fromEpoch('seconds', new Date('foo')).message, 'Invalid date object provided.');
    });

    it('should return the time in milliseconds for valid dates', () => {
        assert.equal(fromEpoch('milliseconds', date), 125884800000);
    });

    it('should return the time in seconds for valid dates', () => {
        assert.equal(fromEpoch('seconds', new Date('7 February, 1999')), 918345600);
    });

    it('should return the time in minutes for valid dates', () => {
        assert.equal(fromEpoch('minutes', date), 2098080);
    });

    it('should return the time in hours for valid dates', () => {
        assert.equal(fromEpoch('hours', date), 34968);
    });

    it('should return the time in days for valid dates', () => {
        assert.equal(fromEpoch('days', date), 1457);
    });

});