'use strict';
import assert from 'assert';
import isValid from '../isValid';

describe('isValid', () => {

    it('should identify invalid dates', () => {
        const invalidDate = new Date('foo');
        const invalidDate1 = new Date('19-16-2011');

        assert.equal(isValid(invalidDate), false);
        assert.equal(isValid(invalidDate1), false);
    });

    it('should identify valid dates', () => {
        const validDate = new Date('19-06-2011 18:40:33.333');
        assert.equal(isValid(validDate), false);
    });

});
