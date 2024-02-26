import {OurDate} from "./OurDate";

export class Employee {

    private readonly _birthDate: OurDate;
    private readonly _firstName: string;
    private readonly _email: string;

    constructor(firstName: string, birthDate: OurDate, email: string) {
        this._firstName = firstName;
        this._birthDate = birthDate;
        this._email = email;
    }

    isBirthday(today: OurDate): boolean {
        return today.isSameDay(this._birthDate);
    }

    getEmail(): string {
        return this._email;
    }

    getFirstName(): string {
        return this._firstName;
    }
}