import {BirthdayService} from "./BirthdayService";
import {OurDate} from "../core/OurDate";
import {FileEmployeesRepository} from "../infrastructure/repositories/FileEmployeesRepository";

export class SomeServiceClient {

    private readonly EMPLOYEES_FILE_PATH = "employee_data.txt";
    private readonly SENDER_EMAIL_ADDRESS: string = "sender@here.com";
    private readonly HOST: string = "localhost";
    private readonly SMTP_PORT: number = 25;

    runService(): void {
        const service = new BirthdayService(new FileEmployeesRepository(this.EMPLOYEES_FILE_PATH));
        try {
            const today = new OurDate(new Date());
            service.sendGreetings(today, this.HOST, this.SMTP_PORT, this.SENDER_EMAIL_ADDRESS);
        } catch (e) {
            console.log(e);
        }
    }
}