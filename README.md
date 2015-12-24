# date-fp

[![Circle CI](https://circleci.com/gh/cullophid/date-fp.svg?style=svg)](https://circleci.com/gh/cullophid/date-fp)
[![npm version](https://badge.fury.io/js/date-fp.svg)](https://badge.fury.io/js/date-fp)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cullophid/date-fp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

**date-fp** is a utility library for working with JavaScript dates.

## Motivation
There are several excellent JavaScript libraries for managing dates in JavaScript but they are generally built to be used in the object-oriented programming paradigm. This makes them cumbersome to include in a functional context.

*If you are not familiar with functional programming in JavaScript read [Professor Frisby's Mostly Adequate Guide to  Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/)*

*Also check out [Ramda.js](http://ramdajs.com/0.17/index.html) (A great library for functional programming with JavaScript)*

## Key concepts
All functions in **date-fp** follow a set of functional programming principles.

### Generic Date objects
**date-fp** operates on normal JavaScript date objects. There are no wrapper objects and **date-fp** does not extend or mutate any native JavaScript objects. Among other things this means that you can still use normal comparison operators like `<` and `>`.

### Purity
All functions in **date-fp** are pure. For a function to be pure it must follow two basic rules.

1. Pure functions always produce the same output given the same input.
2. Pure functions have no side effects. This means that calling the function will not affect the world outside the function.

A consequence of this is that **date-fp** will never knowingly throw an error upon receiving invalid input (but it will return an invalid Date object).

### Immutability
Dates in **date-fp** are never mutated. All operations that modify a date return a copy with the given changes and leave the original date object intact.

### Currying
All functions in **date-fp** use automatic currying, which allows for easy partial application. For more information on currying read: [Why Curry Helps](https://web.archive.org/web/20140714014530/http://hughfdjackson.com/javascript/why-curry-helps)

### Composition
Functions in **date-fp** take the data (usually a date object) as the last parameter. This, combined with currying, allows for easy function composition.

```js
const tomorrowAsString = compose(D.format('YYY-MM-DD'), D.add('days', 1));

tomorrowAsString(new Date('2015-01-01')); // '2015-01-02';
```

## API

### parse :: String -> Date

Returns a new date from the given datestring.

```js
const date = D.parse('2015-01-01') // Thu Jan 01 2015 00:00:00 GMT+0000 (GMT)
```

### clone :: Date -> Date

Returns a copy of the given date.

```js
const date = D.clone(new Date('2015-01-01')); // Thu Jan 01 2015 00:00:00 GMT+0000 (GMT)
```

### isValid :: Date -> Boolean

Verifies if a specific Javascript date object is valid.

```js
var d1 = new Date('foo'); // Invalid Date
D.isValid(d1); // false

var d1 = new Date('04-09-2014'); // Wed Apr 09 2014 00:00:00 GMT+0000 (GMT)
D.isValid(d1); // true
```

### get :: String -> Date -> Date

Returns the chosen portion of a date. Returns an `Invalid Date` if the provided unit of time is not valid.

```js
const date = new Date('2015-01-02 11:22:33.444')
D.get('milliseconds', date); // 444
D.get('seconds', date); // 33
D.get('minutes', date); // 22
D.get('hours', date); // 11
D.get('date', date); // 2
D.get('month', date); // 1
D.get('year', date); // 2015

```

### isLeapYear :: Date -> Boolean

Verifies if the year of the date object supplied is a leap year. Returns `false` if
the date object is invalid.

```js
D.isLeapYear(new Date('2015-01-01') // false
D.isLeapYear(new Date('2004-01-01') // true
```

### convertTo :: String -> Date -> Number

Returns the time since the Unix epoch, in the specified unit (milliseconds, seconds, minutes, hours, days),
of the supplied Javascript date object.
Returns `NaN` if the unit of time or Javascript date object is not valid.

```js
const date = new Date('2015-10-16T00:00:00+00:00')
D.convertTo('milliseconds', date) // 1444953600000
D.convertTo('seconds', date) // 1444953600
D.convertTo('minutes', date) // 24082560
D.convertTo('hours', date) // 401376
D.convertTo('days', date) // 16724
```

### unixTime :: Date -> Number

Returns the time since the Unix epoch in seconds of the supplied Javascript date object
Returns `NaN` if the Javascript date object is not valid.

```js
const date = new Date('2015-10-16T00:00:00+00:00')
D.unixTime(date) // 1444996800
```

### set :: String -> Number -> Date -> Date

Returns a copy of the supplied date with the specified modification.
Returns an `Invalid Date` if the modification results in an invalid date.

```js
const date = new Date();
D.set('milliseconds', 123, date);
D.set('seconds', 34, date);
D.set('minutes', 22, date);
D.set('hours', 13, date);
D.set('days', 23, date);
D.set('months', 12, date);
D.set('years', 2001, date);
```

### add :: String -> Number -> Date -> Date

Returns a copy of the supplied date with the specified modification.
Returns an `Invalid Date` if the modification results in an invalid date.

```js
const date = new Date();
D.add('milliseconds', 123, date);
D.add('seconds', 34, date);
D.add('minutes', 22, date);
D.add('hours', 13, date);
D.add('days', 23, date);
D.add('months', 12, date);
D.add('years', 2001, date);

```

### sub :: String -> Number -> Date -> Date

Returns a copy of the supplied date with the specified modification.
Returns an `Invalid Date` if the modification results in an invalid date.

```js
const date = new Date();
D.sub('milliseconds', 123, date);
D.sub('seconds', 34, date);
D.sub('minutes', 22, date);
D.sub('hours', 13, date);
D.sub('date', 23, date);
D.sub('month', 12, date);
D.sub('year', 2001, date);

```

### equals :: Date -> Date -> Boolean

Uses value equality to determine if the two supplied dates are the same.
Returns `false` if any of the date objects are invalid.

```js
const date = new Date('2015-04-09');
D.equals(date, new Date('2015-04-09')); // true
D.equals(date, new Date('2014-01-01')); //false
```

### diff :: String -> Date -> Date -> Number

Returns the difference between two dates.
Returns `NaN` if given an invalid date unit.

```js
const date1 = new Date('2014-02-01 11:12:13.123');
D.diff('milliseconds', date1, new Date('2014-02-01 11:12:13.223')); // 100
D.diff('seconds', date1, new Date('2014-02-01 11:12:16.123')); // 3
D.diff('minutes', date1, new Date('2014-02-01 11:8:13.123')); // -4
D.diff('hours', date1, new Date('2014-02-01 22:12:13.123')); // 11
D.diff('days', date1, new Date('2014-02-05 11:12:13.123')); // 4
D.diff('months', date1, new Date('2014-04-01 11:12:13.123')); // 2
D.diff('years', date1, new Date('2015-04-01 11:12:13.123')); // 1
```

### min :: [Date] -> Date

Takes an array of dates and returns the oldest one. Ignores invalid Javascript date objects and returns
an `Invalid Date` if no valid date objects are provided.

```js
const date1 = new Date('2015-01-01 11:22:33.333');
const date2 = new Date('2014-04-09 01:22:33.333');
const invalidDate = new Date('foo');

D.min([date1, date2]); // date2
D.min([date1, date2, invalidDate]); // date2
D.min([invalidDate]); // Error
```

### max :: [Date] -> Date

Takes an array of dates and returns the latest one. Ignores invalid Javascript date objects and returns
an `Invalid Date` if no valid date objects are provided.

```js
const date1 = new Date('2015-01-01 11:22:33.333');
const date2 = new Date('2014-04-09 01:22:33.333');
const invalidDate = new Date('foo');

D.max([date1, date2]); // date1
D.max([date1, date2, invalidDate]); // date1
D.max([invalidDate]); // Error
```

### format :: String -> Date -> String

Returns a string representation of a date on the specified format. Returns the string 'Invalid Date' if given an invalid date.

```js
const date = new Date('2015-01-02 03:04:05.123');
D.format('YYYY-MM-DD HH:mm:ss', date); // '2015-01-02 03:04:05'
D.format('DD/MM/YY', date); // '02/01/15'
D.format('MMMM D YYYY', date); // 'January 2 2015'
```

`format` support the following string tokens:

|part                 | Token |      Output         |
|----------------:|:-----:|---------------------|
|year             | YYYY  | 1971... 2015        |
|                 | YY    | 01... 99            |
|month            | MMMM  | January... December |
|                 | MMM   | Jan... Dec          |
|                 | MM    | 01... 12            |
|                 | M     | 1... 12             |
|date             | DD    | 01... 31            |
|                 | D     | 1... 31             |
|weekday          | dddd  | Sunday... Saturday  |
|                 | ddd   | Sun... Sat          |
|                 | dd    | Su... Sa            |
|                 | dd    | Su... Sa            |
|                 | d     | 0... 6              |
|hours            | HH    | 00... 23            |
|                 | H     | 0... 23             |
|                 | hh    | 01... 12            |
|                 | h     | 1... 12             |
|                 | h     | 1... 12             |
|AM/PM            | A     | AM,PM               |
|                 | a     | am,pm               |
|minutes          | mm    | 01... 59            |
|                 | m     | 1... 59             |
|seconds          | ss    | 01... 59            |
|                 | s     | 1... 59             |
|Fractional Second| SSS   | 001... 999          |
|                 | SS    | 01... 99            |
|                 | S     | 1... 9              |
|Quarter of Year  | Q     | 1... 4              |

## Credit
Thanks to John-David Dalton for [`lodash.curry`](https://www.npmjs.com/package/lodash.curry)
Thanks to the team behind [Ramda.js](https://github.com/ramda/ramda) and [moment.js](https://github.com/moment/moment) for inspiration.

## Contributing
Yes please!

Something to note is that we  automatically release to NPM on every successful commit and we also strictly follow SemVer so please update the version number in `package.json` appropriately when submitting a Pull Request.
