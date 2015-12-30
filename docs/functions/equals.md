## equals :: Date -> Date -> Boolean

Uses value equality to determine if the two supplied dates are the same.
Returns `false` if any of the date objects are invalid.

```js
const date = new Date('2015-04-09');
D.equals(date, new Date('2015-04-09')); // true
D.equals(date, new Date('2014-01-01')); //false
```
