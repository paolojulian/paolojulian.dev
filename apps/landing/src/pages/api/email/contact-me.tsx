import { methodNotAllowed } from '@/_utils/api-response';
import { NextApiHandler } from 'next';
import nodemailer from 'nodemailer';

const ENVIRONMENTS = {
  EMAIL_ADDRESS:
    process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'paolojulian.personal@gmail.com',
  EMAIL_APP_USERNAME: process.env.GMAIL_APP_USERNAME || '',
  EMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || '',
};

const handler: NextApiHandler = (req, res) => {
  if (!req.body?.email || !req.body?.name || !req.body?.message) {
    return res.status(400).json({ message: 'Form is incomplete' });
  }
  if (req.method !== 'POST') {
    return methodNotAllowed(res);
  }

  const message = {
    from: req.body.email,
    to: ENVIRONMENTS.EMAIL_ADDRESS,
    subject: 'Somebody wants to talk to you!',
    text: req.body.message,
    html: `
    <div>
      <p style="font-weight: base; color: #475569; margin-bottom: 20px" class="line-break">
        ${req.body.message}
      </p>
      <div class="stack"> 
        <h2 style="font-weight: base; font-size: 1rem; line-height: 1.5rem">${req.body.name}</h2>
        <h4 style="font-weight: base; font-size: 0.8rem;">${req.body.email}</h4>
      </div>
    </div>
    <style>
    .line-break {
      white-space: pre-wrap;
    }
    .stack {
      display: flex;
      flex-direction: column;
    }
    .stack > * + * {
      margin-top: 0;
    }
    </style>
    `,
  };

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: ENVIRONMENTS.EMAIL_APP_USERNAME,
      pass: ENVIRONMENTS.EMAIL_APP_PASSWORD,
    },
  });

  transporter.sendMail(message, (err, info) => {
    if (err) {
      return res.status(404).json({
        error: `Unable to connect to the mailing service: ${err.message}`,
      });
    }

    return res.status(200).json({
      success: `Message delivered to ${info.accepted}`,
    });
  });
};

export default handler;
