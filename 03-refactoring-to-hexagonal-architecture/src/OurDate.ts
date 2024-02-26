export class OurDate {

    private date: Date;

    constructor(date: Date) {
        this.date = date
    }

    public isSameDay(anotherDate: OurDate): boolean {
        return anotherDate.getDay() == this.getDay()
            && anotherDate.getMonth() == this.getMonth();
    }

    private getDay(): number {
        return this.date.getDate();
    }

    private getMonth(): number {
        return 1 + this.date.getMonth();
    }

}
