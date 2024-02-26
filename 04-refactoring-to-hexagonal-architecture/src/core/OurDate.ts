export class OurDate {

    private _date: Date;

    constructor(date: Date) {
        this._date = date;
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
