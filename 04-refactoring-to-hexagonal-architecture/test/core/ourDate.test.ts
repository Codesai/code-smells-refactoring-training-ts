import {OurDate} from "../../src/core/OurDate";
import {ourDateFromString} from "../helper/OurDateFactory";

describe('OurDate', () => {

    it('is same date', () => {
        const ourDate = ourDateFromString("1789/01/24");
        const sameDay = ourDateFromString("2001/01/24");
        const notSameDay = ourDateFromString("1789/01/25");
        const notSameMonth = ourDateFromString("1789/02/25");

        expect(ourDate.isSameDay(sameDay)).toBeTruthy(); //"same"
        expect(ourDate.isSameDay(notSameDay)).toBeFalsy(); //"not same day"
        expect(ourDate.isSameDay(notSameMonth)).toBeFalsy(); //"not same month"
    });

});