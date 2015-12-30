## unixTime :: Date -> Number

Returns the time since the Unix epoch in seconds of the supplied Javascript date object
Returns `NaN` if the Javascript date object is not valid.

```js
const date = new Date('2015-10-16T00:00:00+00:00')
D.unixTime(date) // 1444996800
```
