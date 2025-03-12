require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, phone, checkInDate, checkOutDate, rooms, adults, children, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'your-email@example.com', // Replace with your email
        subject: 'New Inquiry Received',
        text: `New inquiry received:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone}
        - Check-in: ${checkInDate}
        - Check-out: ${checkOutDate}
        - Rooms: ${rooms}
        - Adults: ${adults}
        - Children: ${children}
        - Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
