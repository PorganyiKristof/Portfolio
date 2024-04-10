import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const formEmail = process.env.FORM_EMAIL;

export default async function POST(_req, _res) {
  const { body } = await _req.json();
  const { email, subject, message } = body;
  const { data, error } = await resend.emails.send({
    from: formEmail,
    to: ["porganyikristof@gmail.com", email],
    subject: subject,
    react: (
      <>
        <p>{subject}</p>
        <p>Thank You for connecting us!</p>
        <p>New Message submited!</p>
        <p>{message}</p>
      </>
    ),
  });

  if (error) {
    return _res.status(400).json(error);
  }

  _res.status(200).json(data);
}
