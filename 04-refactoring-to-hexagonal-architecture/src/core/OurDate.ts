export class OurDate {

    private date: Date;

    constructor(date: Date) {
        this.date = date;
    }

    public getDay(): number {
        return this.date.getDate();
    }

    public getMonth(): number {
        return 1 + this.date.getMonth();
    }

    public isSameDay(anotherDate: OurDate): boolean {
        return anotherDate.getDay() == this.getDay()
            && anotherDate.getMonth() == this.getMonth();
    }

}
