# Corpers Corner — Presenter Guide

## Opening (3 min)
At NYSC CDS meetings, corps members are encouraged to promote their businesses. Photos and videos shared in busy group chats are difficult to find later. Corpers Corner is a demo marketplace for discovery, one-seller carts, and direct seller contact.

## Homepage and React (10 min)
Open Marketplace and point to the illustrated How It Works steps. Explain JSX in `Store.jsx`, reusable `ProductCard` props, event handler `onAdd`, and stateful search/filter inputs. Discuss React rendering and reconciliation (often called Virtual DOM).

## ES6 (10 min)
Open `src/utils/shop.js`. Demonstrate `const`, `let`, block scope, arrow functions, objects, `map`, `filter`, `reduce`, `forEach`. Search for a product and calculate cart total.

## Cart and checkout (10 min)
Add a product from seller A; try seller B and explain the confirmation that enforces one seller per checkout. In cart, point to the second illustrated guide. Enter fictitious buyer information. Choose demo payment, simulate success/pending/failure, and explain that **no real payment happens**. Repeat with WhatsApp: order is POSTed, a reference is generated from the saved ID, and a prefilled message opens to a placeholder number.

## REST APIs (10 min)
Use browser Network tab. GET products/sellers; POST an order; POST a new product in seller demo; PUT product changes and fulfilment; DELETE a sample product. Show request method, URL, JSON body, response, and status code.

## Lifecycle (5 min)
Seller demo → toggle LegacyCounter. Explain `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` and compare with functional `useEffect` in App/Orders. The HowItWorks component uses `React.Fragment` in its `.map` output.

## Discussion (5 min)
Why is JSON Server only a prototype? How would a real seller be verified? Why must payment confirmation come from a trusted server-side Paystack webhook? Why must buyers not see other buyers' details? Why separate sellers' carts?

## Notes
All seller identities and numbers are illustrative. Public browsing and seller approval are modeled in demo data only; authentication, real payment, and secure access control are not implemented.

## Updated presentation flow
1. Open Marketplace: show the three fictional corps members and the authentic CDS-inspired seller imagery.
2. Search cosmetics, meat pies, zobo, milkshake, abaya and music box products. Demonstrate `map`, `filter`, and `reduce`.
3. Add products from one seller and explain the one-seller checkout rule.
4. Complete a **demo** Paystack-style checkout or WhatsApp enquiry (no money moves).
5. Visit Services and Accommodation: create a demo listing (POST), edit (PUT), delete (DELETE), and refresh (GET).
6. Request listing details and inspect the POST request to `/enquiries` in browser DevTools.
7. Explain that real identity verification, access controls, moderation, secure payments, and property verification are future production work.
