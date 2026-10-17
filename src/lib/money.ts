export const withCommas = (n: number) => n.toLocaleString("en-PH");
export const peso = (n: number) => `₱${withCommas(n)}`;

// Online gift limits in pesos. Stripe rejects very small charges and caps a
// single charge at ₱999,999.99. api/create-payment-intent.js checks these too.
export const MIN_GIFT = 100;
export const MAX_GIFT = 999_999;
