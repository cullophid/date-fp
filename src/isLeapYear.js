'use strict';
import curry from 'lodash.curry';
import isValid from './isValid';

export default curry((date) => {
    return isValid(date) ? new Date(date.getFullYear(), 1, 29).getMonth() === 1 :
        new Error('Invalid date object provided.');
});