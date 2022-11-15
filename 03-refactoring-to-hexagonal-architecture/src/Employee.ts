import {OurDate} from "./OurDate";

export class Employee {

    private readonly birthDate: OurDate;
    private readonly lastName: string;
    private readonly firstName: string;
    private readonly email: string;

    constructor(firstName: string, lastName: string, birthDate: string,
                email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new OurDate(birthDate);
        this.email = email;
    }

    public isBirthday(today: OurDate): boolean {
        return today.isSameDay(this.birthDate);
    }

    public getEmail(): string {
        return this.email;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public toString() {
        return "Employee " + this.firstName + " " + this.lastName + " <" + this.email
            + "> born " + this.birthDate;
    }

}