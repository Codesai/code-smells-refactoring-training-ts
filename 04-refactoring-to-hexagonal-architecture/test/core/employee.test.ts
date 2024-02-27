import {Employee} from "../../src/core/Employee";
import {date} from "../helper/OurDateFactory";

describe('Employees', () => {

    it('have same birthday', () => {
        const employee = new Employee("foo", date("1990/01/31"), "a@b.c");

        expect(employee.isBirthday(date("2008/01/30"))).toBeFalsy();
        expect(employee.isBirthday(date("2008/01/31"))).toBeTruthy();
    });
});