import {OurDate} from "./OurDate";
import {Employee} from "./Employee";
import nodemailer, {Transporter} from "nodemailer";
import {MailOptions} from "nodemailer/lib/smtp-transport";
import {EmailNotSentError} from "./EmailNotSentError";

import {Employees} from "./Employees";

export class BirthdayService {

    private employees: Employees;

    constructor(employees: Employees) {
        this.employees = employees;
    }

    public sendGreetings(ourDate: OurDate, smtpHost: string, smtpPort: number, sender: string) {

        const employees = this.employees.retrieveEmployees();
        for (const employee of employees) {
            if (employee.isBirthday(ourDate)) {
                this.sendGreeting(employee, smtpHost, smtpPort, sender);
            }
        }
    }

    private sendGreeting(employee: Employee, smtpHost: string, smtpPort: number, sender: string) {
        const recipient = employee.getEmail();
        const body = "Happy Birthday, dear %NAME%!".replace("%NAME%",
            employee.getFirstName());
        const subject = "Happy Birthday!";
        this.sendTheMessage(smtpHost, smtpPort, sender, subject,
            body, recipient);
    }

    private sendTheMessage(smtpHost: string, smtpPort: number, sender: string,
                           subject: string, body: string, recipient: string) {
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
    protected sendMessage(msg: MailOptions, transport: Transporter) {
        transport.sendMail(msg, (err: Error | null) => {
            if (err) throw new EmailNotSentError(err);
        });
    }
}
