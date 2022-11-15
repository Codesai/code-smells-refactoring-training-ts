import {OurDate} from "../src/OurDate";

describe('OurDate', () => {

  it('getters', () => {
    const ourDate = new OurDate("1789/01/24");

    expect(1).toEqual(ourDate.getMonth())
    expect(24).toEqual(ourDate.getDay())
  });

  it('is same date', () => {
    const ourDate = new OurDate("1789/01/24");
    const sameDay = new OurDate("2001/01/24");
    const notSameDay = new OurDate("1789/01/25");
    const notSameMonth = new OurDate("1789/02/25");

    expect(ourDate.isSameDay(sameDay)).toBeTruthy(); //"same"
    expect(ourDate.isSameDay(notSameDay)).toBeFalsy(); //"not same day"
    expect(ourDate.isSameDay(notSameMonth)).toBeFalsy(); //"not same month"
  });

});