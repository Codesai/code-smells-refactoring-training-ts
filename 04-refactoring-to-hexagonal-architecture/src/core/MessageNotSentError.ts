export class MessageNotSentError extends Error {
    constructor(err: Error) {
        super("message not sent: " + err.message)
    }
}
