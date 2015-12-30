## min :: [Date] -> Date

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
