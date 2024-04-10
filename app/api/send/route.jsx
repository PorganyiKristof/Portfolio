const nodemailer = require("nodemailer");
import { Tailwind } from "@react-email/components";
import { render } from "@react-email/render";
import Image from "next/image";
import { NextResponse } from "next/server";

const Email = () => {
  return <Tailwind>{children}</Tailwind>;
};

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
    const emailHtmlToTheSender = render(
      <div className="flex bg-black text-white w-full">
        <div className="flex flex-col  justify-center m-auto">
          <h1 className="font-bold uppercase border-b border-purple-500 mb-4">
            {subject}
          </h1>
          <div className="mb-4">
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
          </div>
          <p>&quot;{message}&quot;</p>
        </div>
        {/* <Image
          src="/images/hero-image.png"
          alt="hero-image"
          width="300"
          height="300"
        /> */}
      </div>
    );
    const emailHtmlForMe = render(
      <div>
        <p>{subject}</p>
        <p>{message}</p>
      </div>
    );

    const options = {
      from: `From <${process.env.google_user}>`,
      to: email,
      subject: subject,
      html: emailHtmlToTheSender,
    };

    const optionsForMe = {
      from: `From <${process.env.google_user}>`,
      to: process.env.google_user,
      subject: subject,
      html: emailHtmlForMe,
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
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(optionsForMe, (err, info) => {
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
