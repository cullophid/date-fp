## format :: String -> Date -> String

Returns a string representation of a date on the specified format. Returns the string 'Invalid Date' if given an invalid date.

```js
const date = new Date('2015-01-02 03:04:05.123');
D.format('YYYY-MM-DD HH:mm:ss', date); // '2015-01-02 03:04:05'
D.format('DD/MM/YY', date); // '02/01/15'
D.format('MMMM D YYYY', date); // 'January 2 2015'
```

`format` support the following string tokens:

|part                 | Token |      Output         |
|----------------:|:-----:|---------------------|
|year             | YYYY  | 1971... 2015        |
|                 | YY    | 01... 99            |
|month            | MMMM  | January... December |
|                 | MMM   | Jan... Dec          |
|                 | MM    | 01... 12            |
|                 | M     | 1... 12             |
|week             | ww    | 01... 53            |
|                 | w     | 1... 53             |
|date             | DD    | 01... 31            |
|                 | D     | 1... 31             |
|weekday          | dddd  | Sunday... Saturday  |
|                 | ddd   | Sun... Sat          |
|                 | dd    | Su... Sa            |
|                 | dd    | Su... Sa            |
|                 | d     | 0... 6              |
|hours            | HH    | 00... 23            |
|                 | H     | 0... 23             |
|                 | hh    | 01... 12            |
|                 | h     | 1... 12             |
|                 | h     | 1... 12             |
|AM/PM            | A     | AM,PM               |
|                 | a     | am,pm               |
|minutes          | mm    | 01... 59            |
|                 | m     | 1... 59             |
|seconds          | ss    | 01... 59            |
|                 | s     | 1... 59             |
|Fractional Second| SSS   | 001... 999          |
|                 | SS    | 01... 99            |
|                 | S     | 1... 9              |
|Quarter of Year  | Q     | 1... 4              |
