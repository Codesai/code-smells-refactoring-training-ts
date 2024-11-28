import {BirthdayService} from "../../src/application/BirthdayService";
import {Transporter} from "nodemailer";
import {MailOptions} from "nodemailer/lib/smtp-transport";
import {FileEmployeesRepository} from "../../src/infrastructure/repositories/FileEmployeesRepository";
import {date} from "../helper/OurDateFactory";
import {EmployeesRepository} from "../../src/core/EmployeesRepository";

describe('Acceptance', () => {

    const EMPLOYEES_FILE_PATH = "test/resources/employee_data.txt";
    const FROM: string = "sender@here.com";
    const SMTP_HOST: string = "localhost";
    const SMTP_PORT: number = 25;
    let messagesSent: Array<MailOptions>;
    let service: BirthdayService;

    beforeEach(() => {
        messagesSent = new Array<MailOptions>();
        service = new BirthdayServiceForTesting(new FileEmployeesRepository(EMPLOYEES_FILE_PATH));
    })

    it('base scenario', () => {
        service.sendGreetings(date("2008/10/08"), SMTP_HOST, SMTP_PORT, FROM);

        expect(messagesSent.length).toEqual(1);
        const message = messagesSent[0];
        expect(message.text).toEqual("Happy Birthday, dear John!",);
        expect(message.subject).toEqual("Happy Birthday!");
        expect(message.to).toEqual("john.doe@foobar.com");
    });

    it('will not send emails when nobodys birthday', () => {
        service.sendGreetings(date("2008/01/01"), SMTP_HOST, SMTP_PORT, FROM);

        expect(messagesSent.length).toEqual(0);
    });

    class BirthdayServiceForTesting extends BirthdayService {
        constructor(employeeRepository: EmployeesRepository) {
            super(employeeRepository);
        }

        protected sendMessage(msg: MailOptions, transport: Transporter): void {
            messagesSent.push(msg);
        }
    }
});