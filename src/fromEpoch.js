'use strict';
import curry from 'lodash.curry';
import isValid from './isValid';
import {DATE_UNITS} from './helpers/constants';

export default curry((unit, date) => {
    if (!DATE_UNITS.hasOwnProperty(unit)) {
        return new Error('Unit provided must be one of ' + Object.keys(DATE_UNITS) + '.');
    }
    return isValid(date) ? Math.round(date.getTime() / DATE_UNITS[unit]) :
        new Error('Invalid date object provided.');
});