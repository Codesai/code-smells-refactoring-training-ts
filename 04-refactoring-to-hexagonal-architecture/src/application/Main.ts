import {BirthdayService} from "./BirthdayService";
import {OurDate} from "../core/OurDate";
import {FileEmployeesRepository} from "../infrastructure/repositories/FileEmployeesRepository";

export class Main {

    private static readonly EMPLOYEES_FILE_PATH = "employee_data.txt";
    private static readonly SENDER_EMAIL_ADDRESS: string = "sender@here.com";
    private static readonly HOST: string = "localhost";
    private static readonly SMTP_PORT: number = 25;

    public static main(args: string) {
        const service = new BirthdayService(new FileEmployeesRepository(this.EMPLOYEES_FILE_PATH));
        try {
            const today = new OurDate(new Date())
            service.sendGreetings(today, this.HOST, this.SMTP_PORT, this.SENDER_EMAIL_ADDRESS);
        } catch (e) {
            console.log(e);
        }
    }
}