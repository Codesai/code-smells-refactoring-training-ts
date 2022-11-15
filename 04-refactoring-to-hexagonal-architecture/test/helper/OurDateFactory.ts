import {OurDate} from "../../src/core/OurDate";
import {DateRepresentation} from "../../src/infrastructure/repositories/DateRepresentation";

export function ourDateFromString(dateAsString: string): OurDate {
    return new DateRepresentation(dateAsString).toDate();
}
