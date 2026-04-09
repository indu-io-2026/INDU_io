import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '../../../lib/rate-limit';

export async function POST(req: Request) {
  try {
    // Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rateLimitResult = rateLimit(ip, 5, 60 * 1000); // 5 requests per minute

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429, 
          headers: { 
            'X-RateLimit-Limit': rateLimitResult.limit.toString(), 
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString() 
          } 
        }
      );
    }

    const { firstName, lastName, email, companySize, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Strict input validation
    if (firstName.length > 50 || lastName.length > 50) {
      return NextResponse.json({ error: 'Name is too long' }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message is too long (max 5000 characters)' }, { status: 400 });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Verify env vars
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP environment variables are not configured.");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER, // sender address
      to: process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER, // receiver
      subject: `New Strategy Audit Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Strategy Audit Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Size:</strong> ${companySize}</p>
        <br/>
        <p><strong>Process to automate:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
