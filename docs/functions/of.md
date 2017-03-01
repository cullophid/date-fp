## of :: [Number] -> Date
 Creates a new Date from the given dateParts. Similar to [Date.UTC()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC), but returns a date object. Month start at 0 to comply with JavaScript standard.

```js
const date = D.of([1970, 0, 1]) // 1970-01-01 00:00:00.0Z
const date = D.of([1970, 1, 1, 13, 30, 10, 120]) // 1970-02-01 13:30:10.120Z
const date = D.of([2017]) // 2017-01-01 00:00:00.0Z

```
