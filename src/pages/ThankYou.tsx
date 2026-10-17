import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { PaymentIntent } from "@stripe/stripe-js";
import DogFace from "../assets/DogFace";
import { peso } from "../lib/money";
import { stripePromise } from "../lib/stripe";

/** What to tell the donor. `payment` is undefined while loading, null when there is nothing to show. */
function messageFor(payment: PaymentIntent | null | undefined) {
  if (payment === undefined) return { title: "Checking your gift…" };
  if (!payment) {
    return {
      title: "We couldn't find that payment",
      text: "Pick a gift on the home page to donate.",
    };
  }
  const gift = peso(payment.amount / 100);
  if (payment.status === "succeeded") {
    return {
      paid: true,
      title: "Thank you!",
      text: `Your ${gift} gift went through. It goes to food, medicine, and surgery for the dogs in our care.`,
    };
  }
  if (payment.status === "processing") {
    return {
      paid: true,
      title: "Your gift is on its way",
      text: `Your ${gift} payment is still processing. Your bank will confirm it shortly.`,
    };
  }
  return {
    title: "Your payment didn't go through",
    text: "No money was taken. Please try again, or use a different card.",
  };
}

/** Where donors land after paying. The URL carries payment_intent_client_secret, set by us or by Stripe. */
export default function ThankYou() {
  const [params] = useSearchParams();
  const clientSecret = params.get("payment_intent_client_secret");
  const [payment, setPayment] = useState<PaymentIntent | null>();

  useEffect(() => {
    if (!clientSecret || !stripePromise) {
      setPayment(null);
      return;
    }
    stripePromise
      .then((stripe) => stripe?.retrievePaymentIntent(clientSecret))
      .then((result) => setPayment(result?.paymentIntent ?? null))
      .catch(() => setPayment(null));
  }, [clientSecret]);

  const { title, text, paid } = messageFor(payment);

  return (
    <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr]">
      <div aria-live="polite">
        <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-xl text-lg text-muted">{text}</p>}
        {payment !== undefined && (
          <Link to={paid ? "/" : "/#help"} className="btn btn-primary mt-8">
            {paid ? "Back to home" : "Pick a gift"}
          </Link>
        )}
      </div>

      {paid && (
        <div className="mx-auto flex h-64 w-48 items-end justify-center overflow-hidden rounded-t-full bg-accent sm:h-80 sm:w-60">
          <DogFace
            fur="#C98B4E"
            ear="#8A5A2B"
            muzzle="#F2DDBF"
            tongue
            label="Illustration of a happy rescue dog"
            className="w-[92%] translate-y-[14%]"
          />
        </div>
      )}
    </section>
  );
}
