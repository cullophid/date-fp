## get :: String -> Date -> Date

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
