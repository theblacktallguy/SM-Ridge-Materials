import { Request, Response } from "express";
import { Resend } from "resend";

export const submitQuoteRequest = async (req: Request, res: Response) => {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return res.status(500).json({
        message: "Server email configuration is missing.",
      });
    }

    const resend = new Resend(resendApiKey);

    const {
      fullName,
      phone,
      location,
      address,
      projectType,
      timeline,
      quantity,
      notes,
      material,
    } = req.body;

    if (
      !fullName ||
      !phone ||
      !location ||
      !address ||
      !projectType ||
      !timeline ||
      !quantity ||
      !material
    ) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      });
    }

    const receiverEmail =
      process.env.QUOTE_RECEIVER_EMAIL || "info@smridgematerials.com";

    const senderEmail =
      process.env.QUOTE_SENDER_EMAIL || "support@velvetlynk.com";

    const emailSubject = `New Quote Request - ${material}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <h2 style="color: #0B132B; margin-bottom: 12px;">New Quote Request For SM Ridge Materials</h2>
        <p>A new quote request was submitted from the website.</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Full Name</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Location</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Delivery Address</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${address}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Project Type</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Timeline</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${timeline}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Material</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${material}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Quantity</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${quantity}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Notes</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${
              notes?.trim() ? notes : "No additional notes provided"
            }</td>
          </tr>
        </table>
      </div>
    `;

    const resendResponse = await resend.emails.send({
      from: senderEmail,
      to: receiverEmail,
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Sender email:", senderEmail);
    console.log("Receiver email:", receiverEmail);
    console.log("Resend response:", resendResponse);

    if (resendResponse.error) {
      console.error("Resend send error:", resendResponse.error);

      return res.status(500).json({
        message: "Email could not be sent. Please try again.",
      });
    }

    return res.status(200).json({
      message: "Quote request submitted successfully.",
    });
  } catch (error) {
    console.error("Quote request submission error:", error);

    return res.status(500).json({
      message: "Something went wrong while submitting your quote request.",
    });
  }
};