'use strict';
const str = 'YYYY-MM-DD'
const years = /Y+/
const months = /M+/
const days = /D+/
console.log(str.match(years));
console.log(str.match(months));
console.log(str.match(days));
