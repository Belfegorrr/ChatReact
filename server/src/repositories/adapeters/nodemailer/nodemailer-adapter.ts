import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';



const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4de22b814d59d1",
    pass: "0bd87ffff64840"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Iago <iagop32@gmail.com>',
        subject,
        html: body,
      });
  }
}