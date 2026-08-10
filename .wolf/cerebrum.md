# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-08-08

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->

## Key Learnings

- **Project:** ree-bau
- **Description:** This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
- **Architecture:** full binding conventions recorded in `.wolf/architecture-conventions.md` (source: user's `.local/prompt.md`) — `app/` pages are thin Server-Component wrappers around `src/components/views/<Page>/index.tsx`; root layout is the sole Client Component; PascalCase naming; never duplicate components, always reuse; mock data (`src/mocks/`) for Services/Galerie until real endpoints (ISR later); page metadata titles never include the site name (root layout defines the template + default); reusable shared TS types go in `src/@types/` (`@/@types/...` — actual folder is `@types`, not `types`), not re-declared per file.
- **Views share one style.css, not per-sub-component:** e.g. `src/components/views/Home/style.css` holds overrides for ALL of Hero/Services/About/WhyUs/HowWeWork, imported by whichever sub-component needs it. This differs from `common/` components (Header/, Footer/), which each get their own folder + own style.css since they're standalone, not page sub-components.
- **Mock-to-ISR pattern:** page-level `views/<Page>/index.tsx` imports mock arrays from `src/mocks/` and passes them down to section components as a `data` prop (e.g. `<Services data={services} />`) rather than the section component importing the mock itself. This is deliberate prep for ISR — later, `index.tsx` swaps the mock import for a real `fetch`, and the section component (which only knows about its typed prop) doesn't change at all.
- **Header/MainLayout porting pattern:** when porting the ready theme's Header/Footer, follow the precedent from the user's prior project `medjana` (see `.wolf/architecture-conventions.md` §12): MainLayout is Client Component assembling ScrollToTopButton → Header → children → Footer → CookieConsent → floating widgets in that fixed order; Header drives desktop+mobile nav off one typed `navbarRoutes` constants array (never duplicated), active-link state via a small `usePathname` helper, dropdown vs plain link branches on an optional `subRoutes` field. Styling/classnames are theme-specific — only the structural logic carries over.

## Do-Not-Repeat

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->

- [2026-08-08] User's ready-made JSX theme lives under `.local/`. Do not browse or pull from any `.local` theme path on your own — only touch the exact path the user explicitly gives, one at a time.
- [2026-08-08] When porting a theme component (e.g. Header), also check the theme's `pages/_document.js` and `pages/_app.js` for vendor stylesheets loaded via plain `<link>` tags (e.g. bootstrap.min.css, fontawesome.min.css) — these don't show up in the component file or the SCSS partials, but the ported markup (grid classes like `container`/`row`/`col-lg-*`, icon fonts) silently breaks without them. Copy the linked CSS + any fonts/assets it references (check for relative `url()` paths) into `public/`, and add matching `<link>` tags to the root layout's `<head>`.
- [2026-08-08] When simplifying a theme's inline SVG (stripping unused `<defs>`/`<clipPath>`/`<g>` wrappers), check every child `<path>` for a `transform="translate(...)"` attribute first — these position the path within the viewBox and must move onto the path directly, not get dropped with the wrapper. Dropping one silently mispositions/overlaps icon shapes (bug-002).
- [2026-08-08] Don't preemptively add CSS overrides (especially `!important`) to fix a rendering issue I only foresaw from reading the SCSS, before the user asks for it — when I swapped the footer's icon-only submit button for a text button ("Jetzt anfragen"), I added a `!important`-heavy style.css override anticipating the theme's fixed-size button box would clip the text. User rejected both the text-button change and the override; they wanted the original icon kept and the styling effort spent on the actual ask (Nützliche Links list style) instead. When content changes might visually clash with a rigid themed selector, prefer keeping the original element shape (icon-only button) unless the user explicitly asks for a different visual, and only style what was actually requested.
- [2026-08-08] When a theme card/icon slot originally used `<img>`/`<svg>` (e.g. `.svg-icon img`, `.service-two-icon svg,img`) and there's no real icon asset to put there, swapping in a Font Awesome `<i>` icon silently renders unstyled/invisible — those selectors don't target `i`. Check first whether the theme *also* already styles a bare `i` in that same slot for something else (e.g. `.service-two-icon i` was the hover-reveal arrow link, not a main icon) — if so, add an extra distinguishing class and scope new CSS to it instead of colliding with the existing rule.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->

- **[2026-08-08] Site structure:** Home, Services, Galerie, Über uns, Kontakt + legal pages (Impressum, AGB, Datenschutzerklärung). Services page = listing (`/services`) + dynamic detail pages (`/services/[slug]`) driven by one shared data source, not 5 static hardcoded pages. Reason: user explicitly confirmed this page list and the dynamic-detail requirement.
- **[2026-08-08] Terminology:** Use English word "Services" (not "Leistungen") as the nav label / section heading / page title across the site, even though all body copy stays German. Reason: explicit user instruction ("اعتمد كلمة Services كمصطلح في المحتوى").
- **[2026-08-09] Never fabricate testimonials or partner/client logos.** When porting a theme page whose section list includes a `TestimonialSlider` or `PartnersSlider` (or similar — customer quotes, brand-logo strips, review scores) and REEBAU has no real content for it, skip the section and flag it in STATUS.md rather than inventing fake customer names/quotes or fake partner logos. This is different from other content gaps (missing icons, missing hero photos, generic process steps) which are safe to approximate — fabricated reviews/endorsements are a hard line, not a judgment call. Revisit only when the user supplies real testimonials/partners.
