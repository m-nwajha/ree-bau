# STATUS — ree-bau

> Single source of truth for resuming work. Read this FIRST when starting a session.
> Update this file at the end of every work phase so the next `/clear` resumes in 1 read.
> Last updated: 2026-08-10

---

## ✅ Done

<!-- Move items here from "🚀 Next phase" when finished. Group by area. -->

- **Theme groundwork:** ported Builty theme's vendor CSS (bootstrap, fontawesome, magnific-popup) + webfonts into `public/`, SCSS partials into `src/styles/scss/`, wired into `src/app/layout.tsx`. Accent color rebranded `#ffee02` → `#e65e24` (single `$accent-1` var). Real logo (`public/images/logo.png`) wired into `ui/Logo.tsx`.
- **Header:** `src/components/common/Header/index.tsx` ported from theme's `DefaultHeader.js` — desktop/mobile nav off one `navbarRoutes` const (dropdown support via `subRoutes`), active-link state, dark/light theme toggle (`useLocalStorage`), off-canvas info panel, phone CTA. Real social links (Instagram, TikTok) wired via `contactInfo`/`socialLinks` consts.
- **Footer:** `src/components/common/Footer/index.tsx` ported from theme's `DefaultFooter.js` — logo + phone CTA, "Über REEBAU" blurb, **"Nützliche Links"** column (Services/Kontakt/Impressum/AGB/Datenschutzerklärung) replacing the theme's address/phone/email "Contact" column, Newsletter form (structurally ported, not wired — see Open decisions), copyright `© {new Date().getFullYear()} Ree Bau – Powered By OrionLens` (dynamic year, links to orionlens.net).
- **MainLayout:** `src/components/layouts/MainLayout.tsx` composes `Header → children → Footer`, wired into root layout.
- **navbarRoutes.ts** now carries the real Services dropdown (Bodenleger, Maler, Fliesenleger, Renovierer, Haustüren, Trockenbau) — supersedes the older 5-service list in `.wolf/reebau-content.md` (that file's Leistungen section is stale, reconcile when building the actual Services page/mock data).
- **Header sticky-on-scroll** fixed (was dropped during the initial port — `useEffect` scroll listener toggles `.is-sticky` on `#stickyHeader`, styled in `Header/style.css`).
- **Home page (`/`) fully built**, all Server Components except where noted, composed in `src/components/views/Home/index.tsx`:
  - `Hero.tsx` — Swiper slider (Client), 2 slides, real photos.
  - `Services.tsx` — takes `data: Service[]` prop, `.slice(-5)`, sourced from `src/mocks/services.ts` + `src/@types/service.ts`. Cards link to `/services`.
  - `Gallery.tsx` — Swiper slider (Client), takes `data: GalleryItem[]` prop, `.slice(-5)`, sourced from `src/mocks/gallery.ts` + `src/@types/gallery.ts`. Cards link to `/galerie`.
  - `HowWeWork.tsx`, `About.tsx` (goal/team section), `WhyUs.tsx` (Zahlen & Fakten repurposed from the theme's Pricing section), `ContactFaq.tsx` (FAQ accordion + mini contact form, Client, form not wired to a backend yet).
  - Shared `views/Home/style.css` holds dark-mode + icon-slot fixes for all the above (see `.wolf/cerebrum.md` for the recurring "theme styles `<img>`/`<svg>` icon slots, not `<i>`" gotcha).
- **Über uns page (`/ueber-uns`) built**: `src/app/ueber-uns/page.tsx` → `src/components/views/About/index.tsx`. First pass ported from theme's `core-values.jsx`, then **replaced** per user request with theme's `about.jsx` sections instead: "Wer wir sind" + "Warum REEBAU" (2-col intro), stats counters (500+/95%/10 Jahre, reused from Home's WhyUs numbers), "So arbeiten wir" 4-step process (Beratung → Planung → Umsetzung → Übergabe — generic reasonable steps, not sourced from real content since REEBAU never documented its process), "Ihre Vorteile" benefits checklist, closing CTA banner. Explicitly excluded per user instruction: `TeamSlider` ("Our Skilled Team"). Also skipped (not requested to skip, but flagged instead of faked): `TestimonialSlider` and `PartnersSlider` — REEBAU has no real customer testimonials or partner logos, and inventing fake quotes/logos would be fabricating reviews/endorsements, so these were left out rather than filled with placeholder content. Revisit if real testimonials/partners become available.
- **`src/components/common/Breadcrumb/index.tsx`** — new shared component (ported from theme's `PageBanner.jsx`), page-title banner + Home/current breadcrumb trail. Takes `title` + optional `description` props. Use this on every future inner page instead of rebuilding it.
- **Kontakt page (`/kontakt`) built**: `src/app/kontakt/page.tsx` → `src/components/views/Kontakt/index.tsx`, ported from theme's `contact.jsx`. Contact form + info sidebar (real address/phone/email via `contactInfo`, real social links) + FAQ accordion (shared `src/mocks/faq.ts`, also used by Home's `ContactFaq`) + Google Maps embed built from the real address via `https://www.google.com/maps?q=<address>&output=embed` (no fake coordinates). Skipped the theme's `.bio` block (director photo/name/signature) — REEBAU has no real named contact person, and inventing one would be fabricating an identity, same principle as the testimonials/partners skip.
- **Contact form fields unified**: `src/constants/contact-form-fields.ts` (Name/Telefonnummer/E-Mail/Services/Nachricht config) + `src/components/ui/ContactFormFields.tsx` (shared render — 2-col rows, select pulls options from `src/mocks/services.ts`, textarea full-width) is now used by **both** Home's `ContactFaq.tsx` and the Kontakt page's form — one source of truth for form fields, no duplicated markup. Each page keeps its own `values` state + submit handler; Kontakt additionally has its own consent checkbox (not part of the shared field set).
- **Galerie page (`/galerie`) built**: `src/app/galerie/page.tsx` → `src/components/views/Galerie/index.tsx`, ported from theme's `projects-2.jsx` (2-col large cards). Confirmed: `GalleryItem` stays `{id, title, image}` — no `short` field. Clicking anywhere on a card (not just a title/icon link) opens `src/components/ui/GalleryPopup.tsx`, a custom lightbox built from scratch using the already-loaded `magnific-popup.css` class names (`.mfp-bg`/`.mfp-wrap`/`.mfp-container`/`.mfp-figure`/`.mfp-arrow-left`/`-right`/`.mfp-close`/`.mfp-counter`) for free visual consistency — no Magnific Popup JS library is installed, this is pure React state (`activeIndex`) + keyboard nav (Esc/←/→). Dropped the theme's fake pagination UI (non-functional demo markup, only 5 real items so not needed).
- **Services detail page (`/services/[slug]`) built**: `src/app/services/[slug]/page.tsx` (Next.js 16 dynamic route, `params` is a `Promise` — uses `PageProps<"/services/[slug]">` + `await props.params`, per `AGENTS.md`'s warning to check `node_modules/next/dist/docs/` for this version rather than assume training-data APIs; `generateStaticParams` + `generateMetadata` + `notFound()` for unknown slugs) → `src/components/views/ServiceDetail/index.tsx`. Renders from the same `src/mocks/services.ts` used by the listing page (no duplicated content, per the closed decision in cerebrum.md) — `Service` type gained `image` and `checklist: string[]` fields, mock extended with real per-service checklists sourced from `.wolf/reebau-content.md`. Layout: Breadcrumb → hero image (`next/image`, user-edited from a plain `<img>` to add explicit `width`/`height`) → intro text → "Leistungen im Überblick" checklist (`.innovation ul` pattern).
- **Legal pages built** (`/impressum`, `/agb`, `/datenschutz`): new reusable `src/components/views/Legal/index.tsx` (`LegalPage` component, takes `title`/`description`/`content: LegalContent[]` where each block is `{type: "paragraph"|"list", title?, paragraph?, list?}`) + `src/@types/legal.ts`. Reuses existing `.about-first .who-we-are` typography (headings/paragraphs/icon-prefixed list items) — no new CSS needed. **Impressum** now has the user's own real content (Name des Unternehmens, Eingetragener Firmensitz, Kontaktinformationen incl. Webseite, Haftungsausschluss) — the only fields still open are Geschäfts-ID-Nr., Umsatzsteuer-Nr., and Aufsichtsbehörde, each rendered with the user-provided literal placeholder text ("Bitte geben Sie Ihre ... ein") until real values are supplied; **not fabricated**. **Datenschutzerklärung** now has the user's full real 9-section DSGVO text (Verantwortlicher, erhobene Daten, Zweck, Weitergabe, Speicherdauer, Betroffenenrechte, Kontaktformular, Social Media, Änderungen), split into `LegalContent` paragraph/list blocks. **AGB** now has AI-drafted standard German Handwerks-AGB (11 sections: Geltungsbereich, Vertragspartner, Vertragsschluss, Leistungsumfang, Preise/Zahlung, Termine, Mitwirkungspflichten, Gewährleistung, Haftung, Kündigung, Schlussbestimmungen) written at the user's explicit request, using real company data from `contact-info.ts` and only generic/statutory-default clauses (no invented business-specific facts like exact warranty periods beyond referencing gesetzliche Bestimmungen) — **this is boilerplate, not lawyer-reviewed; flag for legal review before relying on it commercially.** Footer's "Nützliche Links" already pointed to `/impressum`, `/agb`, `/datenschutz` — all three now resolve with real content. **Follow-up needed from user:** Impressum's Geschäfts-ID-Nr./USt-Nr./Aufsichtsbehörde; legal review of AGB.
- **Cookie-consent banner built**: new `src/components/common/CookieConsent/index.tsx` (+ own `style.css`, no matching class existed in the Builty theme so this is bespoke CSS using the site's accent `#e65e24` / dark `#0f0f0f` palette). Client Component, persists the user's choice via the existing `useLocalStorage` hook (key `cookie-consent`, `"accepted" | "declined" | null`) — renders nothing once a decision is stored. Fixed bottom-left banner with a short notice + link to `/datenschutz` + Ablehnen/Akzeptieren buttons. Wired into `src/components/layouts/MainLayout.tsx` after `<Footer />`. Site currently has no analytics/tracking scripts to gate, so this is informational/consent-recording only for now — if tracking scripts are added later, they should check `cookie-consent` in localStorage before loading.
- **Scroll-to-top button built**: new `src/components/common/ScrollToTopButton/index.tsx`, ported from the theme's `Layouts.js` markup (`<button id="scrollTop" className="scrollTopStick"><i className="fa-solid fa-arrow-up" /></button>`) — the theme's own `.scrollTopStick`/`.active` CSS was already present in `_basic.scss` (fixed bottom-right circle, hidden by default, `.active` reveals it), so no new CSS was needed. The theme's show/hide + smooth-scroll behavior lives in an unopened utility (`@common/scrollAnims`, out of scope per the `.local` browsing restriction), so it was reimplemented directly using the same scroll-listener pattern already used for Header's sticky toggle: `useEffect` + `window.addEventListener("scroll", ...)` toggles `active` past `scrollY > 300`, `onClick` does `window.scrollTo({top:0, behavior:"smooth"})`. Wired into `MainLayout.tsx` after `<CookieConsent />`.
- **Services page (`/services`) built by the user themselves** (`views/Services/index.tsx` reusing `Home/HowWeWork` + `Home/Services` with a new `isHome?: boolean` prop — when false, shows all services and hides the "Alle Services ansehen" CTA box). AI then added the remaining sections from theme's `services.jsx`: `ServicesTabs.tsx` (react-bootstrap `Tab`/`Nav`, Client, one tab per real service reusing `src/mocks/services.ts` — which gained a new `image` field, also useful later for `/services/[slug]`), a shared `src/components/common/Counters/index.tsx` (extracted — About page's inline stats duplicate was refactored to use it too, so there's one counters component now, not two copies), and a video-banner section with **just the image, no video** — the theme's `ModalVideo`/`videoId="uemObN8_dcw"` is the theme's own unrelated demo YouTube video; embedding it would misrepresent someone else's video as REEBAU content, so it was dropped rather than faked (same fabrication-avoidance principle as testimonials/partners/bio). Also fixed lazy `description: "Services"`-style metadata placeholders across Services/Über-uns/Kontakt/Galerie routes with real descriptive sentences.

---

## 🚀 Next phase

**Goal:** All 8 core routes now exist (Home, Services listing + `[slug]` detail, Galerie, Über uns, Kontakt, Impressum, AGB, Datenschutz). Remaining work is content completion + a handful of small shared components, not new pages.

### Acceptance criteria (site structure — all routes built)
1. ✅ All 8 routes exist and are reachable from nav (Home, Services, Galerie, Über uns, Kontakt) + footer (Impressum, AGB, Datenschutzerklärung).
2. ✅ Services listing page + dynamic `[slug]` detail page both render from one shared data file (`src/mocks/services.ts` / `src/@types/service.ts`).
3. ✅ Contact form has consent checkbox for data storage per Datenschutz text — Datenschutz page now has real content for it to point to.
4. ✅ Legal pages exist rather than dead links — Impressum and Datenschutzerklärung have the user's real content; AGB has an AI-drafted standard-terms text (see below).

### Remaining work
| Item | Status | Notes |
|---|---|---|
| Impressum: Geschäfts-ID-Nr., Umsatzsteuer-Nr., Aufsichtsbehörde | ⬜ blocked on user | Everything else on the page is real user-supplied content. These three fields show the user's own literal placeholder prompt text until filled — file: `src/app/impressum/page.tsx`. |
| AGB legal review | ⬜ blocked on user/lawyer | `src/app/agb/page.tsx` now has AI-drafted generic Handwerks-AGB (written at user's explicit request, standard/statutory clauses only, real company data) — not lawyer-reviewed, flag before commercial reliance. |
| `ModalVideo`/`react-modal-video` on Services page | ⬜ unresolved | User re-added the theme's own unrelated demo YouTube video (`videoId="uemObN8_dcw"`) to `views/Services/index.tsx` after AI had deliberately dropped it (fabrication-avoidance). Not yet discussed/resolved — raise with user before changing further. |
| `src/components/common/CookieConsent` | ✅ done | See Done section above. |
| `src/components/common/ScrollToTopButton` | ✅ done | See Done section above. |
| `src/components/ui/Button`, `Popup` (generic primitives) | ⬜ not started | |
| Footer Newsletter form | ⬜ open decision | No real backend wired (theme used Mailchimp placeholder keys) — needs a real provider or should be dropped. |
| Google Maps / translation | ⬜ open decision | Kontakt page's map itself is done (real-address embed); no translation library in place. |
| No git commit since `2c1710d` | ⬜ | Breadcrumb, Über-uns rebuild, Kontakt, contact-form-fields extraction, Galerie + GalleryPopup, Services additions, ServiceDetail/`[slug]`, and now Legal pages are all uncommitted. |

### Closed decisions
- Site content sourced from `.wolf/reebau-content.md` (mirrors user-provided `.local/contant.md`, which is gitignored).
- Terminology: use **"Services"** (not "Leistungen") as the section/nav/page label throughout the content and UI, even though body copy stays German.
- Services page = listing page + dynamic per-service detail pages (`[slug]`), not static hardcoded pages per service — implemented, see Done section.
- **Architecture confirmed** — see `.wolf/architecture-conventions.md` for full detail: `app/` pages are Server Components only (thin wrappers), real UI lives in `src/components/views/<PageName>/`, PascalCase naming, no component duplication (reuse across pages), mock data for Services/Galerie now (ISR fetch later), metadata titles exclude site name (template lives in root layout), root layout is the one Client Component (Header/Footer/cookie banner).
- User has a ready JSX theme (react-bootstrap-based) in `.local` to port to TSX, path-by-path, on explicit instruction only — do not explore other `.local` paths.
- **Hard-line, never revisit:** never fabricate testimonials, partner/client logos, named staff/bios, or legal-entity facts (Handelsregister, USt-IdNr, Geschäftsführer name, Aufsichtsbehörde) — flag and leave a clear placeholder instead of inventing. Distinct from that: drafting standard-form legal *boilerplate text* (AGB clauses, Datenschutz structure) using only generic/statutory-default language is fine **once the user explicitly asks for it** — done for AGB on 2026-08-10, still flagged as "not lawyer-reviewed" rather than presented as final.

### Open decisions
- Legal pages: Impressum's Geschäfts-ID-Nr./USt-Nr./Aufsichtsbehörde still need real values from user. Datenschutzerklärung is done with real content; AGB is AI-drafted boilerplate pending legal review (see Remaining work table above).
- Google Maps / translation / tracking: which providers, and cookie-consent handling (custom vs. library)?
- Footer Newsletter form has no real backend wired (theme used Mailchimp with placeholder keys) — needs a real provider or should be dropped.
- `ModalVideo` on Services page — user re-added the theme's demo video after it was intentionally dropped; unresolved, see Remaining work table.

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
