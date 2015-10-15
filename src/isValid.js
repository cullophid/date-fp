'use strict';
import curry from 'lodash.curry';

export default curry((date) => {
    if(Object.prototype.toString.call(date) !== "[object Date]") return false;
    let unixTime = date.getTime();
    return unixTime === unixTime;
});
