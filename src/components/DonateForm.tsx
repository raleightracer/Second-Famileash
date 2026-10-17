import { useEffect, useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import type { Appearance } from "@stripe/stripe-js";
import { peso } from "../lib/money";
import { stripePromise } from "../lib/stripe";
import { useTheme } from "../theme/ThemeContext";

// Stripe's card form runs in an iframe and can't read our CSS tokens, so these mirror src/index.css
const palette = {
  light: {
    primary: "#1E4A43",
    background: "#FFFFFF",
    text: "#111F1C",
    muted: "#4F635D",
    line: "#D0DDD8",
  },
  dark: {
    primary: "#F7C948",
    background: "#152320",
    text: "#EEF5F2",
    muted: "#A0B4AD",
    line: "#2C423D",
  },
};

const appearanceFor = (theme: keyof typeof palette): Appearance => {
  const c = palette[theme];
  return {
    theme: theme === "dark" ? "night" : "stripe",
    variables: {
      colorPrimary: c.primary,
      colorBackground: c.background,
      colorText: c.text,
      colorTextSecondary: c.muted,
      fontFamily: "Figtree, system-ui, sans-serif",
      borderRadius: "16px",
    },
    rules: {
      ".Input": { border: `2px solid ${c.line}`, boxShadow: "none" },
      ".Input:focus": {
        borderColor: c.primary,
        boxShadow: "0 0 0 4px rgba(247, 201, 72, 0.6)",
      },
    },
  };
};

const fonts = [
  {
    cssSrc:
      "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap",
  },
];

interface DonateFormProps {
  amount: number;
  clientSecret: string;
  onCancel: () => void;
}

/** Card form for a donation the server has already started (see api/create-payment-intent.js). */
export default function DonateForm(props: DonateFormProps) {
  const { theme } = useTheme();
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: props.clientSecret,
        appearance: appearanceFor(theme),
        fonts,
      }}
    >
      <CheckoutForm {...props} />
    </Elements>
  );
}

function CheckoutForm({ amount, clientSecret, onCancel }: DonateFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const heading = useRef<HTMLHeadingElement>(null);
  const [ready, setReady] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");

  // The Give button that opened this form is gone, so move focus here
  useEffect(() => heading.current?.focus(), []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setPaying(true);
    setError("");
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/thank-you` },
      redirect: "if_required",
    });
    if (result.error) {
      setError(
        result.error.message ??
          "Your payment didn't go through. Please try again.",
      );
      setPaying(false);
      return;
    }
    // Cards finish here. Payment methods that leave the site come back to the same URL on their own.
    navigate(
      `/thank-you?payment_intent_client_secret=${encodeURIComponent(clientSecret)}`,
    );
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-surface p-6 text-ink sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3
          ref={heading}
          tabIndex={-1}
          className="text-2xl font-bold focus:outline-none"
        >
          Your gift: {peso(amount)}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          disabled={paying}
          className="font-semibold text-brand underline underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/70 disabled:opacity-50"
        >
          Change amount
        </button>
      </div>

      <PaymentElement
        className="mt-6"
        onReady={() => setReady(true)}
        onLoadError={(e) =>
          setError(e.error.message ?? "The payment form couldn't load.")
        }
      />
      {!ready && !error && (
        <p className="mt-6 text-muted">Loading the payment form…</p>
      )}

      {error && (
        <p role="alert" className="mt-4 font-medium text-red-700 dark:text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || !ready || paying}
        className="btn btn-primary mt-6 w-full disabled:pointer-events-none disabled:opacity-50"
      >
        {paying ? "Processing…" : `Give ${peso(amount)}`}
      </button>
      <p className="mt-4 text-sm text-muted">
        This is a demo, so no real money moves. Pay with the test card 4242
        4242 4242 4242, any future date, and any CVC.
      </p>
    </form>
  );
}
