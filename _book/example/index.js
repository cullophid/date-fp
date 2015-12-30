import D from '../build/date-fp';
import curry from 'lodash.curry';

var compose = function (...args) {
    return (result) => {
        for (let i = args.length - 1; i > -1; i--) {
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
    findEarliestYear(['2015-01-01', '1 January, 2014', 'Jan 1, 2013']));

// [String] -> Number
const parseAndDiffDates = compose((xs) => D.diff('days', ...xs), map(D.parse));
console.log('parse two dates, find the difference between them:',
    parseAndDiffDates(['2013-01-01', '2014-01-01']));

// [Date] -> String
const findLatestAddTwoFormat = compose(D.format('DD/MM/YY'), D.add('months', 2), D.max);
console.log('find latest date, add two months and format result:',
    findLatestAddTwoFormat([new Date('2013-01-01'), new Date('2014-01-01')]));