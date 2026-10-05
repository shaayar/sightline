import crypto              from 'crypto';
import { Redis }           from '@upstash/redis';
import { sendLicenseKeyEmail } from '@/lib/send-license-email';

function getRedis() {
  return Redis.fromEnv();
}

export async function POST(req) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !email) {
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Verify Razorpay signature
    const body      = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expected  = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    if (expected !== razorpay_signature) {
      return Response.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const redis = getRedis();

    // Check if we already issued a key for this order (idempotent)
    const existing = await redis.get(`order:${razorpay_order_id}`);
    if (existing) {
      return Response.json({ licenseKey: existing });
    }

    // Generate license key  e.g.  SL-A1B2C3D4-E5F6-7890-ABCD-EF1234567890
    const raw = crypto.randomUUID().toUpperCase();
    const licenseKey = `SL-${raw}`;

    // Store license key → email + payment info
    await redis.set(`license:${licenseKey}`, JSON.stringify({
      email,
      orderId:   razorpay_order_id,
      paymentId: razorpay_payment_id,
      createdAt: Date.now(),
      valid:     true,
    }));

    // Also index by order so we can look up the key later (idempotency)
    await redis.set(`order:${razorpay_order_id}`, licenseKey);

    // Send license key email (non-blocking — payment already succeeded)
    sendLicenseKeyEmail({ email, licenseKey }).catch(err =>
      console.error('license email failed:', err),
    );

    return Response.json({ licenseKey });
  } catch (err) {
    console.error('verify-payment error:', err);
    return Response.json({ error: 'Verification failed' }, { status: 500 });
  }
}
