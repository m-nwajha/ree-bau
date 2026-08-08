# STATUS — ree-bau

> Single source of truth for resuming work. Read this FIRST when starting a session.
> Update this file at the end of every work phase so the next `/clear` resumes in 1 read.
> Last updated: 2026-08-08

---

## ✅ Done

<!-- Move items here from "🚀 Next phase" when finished. Group by area. -->

- **Theme groundwork:** ported Builty theme's vendor CSS (bootstrap, fontawesome, magnific-popup) + webfonts into `public/`, SCSS partials into `src/styles/scss/`, wired into `src/app/layout.tsx`. Accent color rebranded `#ffee02` → `#e65e24` (single `$accent-1` var). Real logo (`public/images/logo.png`) wired into `ui/Logo.tsx`.
- **Header:** `src/components/common/Header/index.tsx` ported from theme's `DefaultHeader.js` — desktop/mobile nav off one `navbarRoutes` const (dropdown support via `subRoutes`), active-link state, dark/light theme toggle (`useLocalStorage`), off-canvas info panel, phone CTA. Real social links (Instagram, TikTok) wired via `contactInfo`/`socialLinks` consts.
- **Footer:** `src/components/common/Footer/index.tsx` ported from theme's `DefaultFooter.js` — logo + phone CTA, "Über REEBAU" blurb, **"Nützliche Links"** column (Services/Kontakt/Impressum/AGB/Datenschutzerklärung) replacing the theme's address/phone/email "Contact" column, Newsletter form (structurally ported, not wired — see Open decisions), copyright `© {new Date().getFullYear()} Ree Bau – Powered By OrionLens` (dynamic year, links to orionlens.net).
- **MainLayout:** `src/components/layouts/MainLayout.tsx` composes `Header → children → Footer`, wired into root layout.
- **navbarRoutes.ts** now carries the real Services dropdown (Bodenleger, Maler, Fliesenleger, Renovierer, Haustüren, Trockenbau) — supersedes the older 5-service list in `.wolf/reebau-content.md` (that file's Leistungen section is stale, reconcile when building the actual Services page/mock data).

---

## 🚀 Next phase

**Goal:** Build the REEBAU multi-page site (German-language Bau/Trockenbau company) using the content in `.wolf/reebau-content.md`, with the confirmed page structure below.

### Site structure (confirmed by user)
- **Home** (`/`) — Hero, Services teaser, Qualität/Zuverlässigkeit/Präzision, Zahlen & Fakten, Team, Kontakt teaser.
- **Services** (`/services`) — listing of all 5 services (Innenausbau, Raumausstattung, Trockenbau, Malerarbeiten, Bodenverlegung) as cards linking to detail pages.
- **Services detail** (`/services/[slug]`) — dynamic route, one page per service, rendered from a shared services data source (not 5 separate hardcoded pages).
- **Galerie** (`/galerie`) — project/photo gallery (no source content yet — ask user for images/copy when reached).
- **Über uns** (`/ueber-uns`) — company/team content (from "Erfahrenes Team", "Bauliche Exzellenz" sections).
- **Kontakt** (`/kontakt`) — phone/email/address, Kontaktformular with consent checkbox, Google Maps embed.
- **Legal pages:** `/impressum`, `/agb`, `/datenschutz` (Datenschutzerklärung) — no source copy yet, standard German legal boilerplate needed (ask user or draft placeholders clearly marked TODO).

### Acceptance criteria
1. All 8 routes above exist and are reachable from nav (Home, Services, Galerie, Über uns, Kontakt) + footer (Impressum, AGB, Datenschutzerklärung).
2. Services listing page + dynamic `[slug]` detail page both render from one shared data file (no duplicated content).
3. Contact form has consent checkbox for data storage per Datenschutz text.
4. Legal pages exist (even as clearly-marked placeholders) rather than dead links.

### Files to create / edit
Per confirmed convention (see `.wolf/architecture-conventions.md`): every `app` route is a thin Server Component wrapper that imports its real page from `src/components/views/<PageName>/index.tsx`.

| Type | File | Content |
|---|---|---|
| edit | `src/app/layout.tsx` | Root layout (Client Component): Header, Footer, cookie-consent banner; metadata title template + default |
| edit | `src/app/page.tsx` | Thin wrapper → `views/Home` |
| new | `src/components/views/Home/index.tsx` (+ `SectionA.tsx` etc., `style.module.css`) | Home page sections |
| new | `src/app/services/page.tsx` + `src/components/views/Services/index.tsx` | Services listing (cards → detail links) |
| new | `src/app/services/[slug]/page.tsx` + `src/components/views/ServiceDetail/index.tsx` | Dynamic service detail page |
| new | `src/mocks/services.tsx` (mock array of objects) | Shared service data: slug, title, body — single source for listing + detail until real endpoint exists |
| new | `src/mocks/galerie.tsx` | Mock gallery data |
| new | `src/app/galerie/page.tsx` + `views/Galerie/index.tsx` | Gallery page |
| new | `src/app/ueber-uns/page.tsx` + `views/About/index.tsx` | About page |
| new | `src/app/kontakt/page.tsx` + `views/Kontakt/index.tsx` | Contact page + form + map |
| new | `src/app/impressum/page.tsx`, `agb/page.tsx`, `datenschutz/page.tsx` + matching views | Legal pages |
| done | `src/components/common/Header/`, `Footer/` | Shared global chrome, wired into `MainLayout` |
| new | `src/components/common/CookieConsent`, `ScrollToTopButton` | Still pending |
| new | `src/components/ui/` — `Button`, `Popup`, `Inputs`, etc. | Generic primitives |
| done | `src/constants/navbar-routes.ts`, `contact-info.ts` | Reused-everywhere data |
| done | `src/styles/` | Global styles + CSS pulled from the user's ready-made template |
| done | `src/@types/navigation.ts` (`@/@types/...` — actual folder is `@types`, not `types`) | Reusable shared TS types |

### Closed decisions
- Site content sourced from `.wolf/reebau-content.md` (mirrors user-provided `.local/contant.md`, which is gitignored).
- Terminology: use **"Services"** (not "Leistungen") as the section/nav/page label throughout the content and UI, even though body copy stays German.
- Services page = listing page + dynamic per-service detail pages (`[slug]`), not static hardcoded pages per service.
- **Architecture confirmed** — see `.wolf/architecture-conventions.md` for full detail: `app/` pages are Server Components only (thin wrappers), real UI lives in `src/components/views/<PageName>/`, PascalCase naming, no component duplication (reuse across pages), mock data for Services/Galerie now (ISR fetch later), metadata titles exclude site name (template lives in root layout), root layout is the one Client Component (Header/Footer/cookie banner).
- User has a ready JSX theme (react-bootstrap-based) in `.local` to port to TSX, path-by-path, on explicit instruction only — do not explore other `.local` paths.

### Open decisions
- Styling approach details (react-bootstrap overrides via CSS module vs. plain CSS) — will follow the theme once its paths are shared.
- Galerie: no images/copy provided yet — need source material.
- Legal pages (Impressum/AGB/Datenschutzerklärung): no source copy yet — need real company/legal details from user, or explicit placeholder approval.
- Google Maps / translation / tracking: which providers, and cookie-consent handling (custom vs. library)?
- Exact `mocks` directory path — confirm on first use per `.wolf/architecture-conventions.md` §5 (constants/@types locations are now settled: `src/constants/`, `src/@types/`).
- Footer Newsletter form has no real backend wired (theme used Mailchimp with placeholder keys) — needs a real provider or should be dropped.
- Services list mismatch: `navbarRoutes.ts` now has 6 real services (Bodenleger, Maler, Fliesenleger, Renovierer, Haustüren, Trockenbau) but `.wolf/reebau-content.md` still documents the original 5 (Innenausbau, Raumausstattung, Trockenbau, Malerarbeiten, Bodenverlegung) — reconcile before building the Services listing/detail pages and mock data.

---

## 📁 Active architecture

- **Stack:** Next.js (App Router) + TypeScript, react-bootstrap (from user's ready theme, JSX→TSX port), CSS Modules.
- **Key modules:** `src/app/**` (route wrappers only) · `src/components/views/<Page>/` (real page UI, Server Components) · `src/components/common/` (Header/Footer/cookie banner/ScrollTop) · `src/components/ui/` (Button/Popup/Inputs) · `src/mocks/` (Services/Galerie data until endpoints exist) · `src/constants/` (reused data e.g. contact info) · `src/styles/` (global + template CSS) · `src/types/` (reusable shared TS types, `@/types/...`).
- **Patterns:** full detail in `.wolf/architecture-conventions.md`. TL;DR — app pages are Server-Component thin wrappers; root layout is the one Client Component; PascalCase everywhere in `components`; never duplicate a component, reuse across pages; metadata titles omit site name (root layout owns the template).

---

## ⚠️ External blockers (don't block coding)

- _<env vars, secrets, external accounts, manual steps>_

---

## 🔧 Useful commands

```bash
# add the most-used commands here so the next session has them ready
```

---

## 📚 References (read IF needed)

- `.wolf/cerebrum.md` — User Preferences + Do-Not-Repeat + Decision Log
- `.wolf/anatomy.md` — token-efficient file index
- `.wolf/buglog.json` — known bugs + fixes
