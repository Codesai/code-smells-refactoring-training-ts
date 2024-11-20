import {OurDate} from "../src/OurDate";
import {DateFormatError} from "../src/DateFormatError";

describe('OurDate', () => {

  it('compares dates to check if they are the same', () => {
    const ourDate = new OurDate("1789/01/24");
    const sameDay = new OurDate("2001/01/24");
    const notSameDay = new OurDate("1789/01/25");
    const notSameMonth = new OurDate("1789/02/24");

    expect(ourDate.isSameDay(sameDay)).toBeTruthy(); //"same"
    expect(ourDate.isSameDay(notSameDay)).toBeFalsy(); //"not same day"
    expect(ourDate.isSameDay(notSameMonth)).toBeFalsy(); //"not same month"
  });

  it('rejects wrongly formatted dates', () => {
    expect(() => new OurDate("2001-01-4")).toThrow(DateFormatError);
  });
});