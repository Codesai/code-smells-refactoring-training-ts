export class EmailNotSentError implements Error {
    public message: string;
    public name: string;

    constructor(err: Error) {
        this.message = "email not sent: " + err.message;
        this.name = "EmailNotSentError";
    }
}