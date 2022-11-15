import {Employee} from "../../src/core/Employee";
import {ourDateFromString} from "../helper/OurDateFactory";

describe('Employee', () => {

  it('birthday', () => {
    const employee = new Employee("foo", "bar", ourDateFromString("1990/01/31"), "a@b.c");

    expect(employee.isBirthday(ourDateFromString("2008/01/30"))).toBeFalsy();
    expect(employee.isBirthday(ourDateFromString("2008/01/31"))).toBeTruthy();
  });

});