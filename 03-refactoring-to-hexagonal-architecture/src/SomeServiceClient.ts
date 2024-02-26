import {BirthdayService} from "./BirthdayService";
import {OurDate} from "./OurDate";

export class SomeServiceClient {

    runService(): void {
        const service = new BirthdayService();
        try {
            service.sendGreetings(
                "employee_data.txt",
                new OurDate("2008/10/08"),
                "localhost",
                25,
                "sender@here.com"
            );
        } catch (e) {
            console.log(e);
        }
    }
}