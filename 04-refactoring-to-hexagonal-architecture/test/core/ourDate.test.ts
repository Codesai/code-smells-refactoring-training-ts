import {OurDate} from "../../src/core/OurDate";
import {date} from "../helper/OurDateFactory";

describe('OurDate', () => {

    it('is same date', () => {
        const ourDate = date("1789/01/24");
        const sameDay = date("2001/01/24");
        const notSameDay = date("1789/01/25");
        const notSameMonth = date("1789/02/25");

        expect(ourDate.isSameDay(sameDay)).toBeTruthy(); //"same"
        expect(ourDate.isSameDay(notSameDay)).toBeFalsy(); //"not same day"
        expect(ourDate.isSameDay(notSameMonth)).toBeFalsy(); //"not same month"
    });

});