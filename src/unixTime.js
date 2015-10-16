'use strict';
import curry from 'lodash.curry';
import isValid from './isValid';

const converters = {
    'milliseconds': date => date.getTime(),
    'seconds': date => date.getTime() / 1000
};

export default curry((unit, date) => {
    if (!converters.hasOwnProperty(unit)) {
        return new Error('Unit provided must be either seconds or milliseconds.');
    }
    return isValid(date) ? converters[unit](date) : new Error('Invalid date object provided.');
});