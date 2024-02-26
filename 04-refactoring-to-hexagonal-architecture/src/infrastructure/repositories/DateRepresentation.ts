import {OurDate} from "../../core/OurDate";

export class DateRepresentation {
    private _dateAsString: string;

    constructor(dateAsString: string) {
        this._dateAsString = dateAsString;
    }

    toDate(): OurDate {
        const [year, month, day] = this._dateAsString.split("/");
        if([year, month, day].some((value) => value === undefined)) {
            throw new DateFormatError();
        }
        const date = new Date(Number(year), Number(month) - 1, Number(day));
        return new OurDate(date);
    }
}

export class DateFormatError extends Error {

    constructor() {
        super("Incorrect date format");
    }
}