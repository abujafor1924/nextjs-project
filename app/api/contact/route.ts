import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resend = new Resend("re_kZeYS67H_5nMB64SDbKNZbkFbxV8XqaYL");

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', 
      to: ['info.belleviebd@gmail.com'],
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #33c2df;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; color: #333;">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
