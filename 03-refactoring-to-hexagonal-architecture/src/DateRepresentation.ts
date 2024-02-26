import {OurDate} from "./OurDate";

export class DateRepresentation {
    static toSlashDate(stringDate: string) {
        const [year, month, day] = stringDate.split("/");
        return new OurDate(new Date(Number(year), Number(month) - 1, Number(day)));
    }

    static toUnderscoreDate(stringDate: string) {
        const [year, month, day] = stringDate.split("-");
        return new OurDate(new Date(Number(year), Number(month) - 1, Number(day)));
    }

    static toArrobaDate(stringDate: string) {
        const [year, month, day] = stringDate.split("@");
        return new OurDate(new Date(Number(year), Number(month) - 1, Number(day)));
    }
}