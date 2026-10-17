# Second FamiLeash: Dog Rescue Website

React + TypeScript + Tailwind CSS (Vite), two pages: Home and About, plus a thank-you page for donations. Donations go through Stripe in test mode, so no real money moves.

## Run it
    npm install
    cp .env.example .env     # then paste your Stripe test keys into .env
    npx vercel dev

`npx vercel dev` runs the site and the `api/` donation function together, like the live site on Vercel. Plain `npm run dev` also works for everything except the Give button, because it doesn't run `api/`.

Build for production with `npm run build`.

## Donations (Stripe)
1. The donor picks an amount and clicks Give. The site calls `api/create-payment-intent.js` (a Vercel Function), which uses the secret key to start a Stripe payment and returns its client secret.
2. `src/components/DonateForm.tsx` shows Stripe's card form (`<PaymentElement />` from `@stripe/react-stripe-js`) and confirms the payment.
3. The donor lands on `/thank-you` (`src/pages/ThankYou.tsx`), which asks Stripe whether the payment went through.

Keys come from Stripe Dashboard > Developers > API keys, with Test mode on:
- `VITE_STRIPE_PUBLISHABLE_KEY` (`pk_test_...`): used in the browser.
- `STRIPE_SECRET_KEY` (`sk_test_...`): used only by `api/`. Never give it a `VITE_` prefix, or Vite will put it in the public site.

Put them in `.env` for local work, and in Vercel > Project > Settings > Environment Variables for the live site. Redeploy after changing them on Vercel.

Gifts can be ₱100 to ₱999,999 (`MIN_GIFT` and `MAX_GIFT` in `src/lib/money.ts`, checked again in `api/create-payment-intent.js`).

### Test cards
Any future expiry date, any CVC:
- `4242 4242 4242 4242`: payment succeeds
- `4000 0027 6000 3184`: asks for bank verification (3D Secure) first
- `4000 0000 0000 0002`: card is declined

Test payments appear in the Stripe Dashboard under Payments.

## Where things live
- `src/components/Navbar.tsx`: navigation (desktop, mobile menu, theme toggle)
- `src/theme/ThemeContext.tsx` + `src/index.css`: light/dark themes via color tokens
- `src/assets/`: dog illustrations, leash divider, logo (all SVG)
- `src/data/content.ts`: all site copy, in one place
- `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/pages/ThankYou.tsx`
- `src/components/DonateForm.tsx`, `src/lib/stripe.ts`, `api/create-payment-intent.js`: donations
- `vercel.json`: sends each page URL (`/about`, `/thank-you`) to the React app on Vercel. Add new pages here too. A catch-all rule would also catch Vite's own files under `vercel dev` and leave a white page.

All names, numbers, and email addresses are sample content for a fictional organization. Replace them in `content.ts` before launch.
