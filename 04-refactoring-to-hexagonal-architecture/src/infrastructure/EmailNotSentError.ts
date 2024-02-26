export class EmailNotSentError extends Error {
    public message: string;
    public name: string;

    constructor(err: Error) {
        super("email not sent: " + err.message)
    }
}