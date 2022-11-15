import {OurDate} from "../core/OurDate";
import {Employee} from "../core/Employee";
import {Transporter} from "nodemailer";
import nodemailer from "nodemailer";
import {MailOptions} from "nodemailer/lib/smtp-transport";
import {EmployeesRepository} from "../core/EmployeesRepository";
import {GreetingMessage} from "../core/GreetingMessage";

export class BirthdayService {
    private employeesRepository: EmployeesRepository;

    constructor(employeeRepository: EmployeesRepository) {
        this.employeesRepository = employeeRepository;
    }

    public sendGreetings(date: OurDate, smtpHost: string, smtpPort: number, sender: string) {
        this.send(this.greetingMessagesFor(this.employeesHavingBirthday(date)),
            smtpHost, smtpPort, sender);
    }

    private greetingMessagesFor(employees: Array<Employee>): Array<GreetingMessage> {
        return GreetingMessage.generateForSome(employees);
    }

    private employeesHavingBirthday(today: OurDate): Array<Employee> {
        return this.employeesRepository.whoseBirthdayIs(today);
    }

    private send(messages: Array<GreetingMessage>, smtpHost: string, smtpPort: number, sender: string) {
        for (const message of messages) {
            const recipient = message.to();
            const body = message.text();
            const subject = message.subject();
            this.sendTheMessage(smtpHost, smtpPort, sender, subject, body, recipient);
        }
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
        transport.sendMail(msg, (err) => {
            if (err) throw new Error("not send");
        });
    }

}
