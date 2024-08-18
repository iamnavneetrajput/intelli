import express from 'express';
import nodemailer from 'nodemailer';
import { Contact } from '../models/Contact.js'; // Import the Contact model

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, reason, other, message } = req.body;

  try {
    // Save the contact message to the database
    const newContact = new Contact({
      name,
      email,
      reason,
      other,
      message,
    });
    await newContact.save();

    // Send an email to the admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${reason === 'other' ? other : reason}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason === 'other' ? other : reason}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    // Send a confirmation email to the user
    const userMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: 'Thank you for contacting us!',
      text: `Hi ${name},\n\nThank you for reaching out to us with the following message:\n\nReason: ${reason === 'other' ? other : reason}\nMessage:\n${message}\n\nWe will get back to you shortly.\n\nBest regards,\nThe Team`,
    };

    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error sending your message. Please try again later.' });
  }
});

export default router;
