import {OurDate} from "../../core/OurDate";

export class DateRepresentation {
    private dateAsString: string;

    constructor(dateAsString: string) {
        this.dateAsString = dateAsString;
    }

    public toDate(): OurDate {
        try {
            const [year, month, day] = this.dateAsString.split("/");
            const date = new Date(Number(year), Number(month) - 1, Number(day));
            return new OurDate(date);
        } catch (e) {
            throw new Error("ParseException");
        }
    }
}