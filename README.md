# date-fp
Library for manipulating dates in JavaScript based on the principles of functional programming.

## Immutability
 Dates in date-fp are newer mutated. All operations that modifies a date returns a copy with the given changes, and leaves the original date object intact.

## Currying
All functions in date-fp uses automatic currying.

## API

### parse
`String -> Date`

returns a new date from the given datestring
```js
const date = D.parse('2015-01-01')
// -> Thu Jan 01 2015 00:00:00 GMT+0000 (GMT)
```

### clone
`Date -> Date`

returns a copy of the given date
```js
const date = D.clone(new Date('2015-01-01'));
// -> Thu Jan 01 2015 00:00:00 GMT+0000 (GMT)
```

### get
`String -> Date -> Date`
returns the chosen portion of a date

```js
const date = new Date('2015-01-02 11:22:33.444')
D.get('milliseconds', date);
//-> 444
D.get('seconds', date);
//-> 33
D.get('minutes', date);
//-> 22
D.get('hours', date);
//-> 11
D.get('date', date);
//-> 2
D.get('month', date);
//-> 1
D.get('year', date);
//-> 2015

```

### set
Returns a clone of the supplied date with the specified modification.
Returns an Error if the modification results in an invalid date.
`String -> Number -> Date -> Date`

```js
const date = new Date();
D.set('milliseconds', 123, date);
D.set('seconds', 34, date);
D.set('minutes', 22, date);
D.set('hours', 13, date);
D.set('date', 23, date);
D.set('month', 12, date);
D.set('year', 2001, date);
```

### add
Returns a clone of the supplied date with the specified modification.
Returns an Error if the modification results in an invalid date.
`String -> Number -> Date -> Date`

```js
const date = new Date();
D.add('milliseconds', 123, date);
D.add('seconds', 34, date);
D.add('minutes', 22, date);
D.add('hours', 13, date);
D.add('date', 23, date);
D.add('month', 12, date);
D.add('year', 2001, date);

```

### sub
Returns a clone of the supplied date with the specified modification.
Returns an Error if the modification results in an invalid date.
`String -> Number -> Date -> Date`

```js
const date = new Date();
D.sub('milliseconds', 123, date);
D.sub('seconds', 34, date);
D.sub('minutes', 22, date);
D.sub('hours', 13, date);
D.sub('date', 23, date);
D.sub('month', 12, date);
D.sub('year', 2001, date);

```


## Credit
Thanks to John-David Dalton for lodash.currying
Thanks to the team behind Ramda.js and moment.js for inspiration.
