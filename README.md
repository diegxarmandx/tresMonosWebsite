# Tres Monos Website (Frontend)

Modern frontend-only restaurant website for **Tres Monos** in Mayaguez, Puerto Rico.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Component-based architecture

## Features Included

- Home page with hero, featured dishes, about preview, testimonials, and CTA
- Menu page with category filtering and loading/empty states
- Online ordering page with mock cart behavior, totals, and checkout UI
- About page with polished brand story content
- Contact page with form UI, hours, and map placeholder

## Backend-Ready Notes

The frontend is structured for easy integration with backend services later:

- `src/lib/api/menuApi.ts` contains TODOs for live menu API integration
- `src/lib/api/orderApi.ts` contains TODOs for order submission and Stripe/Square
- `src/components/order/CartSidebar.tsx` includes checkout submission integration TODO
- `src/hooks/useCart.ts` centralizes cart logic for future persistence/session wiring

## Run Locally

```bash
nvm use
npm install
npm run dev
```

Then open `http://localhost:3000`.
