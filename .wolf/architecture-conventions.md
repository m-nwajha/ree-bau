# Architecture Conventions — ree-bau

> Source: user notes in `.local/prompt.md` (gitignored, not versioned) — recorded here permanently for AI sessions.
> These are binding project conventions for how code gets structured. Read before writing any component/page.

## 1. Server vs. Client Components

- **Pages under `src/app/**` are Server Components only. Never make an `app` page a Client Component.**
- The actual page UI lives in `src/components/views/<PageName>/index.tsx`. The `app` route file just imports it and renders it (thin wrapper) — see the exact pattern in §4.
- Any data import/fetch happens in Server Components, never in Client Components.
- Data fetching strategy: eventually ISR (`fetch` with revalidate) once real endpoints exist. **For now**, data comes from mock files (see §5) until the backend endpoint is ready — same shape, swapped later.
- Exception: the root/main layout (Header, Footer, cookie-consent banner, etc.) **is** a Client Component — see §6.

## 2. Metadata / `<title>`

- Do **not** put the site name inside individual page `title` values (e.g. don't write `"Über Uns | REEBAU"`).
- The root layout defines a metadata `title` **template** + **default**, so page-level metadata only needs the page's own title (e.g. `"Über Uns"`) — the template appends the site name automatically.

## 3. Existing theme to extend

- The user has a ready-made React theme/template they want extended into this project. The template is **JSX**; this project is **TSX** — components must be ported/typed, not copy-pasted as-is.
- The user will provide the **exact path(s)** of the components to extend, one at a time.
- **Hard rule: only touch the exact `.local` template path given. Never explore or pull from other paths inside `.local` on your own.**
- **Gotcha (learned 2026-08-08):** the theme also loads vendor CSS (Bootstrap, Font Awesome, Magnific Popup) via plain `<link>` tags in `pages/_document.js` — not through the SCSS partials. When porting any component that uses grid classes (`container`/`row`/`col-lg-*`) or icon fonts, check `_document.js`/`_app.js` for these links too, copy the referenced files from `public/css/` + `public/webfonts/` (or similar) into the project's `public/`, and add matching `<link rel="stylesheet">` tags to `src/app/layout.tsx`'s `<head>`. Skipping this makes ported markup look completely unstyled (no grid/spacing).

## 4. `views` structure (one folder per page)

Example: `src/components/views/Home/`
```
Home/
  index.tsx          # composes all components for this page
  SectionA.tsx        # a sub-component used inside index.tsx
  style.module.css    # CSS module scoped to this page + its sub-components
```

- `index.tsx` is the page's root component; it assembles sub-components like `SectionA.tsx`.
- Sub-components used by only one page live next to that page's `index.tsx`.
- **Never duplicate a component.** If a component was already built for one page (e.g. Home) and another page (e.g. About) needs it, import/reuse it from where it was created — do not recreate a copy.
- `style.module.css`: the theme is mostly built with **react-bootstrap**; extend/override via this CSS module when needed. If bootstrap classes aren't enough, add plain CSS here too.

### Naming convention
- Everything under `components` (including view folders like `Home`, `About`) is **PascalCase**.
- View page component: default export as an arrow function, named `<Page>Page`, e.g.:

```tsx
// src/components/views/About/index.tsx
const AboutPage = () => {
  return (
    <>
      {/* ... */}
    </>
  );
};

export default AboutPage;
```

- The corresponding `app` route file is a thin wrapper:

```tsx
// src/app/about/page.tsx (or ueber-uns/page.tsx per current routing)
import AboutPage from "@/components/views/About";

export const metadata = {
  title: "Über Uns",
  description: "Über Uns",
};

export default function About() {
  return <AboutPage />;
}
```

## 5. Mock data

- Pages/sections whose data isn't available from a real endpoint yet: **Services** and **Galerie**.
- For each, create one TSX file exporting an `array of objects` — used consistently across every page/section that needs that data (single source, not re-typed per page).
- Location: a `mocks` directory (per user note — confirm exact path when reached, likely `src/mocks/`).

## 6. Shared/reused data

- Data reused in many places (e.g. contact info) gets its **own file**, inside `constants` (or colocated in the relevant component if narrowly scoped).

## 7. Root/main layout

- Initially contains: Header, Footer, cookie-consent banner ("رسالة الكويز"), and similar global chrome.
- The root layout is a **Client Component** (the one exception to the server-only rule in §1), because of this interactive chrome.

## 8. `common/` folder

- Shared, reused-everywhere components: `Header`, `Footer`, cookie-consent message, `ScrollToTopButton` ("topTopBtn"), etc.

## 9. `ui/` folder

- Generic, page-agnostic primitives: `Button`, `Popup`, `Inputs`, etc.

## 10. `styles/` folder

- Global styles + CSS files pulled in from the ready-made template.

## 11. `@types` — reusable TypeScript types

- `src/types/` (imported as `@/types/...` via the existing `@/*` → `./src/*` path alias) holds **reusable/shared TypeScript types** — e.g. a `Service` type used by both the mock data in §5 and the views/components that render it, `GalerieItem`, `ContactInfo`, etc.
- Types used by only one component stay local to that file; anything shared across ≥2 files (mocks ↔ views, multiple views, etc.) goes in `src/types/`.

## 12. Reference pattern — MainLayout / Header (precedent from prior project `medjana`)

When the user says "port the Header/Footer from the ready template," this is the **logic** to follow (styling/classnames are theme-specific and will differ — ignore those, follow the structure):

**MainLayout** (root layout, Client Component — consistent with §7):
- Wraps `{children}` in whatever context providers the template scripts need (e.g. a `ScriptsProvider` for third-party/analytics scripts).
- Fixed render order: `ScrollToTopButton` → `Header` → `{children}` → `Footer` → `CookieConsent` → any floating widgets (e.g. a WhatsApp button).
- All of those pieces (`Header`, `Footer`, `CookieConsent`, `ScrollToTopButton`, floating widgets) are components pulled from the shared/common folder (§8) and simply assembled here — `MainLayout` itself has no markup of its own beyond that order.

**Header** (Client Component — needs `usePathname`):
- Nav items come from **one typed constants file** (e.g. `@/constants/navbar-routes` exporting a `navbarRoutes` array + a `NavRoute` type) — the *same* data drives both the desktop and mobile menus, never duplicated. Per §11, if `NavRoute` is reused elsewhere it belongs in `src/types/`; the constants file just imports the type.
- `NavRoute` supports an optional `subRoutes` list. The render branches per item: has `subRoutes` → render a dropdown; no `subRoutes` → render a plain `Link`.
- Active-link state: a small helper (`activeClass(route)`) compares `usePathname()` to the route's `href` and conditionally applies an active class — don't hardcode active state per link.
- Desktop nav and mobile nav are two separate markup blocks (typical when the source is a Webflow-style export) but both are driven by the same `navbarRoutes` array and reuse the same CTA button component (e.g. `ButtonSolid`) rather than each having its own copy.
- Shared UI atoms (`Logo`, `ButtonSolid`/other buttons) come from `ui/` (§9) and accept template-specific pass-through props (e.g. a Webflow interaction id) as a normal prop rather than hardcoding them per usage site.

## Open / to be clarified as we go

- Exact directory for mocks (`src/mocks/`?) and constants (`src/constants/`?) — confirm on first use.
- The user said more notes will follow while we work — keep this file updated as new conventions arrive.
