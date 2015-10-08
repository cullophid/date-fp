'use strict';
import curry from 'lodash.curry';

const ZEROS = '0000';

export const lastN = curry((n, str) => str.substring(str.length - n, str.length));
export const firstN = curry((n, str) => str.substring(0, n));
export const fill = curry((digits, n) => lastN(digits, ZEROS + n));
