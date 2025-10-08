import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sentFrom = new Sender(process.env.FROM_EMAIL, "RiseX Creative");
    const recipients = [new Recipient(process.env.TO_EMAIL, "Admin")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Sender(email, name))
      .setSubject(`New Contact Message from ${name}`)
      .setHtml(`<p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message}</p>`);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MailerSend Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
