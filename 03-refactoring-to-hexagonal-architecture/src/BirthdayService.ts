import {OurDate} from "./OurDate";
import {Employee} from "./Employee";
import * as fs from "fs";
import {Transporter} from "nodemailer";
import nodemailer from "nodemailer";
import {MailOptions} from "nodemailer/lib/smtp-transport";

export class BirthdayService {

    public sendGreetings(fileName: string, ourDate: OurDate, smtpHost: string, smtpPort: number) {
        const data = fs.readFileSync(fileName, {encoding: 'utf8'});
        data.split(/\r?\n/).forEach((str: string) => {
            let employeeData = str.split(", ");
            const employee = new Employee(employeeData[1], employeeData[0],
                employeeData[2], employeeData[3]);
            if (employee.isBirthday(ourDate)) {
                const recipient = employee.getEmail();
                const body = "Happy Birthday, dear %NAME%!".replace("%NAME%",
                    employee.getFirstName());
                const subject = "Happy Birthday!";
                this.sendTheMessage(smtpHost, smtpPort, "sender@here.com", subject,
                    body, recipient);
            }
        });


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

    public main(args: string) {
        const service = new BirthdayService();
        try {
            service.sendGreetings("employee_data.txt",
                new OurDate("2008/10/08"), "localhost", 25);
        } catch (e) {
            console.log(e);
        }
    }
}
