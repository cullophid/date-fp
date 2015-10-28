'use strict';
import curry from 'lodash.curry';
import {check} from './helpers/util';
import {DATE_UNITS} from './helpers/constants';

const convertTo = (unit, date) => Math.round(date.getTime() / DATE_UNITS[unit]);

export default curry((unit, date) => {
    if (!DATE_UNITS.hasOwnProperty(unit)) {
        return new Error('Unit provided must be one of ' + Object.keys(DATE_UNITS) + '.');
    }
    return check([date], convertTo, unit, date);
});