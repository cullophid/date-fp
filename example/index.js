import D from '../build/date-fp';
import curry from 'lodash.curry';

var compose = function (...args) {
    return function (result) {
        for (var i = args.length - 1; i > -1; i--) {
            result = args[i].call(this, result);
        }

        return result;
    };
};

const map = curry((f, xs) => {
    let _xs = [];
    for (let x of xs) {
        _xs.push(f(x))
    }
    return _xs;
});

const d = new Date('2015-01-01');
var nextDay = D.add('days', 1, d);

console.log(d);
console.log(nextDay);

// String -> Date
const addTwoDays = compose(D.add('days', 2), D.parse);
console.log('parsing a date from a string and adding two days to it:',
    addTwoDays('2015-01-01'));

// [String] -> String
const findEarliestYear = compose(D.get('year'), D.min, map(D.parse));
console.log('parse three dates, find the earliest and get the year:',
    findEarliestYear(['2015-01-01', '2014-01-01', '2013-01-01']));
