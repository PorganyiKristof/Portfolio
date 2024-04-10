const nodemailer = require("nodemailer");
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

export async function POST(_req, _res) {
  const { email, subject, message } = await _req.json();

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.google_user, // generated ethereal user
        pass: process.env.google_password, // generated ethereal password
      },
    });
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });
    const emailHtml = render(<div>{message}</div>);

    const options = {
      from: `From <${process.env.google_user}>`,
      to: email,
      subject: subject,
      html: emailHtml,
    };
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(options, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
