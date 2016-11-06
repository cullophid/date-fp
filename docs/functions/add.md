## add :: String -> Number -> Date -> Date

Returns a copy of the supplied date with the specified modification.
Returns an `Invalid Date` if the modification results in an invalid date.

```js
const date = new Date.UTC('2015-01-01 01:01:01.000');
D.add('milliseconds', 1, date); // 2015-01-01 01:01:01.1
D.add('seconds', 1, date); // 2015-01-01 01:01:02.0
D.add('minutes', 1, date); // 2015-01-01 01:02:01.0
D.add('hours', 1, date); // 2015-01-01 02:01:01.0
D.add('days', 1, date); // 2015-01-02 01:01:01.0
D.add('months', 1, date); // 2015-02-01 01:01:01.0
D.add('years', 1, date); // 2016-01-01 01:01:01.0

```
