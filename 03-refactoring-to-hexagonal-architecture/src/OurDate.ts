import {DateFormatError} from "./DateFormatError";

export class OurDate {

    private readonly _date: Date;

    constructor(yyyyMMdd: string) {
        const [year, month, day] = yyyyMMdd.split("/");
        if([year, month, day].some((value) => value === undefined)) {
            throw new DateFormatError();
        }
        this._date = new Date(Number(year), Number(month) - 1, Number(day));
    }

    isSameDay(anotherDate: OurDate): boolean {
        return anotherDate.getDay() == this.getDay()
            && anotherDate.getMonth() == this.getMonth();
    }

    private getDay(): number {
        return this._date.getDate();
    }

    private getMonth(): number {
        return 1 + this._date.getMonth();
    }
}
