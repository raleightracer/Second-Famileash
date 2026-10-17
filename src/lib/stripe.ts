import { loadStripe } from "@stripe/stripe-js";

const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!key) {
  console.error(
    "VITE_STRIPE_PUBLISHABLE_KEY is not set, so donations are turned off. See README.md.",
  );
}

/** Stripe.js, loaded once for the whole site. null when the publishable key is missing. */
export const stripePromise = key ? loadStripe(key) : null;
