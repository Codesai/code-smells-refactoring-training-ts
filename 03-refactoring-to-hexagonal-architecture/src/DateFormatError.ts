export class DateFormatError extends Error {
    message: string;
    name: string;

    constructor() {
        super("Incorrect date format");
    }
}