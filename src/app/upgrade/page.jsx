'use client';

import { useState, useRef } from 'react';
import { Flex, Text, Button, Input, Card, Heading } from '@once-ui-system/core';

// Load Razorpay checkout script once
function loadRazorpay() {
  return new Promise(resolve => {
    if (window.Razorpay) { resolve(true); return; }
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.onload  = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function UpgradePage() {
  const [email,      setEmail]      = useState('');
  const [loading,    setLoading]    = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [error,      setError]      = useState('');
  const [copied,     setCopied]     = useState(false);
  const keyRef = useRef(null);

  async function handlePayment() {
    setError('');
    if (!email || !email.includes('@')) { setError('Enter a valid email.'); return; }

    setLoading(true);
    const loaded = await loadRazorpay();
    if (!loaded) { setError('Could not load payment window. Check your connection.'); setLoading(false); return; }

    // Create order
    let order;
    try {
      const res = await fetch('/api/create-order', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      });
      order = await res.json();
      if (order.error) throw new Error(order.error);
    } catch (e) {
      setError('Could not initiate payment. Please try again.');
      setLoading(false);
      return;
    }

    // Open Razorpay checkout
    const options = {
      key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount:      order.amount,
      currency:    order.currency,
      name:        'Sightline',
      description: 'Pro — ₹499/mo',
      order_id:    order.orderId,
      prefill:     { email },
      theme:       { color: '#7C3AED' },
      handler: async (response) => {
        try {
          const vRes = await fetch('/api/verify-payment', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ ...response, email }),
          });
          const vData = await vRes.json();
          if (vData.licenseKey) setLicenseKey(vData.licenseKey);
          else setError('Payment received but key generation failed. Email support@sightline.dev');
        } catch {
          setError('Payment received but verification failed. Email support@sightline.dev');
        }
        setLoading(false);
      },
      modal: { ondismiss: () => setLoading(false) },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', () => {
      setError('Payment failed. Please try again.');
      setLoading(false);
    });
    rzp.open();
  }

  async function copyKey() {
    await navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // ── Success screen ─────────────────────────────────────────────────────────
  if (licenseKey) {
    return (
      <Flex fillWidth minHeight="100dvh" background="page" direction="column" alignItems="center" justifyContent="center" padding="xl" gap="l">
        <Heading variant="display-strong-s">You're Pro ✦</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Copy your license key and activate it inside the extension.
        </Text>

        <Card padding="m" radius="l" background="surface">
          <Flex direction="column" gap="s">
            <Text ref={keyRef} variant="code-default-m" style={{ letterSpacing: '0.05em' }}>
              {licenseKey}
            </Text>
            <Button variant="secondary" size="s" onClick={copyKey}>
              {copied ? 'Copied ✓' : 'Copy key'}
            </Button>
          </Flex>
        </Card>

        <Text variant="body-default-s" onBackground="neutral-weak">
          We've also emailed this key to {email}.
          Keep it safe — you'll need it if you reinstall the extension.
        </Text>
      </Flex>
    );
  }

  // ── Payment screen ─────────────────────────────────────────────────────────
  return (
    <Flex fillWidth minHeight="100dvh" background="page" direction="column" alignItems="center" justifyContent="center" padding="xl" gap="l">
      <Flex direction="column" alignItems="center" gap="s">
        <Heading variant="display-strong-s">Sightline Pro</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Color eyedropper · Guide presets · Font inspector · Floating panel
        </Text>
      </Flex>

      <Card padding="xl" radius="l" background="surface" style={{ width: '100%', maxWidth: 400 }}>
        <Flex direction="column" gap="m">
          <Flex direction="column" gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">Email</Text>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handlePayment(); }}
            />
          </Flex>

          {error && (
            <Text variant="body-default-s" onBackground="danger-weak">{error}</Text>
          )}

          <Button
            variant="primary"
            size="l"
            fillWidth
            onClick={handlePayment}
            loading={loading}
          >
            {loading ? 'Opening payment…' : 'Get Pro — ₹499/mo'}
          </Button>

          <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
            One-time setup · Cancel anytime from Razorpay dashboard
          </Text>
        </Flex>
      </Card>
    </Flex>
  );
}
