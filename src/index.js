'use strict';
import parse from './parse';
import get from './get';
import diff from './diff';
import format from './format';
import set from './set';
import add from './add';
import sub from './sub';
import min from './min';
import isValid from './isValid';

const clone = date => new Date(date.getTime());

export default {
  add,
  clone,
  diff,
  format,
  get,
  parse,
  set,
  sub,
  min,
  isValid
};
