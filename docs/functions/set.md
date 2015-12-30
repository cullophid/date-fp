## set
`String -> Number -> Date -> Date`

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
