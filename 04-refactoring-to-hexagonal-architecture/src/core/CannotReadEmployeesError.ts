export class CannotReadEmployeesError extends Error {
    constructor(cause: string) {
        super(cause);
    }
}