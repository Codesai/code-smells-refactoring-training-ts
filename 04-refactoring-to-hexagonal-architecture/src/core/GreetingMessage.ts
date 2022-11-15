import {Employee} from "./Employee";
import {Greeting} from "./Greeting";

export class GreetingMessage {

    private readonly _to: string;
    private readonly greeting: Greeting;

    constructor(to: string, greeting: Greeting) {
        this._to = to;
        this.greeting = greeting;
    }

    public static generateForSome(employees: Array<Employee>): Array<GreetingMessage> {
        return employees.map(GreetingMessage.generateFor);
    }

    private static generateFor(employee: Employee): GreetingMessage {
        const greeting = Greeting.forBirthdayOf(employee);
        const recipient = employee.getEmail();
        return new GreetingMessage(recipient, greeting);
    }

    public subject(): string {
        return this.greeting.header();
    }

    public text(): string {
        return this.greeting.content();
    }

    public to(): string {
        return this._to;
    }
}