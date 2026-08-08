# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-08-08

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->

## Key Learnings

- **Project:** ree-bau
- **Description:** This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
- **Architecture:** full binding conventions recorded in `.wolf/architecture-conventions.md` (source: user's `.local/prompt.md`) — `app/` pages are thin Server-Component wrappers around `src/components/views/<Page>/index.tsx`; root layout is the sole Client Component; PascalCase naming; never duplicate components, always reuse; mock data (`src/mocks/`) for Services/Galerie until real endpoints (ISR later); page metadata titles never include the site name (root layout defines the template + default); reusable shared TS types go in `src/types/` (`@/types/...`), not re-declared per file.

## Do-Not-Repeat

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->

- [2026-08-08] User's ready-made JSX theme lives under `.local/`. Do not browse or pull from any `.local` theme path on your own — only touch the exact path the user explicitly gives, one at a time.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->

- **[2026-08-08] Site structure:** Home, Services, Galerie, Über uns, Kontakt + legal pages (Impressum, AGB, Datenschutzerklärung). Services page = listing (`/services`) + dynamic detail pages (`/services/[slug]`) driven by one shared data source, not 5 static hardcoded pages. Reason: user explicitly confirmed this page list and the dynamic-detail requirement.
- **[2026-08-08] Terminology:** Use English word "Services" (not "Leistungen") as the nav label / section heading / page title across the site, even though all body copy stays German. Reason: explicit user instruction ("اعتمد كلمة Services كمصطلح في المحتوى").
