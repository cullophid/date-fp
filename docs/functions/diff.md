## diff

`String -> Date -> Date -> Number`

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
