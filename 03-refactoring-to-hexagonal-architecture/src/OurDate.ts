export class OurDate {

    private date: Date;

    constructor(yyyyMMdd: string) {
        const [year, month, day] = yyyyMMdd.split("/");
        this.date = new Date(Number(year), Number(month) - 1, Number(day));
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
