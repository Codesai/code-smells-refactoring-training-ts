import {OurDate} from "../../src/core/OurDate";

export function date(dateAsString: string): OurDate {
    const [year, month, day] = dateAsString.split("/");
    if([year, month, day].some((value) => value === undefined)) {
        throw new Error("wrong date format in test");
    }
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return new OurDate(date);
}
