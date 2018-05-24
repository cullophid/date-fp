import assert from "assert";
import of from "../of";
import sub from "../sub";
import fromTime from "../fromTime";
import isValid from "../isValid";
import { checkDate } from "../helpers/util";
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

describe("sub", () => {
  it("should return a new date with the correct time difference", () => {
    const date = of([2015, 0, 5]);
    const actual = sub("days", 2, date);

    assert.notEqual(date, actual, "should return a new date");
    assert.equal(
      date.getTime(),
      of([2015, 0, 5]).getTime(),
      "should not change the original date"
    );
    assert.equal(
      actual.getTime(),
      of([2015, 0, 3]).getTime(),
      "should return a date 2 days after the input date"
    );
  });

  it("should be curried", () => {
    const date = of([2015, 0, 4]);

    assert.deepEqual(sub("days")(2)(date), sub("days", 2, date));
  });

  it("should work for milliseconds", () => {
    const actual = sub("milliseconds", 1, fromTime(2));

    assert.equal(1, actual.getTime());
  });

  it("should work for seconds", () => {
    const actual = sub("seconds", 1, fromTime(2 * SECOND));

    assert.equal(SECOND, actual.getTime());
  });

  it("should work for minutes", () => {
    const actual = sub("minutes", 1, fromTime(2 * MINUTE));

    assert.equal(MINUTE, actual.getTime());
  });

  it("should work for hours", () => {
    const actual = sub("hours", 1, fromTime(2 * HOUR));

    assert.equal(HOUR, actual.getTime());
  });

  it("should work for days", () => {
    const actual = sub("days", 1, fromTime(2 * DAY));

    assert.equal(DAY, actual.getTime());
  });

  it("should work for weeks", () => {
    const actual = sub("weeks", 1, fromTime(2 * WEEK));

    assert.equal(WEEK, actual.getTime());
  });

  it("should work for months", () => {
    const actual = sub("months", 1, of([2015, 2, 15]));

    assert.equal(1, actual.getUTCMonth());
  });

  it("should return an invalid date if the result is invalid", () => {
    const actual = sub("months", 1, of([2015, 2, 30]));

    assert(checkDate(actual));
    assert(!isValid(actual));
  });

  it("should return an invalid date if the unit of time is invalid", () => {
    const actual = sub("foo", 1, of([2015, 2, 30]));

    assert(checkDate(actual));
    assert(!isValid(actual));
  });

  it("should work for year", () => {
    const actual = sub("years", 1, of([1972, 5, 15]));

    assert.equal(1971, actual.getUTCFullYear());
  });

  it("should work for cases that cross year", () => {
    const actual = sub("months", 17, of([1973, 4, 15]));

    assert.equal(of([1971, 11, 15]).getUTCMonth(), actual.getMonth());
  });
});
