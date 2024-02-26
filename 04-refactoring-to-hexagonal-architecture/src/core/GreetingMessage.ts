import {Employee} from "./Employee";
import {Greeting} from "./Greeting";

export class GreetingMessage {

    private readonly _to: string;
    private readonly _greeting: Greeting;

    constructor(to: string, greeting: Greeting) {
        this._to = to;
        this._greeting = greeting;
    }

    static generateForSome(employees: Array<Employee>): Array<GreetingMessage> {
        return employees.map(GreetingMessage.generateFor);
    }

    subject(): string {
        return this._greeting.header();
    }

    text(): string {
        return this._greeting.content();
    }

    to(): string {
        return this._to;
    }

    private static generateFor(employee: Employee): GreetingMessage {
        const greeting = Greeting.forBirthdayOf(employee);
        const recipient = employee.getEmail();
        return new GreetingMessage(recipient, greeting);
    }
}