'use strict';
import curry from 'lodash.curry';
import {find} from './helpers/util';

export default curry((array) => find(Math.max, array));
