## add
`String -> Number -> Date -> Date`

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
