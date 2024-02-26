import {OurDate} from "../src/OurDate";
import {DateRepresentation} from "../src/DateRepresentation";

describe('OurDate', () => {

    it('is same date', () => {
        const ourDate = DateRepresentation.toSlashDate("1789/01/24");
        const sameDay = DateRepresentation.toSlashDate("2001/01/24");
        const notSameDay = DateRepresentation.toSlashDate("1789/01/25");
        const notSameMonth = DateRepresentation.toSlashDate("1789/02/25");

        expect(ourDate.isSameDay(sameDay)).toBeTruthy(); //"same"
        expect(ourDate.isSameDay(notSameDay)).toBeFalsy(); //"not same day"
        expect(ourDate.isSameDay(notSameMonth)).toBeFalsy(); //"not same month"
    });

});