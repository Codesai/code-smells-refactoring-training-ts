import {MailOptions} from "nodemailer/lib/smtp-transport";
import nodemailer, {Transporter} from "nodemailer";
import {EmailNotSentError} from "./EmailNotSentError";
import {GreetingMessage} from "../core/GreetingMessage";
import {GreetingsSender} from "./GreetingsSender";
import {MessageNotSentError} from "../core/MessageNotSentError";

export class EmailGreetingsSender implements GreetingsSender {
    private readonly _smtpHost: string;
    private readonly _smtpPort: number;
    private readonly _sender: string;


    constructor(smtpHost: string, smtpPort: number, sender: string) {
        this._smtpHost = smtpHost;
        this._smtpPort = smtpPort;
        this._sender = sender;
    }

    send(messages: Array<GreetingMessage>): void {
        for (const message of messages) {
            this.sendTheMessage(message);
        }
    }

    private sendTheMessage(message: GreetingMessage): void {
        const transport = this.createMailSession();

        const msg = this.constructTheMessage(message);

        try {
            this.sendMessage(msg, transport);
        } catch (error) {
            throw new MessageNotSentError(error)
        }
    }

    private constructTheMessage(message: GreetingMessage) {
        return {
            from: this._sender,
            to: message.to(),
            subject: message.subject(),
            text: message.text()
        };
    }

    private createMailSession() {
        return nodemailer.createTransport({
            host: this._smtpHost,
            port: this._smtpPort,
        });
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
