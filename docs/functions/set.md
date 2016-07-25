## set :: String -> Number -> Date -> Date

Returns a copy of the supplied date with the specified modification.
Returns an `Invalid Date` if the modification results in an invalid date.

```js
const date = new Date('2001-01-01 01:01:01.0');
D.set('milliseconds', 123, date); // 2001-01-01 01:01:01.123
D.set('seconds', 34, date); // 2001-01-01 01:01:34.0
D.set('minutes', 22, date); // 2001-01-01 01:22:01.0
D.set('hours', 13, date); // 2001-01-01 13:01:01.0
D.set('date', 23, date); // 2001-01-23 01:01:01.0
D.set('month', 12, date); // 2001-12-01 01:01:01.0
D.set('year', 2016, date); // 2016-01-01 01:01:01.0
```
