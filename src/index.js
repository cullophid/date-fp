'use strict';
import parse from './parse';
import get from './get';
import set from './set';
import add from './add';
import sub from './sub';

const clone = date => new Date(date.getTime());

export default {
  parse,
  clone,
  get,
  set,
  add,
  sub
};
