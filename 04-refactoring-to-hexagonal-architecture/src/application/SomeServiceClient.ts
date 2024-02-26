import {BirthdayService} from "./BirthdayService";
import {OurDate} from "../core/OurDate";
import {FileEmployeesRepository} from "../infrastructure/repositories/FileEmployeesRepository";

export class SomeServiceClient {

    runService(): void {
        const service = new BirthdayService(new FileEmployeesRepository("employee_data.txt"));
        try {
            const today = new OurDate(new Date());
            service.sendGreetings(today, "localhost", 25, "sender@here.com");
        } catch (e) {
            console.log(e);
        }
    }
}