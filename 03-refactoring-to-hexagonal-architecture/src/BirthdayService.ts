import {OurDate} from "./OurDate";
import {Employee} from "./Employee";
import * as fs from "fs";
import nodemailer, {Transporter} from "nodemailer";
import {MailOptions} from "nodemailer/lib/smtp-transport";
import {EmailNotSentError} from "./EmailNotSentError";

export class BirthdayService {

    sendGreetings(fileName: string, ourDate: OurDate, smtpHost: string, smtpPort: number, sender: string): void {
        const lines = fs.readFileSync(fileName, {encoding: 'utf8'}).split(/\r?\n/).slice(1);
        lines.forEach((str: string) => {
            let employeeData = str.split(", ");
            const employee = new Employee(employeeData[1], employeeData[0],
                employeeData[2], employeeData[3]);
            if (employee.isBirthday(ourDate)) {
                const recipient = employee.getEmail();
                const body = "Happy Birthday, dear %NAME%!".replace("%NAME%",
                    employee.getFirstName());
                const subject = "Happy Birthday!";
                this.sendTheMessage(smtpHost, smtpPort, sender, subject,
                    body, recipient);
            }
        });
    }

    private sendTheMessage(smtpHost: string, smtpPort: number, sender: string,
                           subject: string, body: string, recipient: string): void {
        // Create a mail session
        const transport = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
        })

        // Construct the message
        const msg = {
            from: sender,
            to: recipient,
            subject: subject,
            text: body
        };

        // Send the message
        this.sendMessage(msg, transport);
    }

    // made protected for testing :-(
    protected sendMessage(msg: MailOptions, transport: Transporter): void {
        transport.sendMail(msg, (err: Error | null) => {
            if (err) {
                throw new EmailNotSentError(err);
            }
        });
    }
}
