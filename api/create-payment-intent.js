import Stripe from "stripe";

// Gift limits in pesos. Keep in sync with MIN_GIFT and MAX_GIFT in src/lib/money.ts.
const MIN_GIFT = 100;
const MAX_GIFT = 999_999;

/**
 * Vercel Function: POST /api/create-payment-intent with { amount } in whole pesos.
 * Starts a Stripe payment and returns its client secret, which the card form needs.
 * The secret key only lives here on the server; the browser never sees it.
 */
export async function POST(request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error("STRIPE_SECRET_KEY is not set. See README.md.");
    return Response.json(
      { error: "Online giving isn't set up yet. Please try again later." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const amount = body?.amount;
  if (!Number.isInteger(amount) || amount < MIN_GIFT || amount > MAX_GIFT) {
    return Response.json(
      {
        error: `Please choose an amount from ₱${MIN_GIFT} to ₱${MAX_GIFT.toLocaleString("en-PH")}.`,
      },
      { status: 400 },
    );
  }

  try {
    const payment = await new Stripe(secretKey).paymentIntents.create({
      amount: amount * 100, // Stripe counts in centavos: ₱500 is 50000
      currency: "php",
      automatic_payment_methods: { enabled: true },
      description: "Donation to Second Famileash",
    });
    return Response.json({ clientSecret: payment.client_secret });
  } catch (err) {
    console.error("Stripe could not create the payment:", err.message);
    return Response.json(
      { error: "We couldn't start the payment. Please try again." },
      { status: 502 },
    );
  }
}
