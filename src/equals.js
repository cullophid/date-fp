'use strict';
import curry from 'lodash.curry';
import isValid from './isValid';

export default curry((d1, d2) => {
    if(!isValid(d1) || !isValid(d2)) return new Error('The two valid dates must be supplied.');
    return d1.getTime() === d2.getTime();
});