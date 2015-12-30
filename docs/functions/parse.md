## parse :: String -> String -> Date

Returns a new date by parsing the datestring based on the given format.

```js
const date = D.parse('YYYY-MM-DD HH:mm:ss', '2015-01-01 12:13:14') // Thu Jan 01 2015 12:13:14 GMT+0000 (GMT)
const date = D.parse('MMM Do, YYYY', 'January 1st, 2015') // Thu Jan 01 2015 00:00:00 GMT+0000 (GMT)
```

Parse supports the following tokens:

|part             | Token |      Output         |
|----------------:|:-----:|---------------------|
|year             | YYYY  | 1971... 2015        |
|                 | YY    | 01... 99            |
|                 | Y     | 1... 99             |
|month            | MMMM  | January... December |
|                 | MMM   | Jan... Dec          |
|                 | MM    | 01... 12            |
|                 | M     | 1... 12             |
|date             | DD    | 01... 31            |
|                 | D     | 1... 31             |
|hours            | HH    | 00... 23            |
|                 | H     | 0... 23             |
|                 | hh    | 01... 12            |
|                 | h     | 1... 12             |
|                 | h     | 1... 12             |
|minutes          | mm    | 01... 59            |
|                 | m     | 1... 59             |
|seconds          | ss    | 01... 59            |
|                 | s     | 1... 59             |
|Fractional Second| SSS   | 001... 999          |
|                 | SS    | 01... 99            |
|                 | S     | 1... 9              |
