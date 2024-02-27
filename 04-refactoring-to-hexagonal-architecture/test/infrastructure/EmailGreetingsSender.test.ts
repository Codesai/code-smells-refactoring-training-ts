import {EmailGreetingsSender} from "../../src/infrastructure/EmailGreetingsSender";
import {MailOptions} from "nodemailer/lib/smtp-transport";
import {Transporter} from "nodemailer";
import {GreetingMessage} from "../../src/core/GreetingMessage";
import {Employee} from "../../src/core/Employee";
import {date} from "../helper/OurDateFactory";
import {EmailNotSentError} from "../../src/infrastructure/EmailNotSentError";
import {MessageNotSentError} from "../../src/core/MessageNotSentError";

describe('EmailGreetingsSender', () => {
    const FROM: string = "sender@here.com";
    const SMTP_HOST: string = "localhost";
    const SMTP_PORT: number = 25;
    let messages: GreetingMessage[]

    beforeEach(() => {
        const employees: Employee[] = [new Employee("John", date("1990/01/31"), "john.doe@foobar.com")]
        messages = GreetingMessage.generateForSome(employees)
    })

    it('sends a message', () => {
        const messagesSent = new Array<MailOptions>();
        const emailGreetingsSender = new class extends EmailGreetingsSender {
            protected sendMessage(msg: MailOptions, transport: Transporter) {
                messagesSent.push(msg);
            }
        }(SMTP_HOST, SMTP_PORT, FROM)

        emailGreetingsSender.send(messages)

        expect(messagesSent.length).toEqual(1);
        const message = messagesSent[0];
        expect(message.text).toEqual("Happy Birthday, dear John!",);
        expect(message.subject).toEqual("Happy Birthday!");
        expect(message.to).toEqual("john.doe@foobar.com");
    })

    it('throw an exception when sendMail fails', () => {
        const emailGreetingsSender = new class extends EmailGreetingsSender {
            protected sendMessage(msg: MailOptions, transport: Transporter) {
                throw new EmailNotSentError(new Error());
            }
        }(SMTP_HOST, SMTP_PORT, FROM)

        expect(() => emailGreetingsSender.send(messages)).toThrow(MessageNotSentError)
    })
})
