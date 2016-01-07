## Key concepts
All functions in **date-fp** follow a set of functional programming principles.

### Generic Date objects
**date-fp** operates on normal JavaScript date objects. There are no wrapper objects and **date-fp** does not extend or mutate any native JavaScript objects. Among other things this means that you can still use normal comparison operators like `<` and `>`.

### Purity
All functions in **date-fp** are pure. For a function to be pure it must follow two basic rules.

1. Pure functions always produce the same output given the same input.
2. Pure functions have no side effects. This means that calling the function will not affect the world outside the function.

A consequence of this is that **date-fp** will never knowingly throw an error upon receiving invalid input 
but it may return an invalid Date object or `NaN`. Inspect **date-fp**'s documentation to find out which functions 
behave in this manner.

### Immutability
Dates in **date-fp** are never mutated. All operations that modify a date return a copy with the given changes and leave the original date object intact.

### Currying
All functions in **date-fp** use automatic currying, which allows for easy partial application. For more information on currying read: [Why Curry Helps](https://web.archive.org/web/20140714014530/http://hughfdjackson.com/javascript/why-curry-helps)

### Composition
Functions in **date-fp** take the data (usually a date object) as the last parameter. This, combined with currying, allows for easy function composition.

```js
const tomorrowAsString = compose(D.format('YYY-MM-DD'), D.add('days', 1));

tomorrowAsString(new Date('2015-01-01')); // '2015-01-02';
```
