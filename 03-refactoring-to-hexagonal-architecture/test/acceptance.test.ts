import {BirthdayService} from "../src/BirthdayService";
import {OurDate} from "../src/OurDate";
import {Transporter} from "nodemailer";
import {MailOptions} from "nodemailer/lib/smtp-transport";

import {FileEmployees} from "../src/FileEmployees";
import {DateRepresentation} from "../src/DateRepresentation";

describe('Acceptance', () => {

    const SMTP_PORT: number = 25;
    const SMTP_HOST: string = "localhost";
    const FROM: string = "sender@here.com";
    const fileName = "test/resources/employee_data.txt";
    let messagesSent: Array<MailOptions>;
    let service: BirthdayService;

    beforeEach(() => {
        messagesSent = new Array<MailOptions>();
        service = new class extends BirthdayService {
            protected sendMessage(msg: MailOptions, transport: Transporter) {
                messagesSent.push(msg);
            }
        }(new FileEmployees(fileName));
    })

    it('base scenario', () => {
        service.sendGreetings(DateRepresentation.toSlashDate("2008/10/08"), SMTP_HOST, SMTP_PORT, FROM);

        expect(messagesSent.length).toEqual(1);
        const message = messagesSent[0];
        expect(message.text).toEqual("Happy Birthday, dear John!",);
        expect(message.subject).toEqual("Happy Birthday!");
        expect(message.to).toEqual("john.doe@foobar.com");
    });

    it('will not send emails when nobodys birthday', () => {
        service.sendGreetings(DateRepresentation.toSlashDate("2008/01/01"), SMTP_HOST, SMTP_PORT, FROM);

        expect(messagesSent.length).toEqual(0);
    });
});