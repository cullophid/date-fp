'use strict';
import D from './src';
import {any} from './src/helpers/util'
import isValid from './src/isValid'
console.log(any(isValid, [1, 2, 3]))
