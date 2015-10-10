'use strict';
import parse from './src/parse';
import get from './src/get';
import diff from './src/diff';
import format from './src/format';
import set from './src/set';
import add from './src/add';
import sub from './src/sub';

const clone = date => new Date(date.getTime());

export default {
  add,
  clone,
  diff,
  format,
  get,
  parse,
  set,
  sub
};
