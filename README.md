# Mini-Commerce

A tiny e-commerce client-side prototype built with **Next.js App Router**, **TailwindCSS**, and **TypeScript**. Visitors can browse products, manage a cart, and complete a mock checkout — all while maintaining state between reloads.

---

## Project Overview

**Mini-Commerce** simulates a modern online storefront with a fully client-rendered experience. It allows users to:

- Browse a catalogue of products
- View product details
- Add/remove items from cart
- Complete a mock checkout
- See a custom order success page

All cart state is persisted using `Zustand` middleware + `localStorage`, and product data is fetched with `React Query`.

---

## Design Approach

- **Mobile-first responsive** UI using TailwindCSS utility classes
- Clean and minimal layout with modern accessibility patterns
- Consistent layout across pages with conditional rendering (e.g., no header on 404)
- Semantic HTML for structure and assistive tech support

---

## Tools & Techniques

| Tool                                    | Usage                                           |
| --------------------------------------- | ----------------------------------------------- |
| **Next.js App Router**                  | Routing, layouts, and React Server Components   |
| **TypeScript (strict mode)**            | Type safety across all components               |
| **TailwindCSS v4+**                     | Styling with dark mode, custom design tokens    |
| **React Query (@tanstack/react-query)** | Product fetching, caching, error/loading states |
| **Zustand (with persistence)**          | Global cart state and derived totals            |
| **Sonner**                              | Toast notifications for UX feedback             |
| **ESLint + Prettier**                   | Consistent code formatting and linting          |
| **Jest + RTL / Playwright**             | Basic component or e2e test coverage            |

---

## 🔍 SEO Strategy

- Centralized metadata configuration in [`lib/seo.ts`](./lib/seo.ts)
- Dynamic metadata support for individual product pages
- Includes:
  - `title`, `description`, and Open Graph tags
  - Twitter Card support
  - Structured metadata via Next.js API
  - Optimized image rendering via `next/image`
- Accessible content with alt text, keyboard nav, and semantic tags

---

## 🧱 Error-Handling Technique

- Graceful fallbacks for:
  - Product fetch failures (`React Query` error states)
  - Cart actions (invalid quantity, empty cart)
  - Unknown routes (`app/not-found.tsx`)
- `notFound()` used in dynamic product pages if product doesn't exist
- Clean 404 UI with “Go back home” CTA
- UI errors are safely isolated with suspense boundaries and client components

---

## Improvements

- Dark/light mode toggle with persistent user preference

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```
