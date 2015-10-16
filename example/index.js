import D from '../build/date-fp';

const d = new Date('2015-01-01');
var nextDay = D.add('days', 1, d);

console.log(d);
console.log(nextDay);
