import {BirthdayService} from "./BirthdayService";
import {OurDate} from "./OurDate";

import {FileEmployees} from "./FileEmployees";
import {DateRepresentation} from "./DateRepresentation";

export class SomeServiceClient {

    runService(): void {
        const fileName = "employee_data.txt";
        const service = new BirthdayService(new FileEmployees(fileName));
        try {
            service.sendGreetings(DateRepresentation.toSlashDate("2008/10/08"), "localhost", 25, "sender@here.com");
        } catch (e) {
            console.log(e);
        }
    }
}