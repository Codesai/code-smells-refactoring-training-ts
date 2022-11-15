import {Employee} from "./Employee";

export class Greeting {
    private readonly _header: string;
    private readonly _content: string;

    constructor(header: string, content: string) {
        this._header = header;
        this._content = content;
    }

    static forBirthdayOf(employee: Employee): Greeting {
        const content = `Happy Birthday, dear ${employee.getFirstName()}!`;
        const header = "Happy Birthday!";
        return new Greeting(header, content);
    }

    public header(): string {
        return this._header;
    }

    public content(): string {
        return this._content;
    }
}