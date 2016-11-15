## sub :: String -> Number -> Date -> Date

Returns a copy of the supplied date with the specified modification.
Returns an `Invalid Date` if the modification results in an invalid date.

```js
const date = new Date('2001-01-01 01:01:01.1');
D.sub('milliseconds', 1, date); // 2001-01-01 01:01:01.0
D.sub('seconds', 1, date); // 2001-01-01 01:01:00.1
D.sub('minutes', 1, date); // 2001-01-01 01:00:01.1
D.sub('hours', 1, date); // 2001-01-01 00:01:01.1
D.sub('days', 1, date); // 2000-12-31 01:01:01.1
D.sub('month', 1, date); // 2000-12-01 01:01:01.1
D.sub('year', 1, date); // 2000-01-01 01:01:01.1

```
