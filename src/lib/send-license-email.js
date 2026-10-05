import { Resend } from 'resend';

export async function sendLicenseKeyEmail({ email, licenseKey }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set — skipping license email');
    return false;
  }

  const resend = new Resend(apiKey);
  const from = process.env.EMAIL_FROM || 'Sightline <onboarding@resend.dev>';

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: 'Your Sightline Pro license key',
    html: `
      <p>Thanks for upgrading to Sightline Pro.</p>
      <p>Your license key:</p>
      <p style="font-family:monospace;font-size:16px;letter-spacing:0.05em;">${licenseKey}</p>
      <p>Open the Sightline extension → upgrade modal → paste this key to activate Pro.</p>
      <p>Keep this key safe — you'll need it if you reinstall the extension.</p>
      <p>— Sightline<br><a href="https://sightline.dev">sightline.dev</a></p>
    `,
  });

  if (error) {
    console.error('sendLicenseKeyEmail error:', error);
    return false;
  }

  return true;
}
