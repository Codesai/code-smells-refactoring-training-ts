export class EmailNotSentError implements Error {
    message: string;
    name: string;

    constructor(err: Error) {
        this.message = "email not sent: " + err.message;
        this.name = "EmailNotSentError";
    }
}