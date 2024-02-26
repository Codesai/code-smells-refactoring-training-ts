import {Employee} from "../src/Employee";
import {DateRepresentation} from "../src/DateRepresentation";
import {OurDate} from "../src/OurDate";

describe('Employee', () => {

    it('birthday', () => {
        const employee = new Employee("foo", "bar", "1990/01/31", "a@b.c", DateRepresentation.toSlashDate("1990/01/31"));

        expect(employee.isBirthday(DateRepresentation.toSlashDate("2008/01/30"))).toBeFalsy();
        expect(employee.isBirthday(DateRepresentation.toSlashDate("2008/01/31"))).toBeTruthy();
    });

});

