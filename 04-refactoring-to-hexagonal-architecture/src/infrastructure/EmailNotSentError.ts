export class EmailNotSentError extends Error {
    constructor(err: Error) {
        super("email not sent: " + err.message)
    }
}
