import {OurDate} from "../core/OurDate";
import {Employee} from "../core/Employee";
import nodemailer, {Transporter} from "nodemailer";
import {MailOptions} from "nodemailer/lib/smtp-transport";
import {EmployeesRepository} from "../core/EmployeesRepository";
import {GreetingMessage} from "../core/GreetingMessage";
import {EmailNotSentError} from "../infrastructure/EmailNotSentError";

export class BirthdayService {
    private readonly _employeesRepository: EmployeesRepository;

    constructor(employeeRepository: EmployeesRepository) {
        this._employeesRepository = employeeRepository;
    }

    sendGreetings(date: OurDate, smtpHost: string, smtpPort: number, sender: string): void {
        this.send(this.greetingMessagesFor(this.employeesHavingBirthday(date)),
            smtpHost, smtpPort, sender);
    }

    private greetingMessagesFor(employees: Array<Employee>): Array<GreetingMessage> {
        return GreetingMessage.generateForSome(employees);
    }

    private employeesHavingBirthday(today: OurDate): Array<Employee> {
        return this._employeesRepository.allEmployees().filter(
            (employee: Employee) => employee.isBirthday(today)
        );
    }

    private send(messages: Array<GreetingMessage>, smtpHost: string, smtpPort: number, sender: string): void {
        for (const message of messages) {
            const recipient = message.to();
            const body = message.text();
            const subject = message.subject();
            this.sendTheMessage(smtpHost, smtpPort, sender, subject, body, recipient);
        }
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
