import {BirthdayService} from "./BirthdayService";
import {OurDate} from "../core/OurDate";
import {FileEmployeesRepository} from "../infrastructure/repositories/FileEmployeesRepository";
import {EmailGreetingsSender} from "../infrastructure/EmailGreetingsSender";

export class SomeServiceClient {

    runService(): void {
        const service = new BirthdayService(
            new FileEmployeesRepository("employee_data.txt"),
            new EmailGreetingsSender("localhost", 25, "sender@here.com")
        );
        try {
            const today = new OurDate(new Date());
            service.sendGreetings(today);
        } catch (e) {
            console.log(e);
        }
    }
}