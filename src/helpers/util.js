'use strict';
import curry from 'lodash.curry';
import isValid from '../isValid';

const ZEROS = '00000000';

export const lastN = curry((n, str) => str.substring(str.length - n, str.length));
export const firstN = curry((n, str) => str.substring(0, n));
export const fill = curry((digits, n) => lastN(digits, ZEROS + n));

export const find = curry((f, array) => {
    let validDates = array.filter(isValid);
    return validDates.length === 0 ? new Error('No valid dates provided.') :
        new Date(validDates.reduce((memo, date) => f(memo, date)));
});
