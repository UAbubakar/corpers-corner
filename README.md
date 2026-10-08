# Corpers Corner 🇳🇬
**Made by Corps Members. For Corps Members.**

A colourful, educational mini marketplace inspired by NYSC CDS product showcases. Anyone can browse and buy; sample approved serving corps members and approved alumni have seller listings. **This is a demo, not an NYSC service, verified identity system, or real payment processor.**

## Run locally
Requires a current Node.js LTS and npm.
```bash
npm install
npm run server
```
In a second terminal:
```bash
npm run dev
```
Open the Vite URL (usually http://localhost:5174). API: http://localhost:3002.

## Features
- Marketplace catalogue, seller labels, search, category filters, sorting
- **One seller per cart**: switching sellers prompts to clear the existing cart
- Checkout: simulated payment outcomes (no real money), or WhatsApp order reference and prefilled message
- Seller demo switcher; product create/read/update/delete; per-seller order dashboard and fulfilment status
- Illustrated “How it works” guide **inside the homepage and checkout**
- Nigerian Naira prices, sample verified-seller records, local JSON Server database

## Educational concepts
ES6: `let`, `const`, block/function scope, arrow functions, objects, `map`, `filter`, `reduce`, `forEach` in `src/utils/shop.js`.
React: JSX, functional components, props, state, event handlers, fragments in `HowItWorks`, hooks (`useEffect`), Virtual DOM reconciliation, class lifecycle (`LegacyCounter`).
REST: GET `/products`, `/sellers`, `/orders`; POST `/products`, `/orders`; PUT `/products/:id`, `/orders/:id`; DELETE `/products/:id`.

## Important limitations
- JSON Server has **no authentication, authorisation, or real verification**. Seller selection is a presentation-only role switch. Never deploy it publicly as-is.
- Sample WhatsApp numbers are placeholders; replace them with consenting sellers' real numbers before testing the link.
- Demo Paystack is **not** integrated with Paystack and cannot accept real payments. Never treat a demo-paid label as proof of payment.
- Orders and customer contact details are visible to anyone with local API access. Use fictitious information for demonstrations.
- Order totals exclude delivery fees, which sellers arrange separately.
- The WhatsApp message opens after order creation. Popup blocking may require allowing the browser to open WhatsApp.
- For a production launch add server-side auth, approved seller onboarding, access control, private order lookup, input validation, stock reservation, webhook-verified payments, and a real backend/database.

## Presenting
Read `PRESENTATION_GUIDE.md` for the step-by-step demonstration.

## Independent project ports

Corpers Corner uses API port **3002** and Vite port **5174**. ShopEase remains untouched on ports 3001 and 5173.

## Demo-only security limitations

The seller dashboard is not authenticated, and order lookup is not access-controlled. Use fictional customer information only. Do not deploy publicly or accept real payments until authentication, authorization, payment verification and data protection are implemented.

## Community marketplace expansion (October 2026)

The storefront includes AI-generated illustrative photos of fictional NYSC corps members and seller scenes in `public/images/`. These are **not real photographs or verified seller endorsements**. New sample products include cosmetics, meat pies, zobo, milkshakes, music boxes, abayas, and children's outfits. The navigation adds **Services** and **Accommodation**.

Service and accommodation listings are stored under `listings` in `db.json`; enquiries are stored under `enquiries`. Demo users can create/edit/delete listings to demonstrate REST operations, but this is **not secure multi-user authorization**. The accommodation examples are fictional: never send money for an accommodation listing without verifying the advertiser and inspecting the property. Seller verification and Paystack payments remain demonstrations, not production implementations.

The standalone project uses Vite port **5174** and JSON Server port **3002**. Start `npm run server` and `npm run dev` from the **corpers-corner** directory in separate terminals. A successful local `npm run build` is still required before presentation.
