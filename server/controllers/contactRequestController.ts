import { Request, Response } from "express";
import { Resend } from "resend";

export const submitContactRequest = async (req: Request, res: Response) => {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return res.status(500).json({
        message: "Server email configuration is missing.",
      });
    }

    const resend = new Resend(resendApiKey);

    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      });
    }

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "danielhogwarts29@gmail.com";

    const senderEmail =
      process.env.CONTACT_SENDER_EMAIL || "support@velvetlynk.com";

    const resendResponse = await resend.emails.send({
      from: senderEmail,
      to: receiverEmail,
      subject: `New Contact Form Message - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
          <h2 style="color: #0B132B; margin-bottom: 12px;">New Contact Form Message For SM Ridge Materials</h2>
          <p>A new contact form message was submitted from the website.</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Subject</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
        </div>
      `,
      text: `
New Contact Form Message

Name: ${name}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
    });

    console.log("Contact resend response:", resendResponse);

    if (resendResponse.error) {
      return res.status(500).json({
        message: "Email could not be sent. Please try again.",
      });
    }

    return res.status(200).json({
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    return res.status(500).json({
      message: "Something went wrong while sending your message.",
    });
  }
};