import Razorpay from 'razorpay';

function getRazorpay() {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) {
    throw new Error('Razorpay credentials not configured');
  }
  return new Razorpay({ key_id, key_secret });
}

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) return Response.json({ error: 'Email required' }, { status: 400 });

    const razorpay = getRazorpay();
    const order = await razorpay.orders.create({
      amount:   49900,          // ₹499.00 in paise
      currency: 'INR',
      receipt:  `sl_${Date.now()}`,
      notes:    { email },
    });

    return Response.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (err) {
    console.error('create-order error:', err);
    return Response.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
