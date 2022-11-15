export class CannotReadEmployeesException extends Error {
    constructor(cause: string) {
        super(cause);
    }
}