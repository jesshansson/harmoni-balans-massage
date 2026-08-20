# Audit: Harmoni och Balans

Verified by reading the repo: one route (`/`) plus a 404 page, all content in `src/data/siteData.ts`, sections Navbar/Hero/About/Treatments/Contact/Footer, scroll animations via `AnimateOnScroll`, no sitemap, no structured data, no branded favicon config, two large PNGs (`annica.png` 759 kB, `logo.png` 237 kB), one placeholder test.

## Must (real problems, small fixes)

1. **Local SEO basics** — `index.html`: title/description are generic ("Massage & Behandlingar") with no city, no canonical, no `og:locale`, no `theme-color`. Add Stockholm/Kungstensgatan wording, canonical, `og:locale=sv_SE`, `twitter:card`.
2. **LocalBusiness structured data** — no JSON-LD anywhere. Add a `HealthAndBeautyBusiness` block generated from `siteData.ts` (name, address, phone, email, booking URL, treatment list). Opening hours are left out until you provide them.
3. **Sitemap + robots** — `public/robots.txt` has no `Sitemap:` line and `public/sitemap.xml` does not exist.
4. **Accessibility gaps**
   - Portrait alt text is English ("Portrait of Annica") on a Swedish site; make it descriptive Swedish.
   - Mobile menu button lacks `aria-expanded`/`aria-controls`.
   - No skip-to-content link, no `<main>` landmark on the page wrapper.
   - Booking links open in new tabs without telling screen readers; add "(öppnas i ny flik)" via `sr-only`.
   - No `prefers-reduced-motion` handling: `AnimateOnScroll` and pulse/leaf animations keep moving. Respect the OS setting.
5. **Performance** — 1 MB of PNG on first paint. Convert both images to compressed WebP (keeping PNG fallback for the logo if needed), add `width`/`height` to prevent layout shift, `loading="lazy"` + `decoding="async"` on the portrait, and keep the logo eager.
6. **404 page in Swedish** — `NotFound.tsx` is English ("Oops! Page not found") and logs to `console.error`. Translate and link back to the start page and booking.

## Content correctness (needs your input — will not invent anything)

Flagging real inconsistencies found in `siteData.ts`:
- **Harmonistunden**: `duration: "45 min"` but the text says "70 minuter". Which is right?
- **Fotmassage inkl. fotbad**: heading says 45 min / 500 kr — earlier edits mentioned 550 kr. Confirm the price.
- `aboutMe.name` is still the placeholder "Ditt Namn" (unused in UI, but should be "Annica Hansson").
- Missing for good local SEO: opening hours, org/F-skatt info, cancellation policy, gift cards, whether treatments are Friskvård-eligible. I will add fields only after you supply the values.

## Strong value (cheap, high impact)

7. **Sticky mobile booking bar** — a single fixed "Boka tid" bar on small screens so the CTA is always reachable while scrolling treatments.
8. **Trust row under Hero** — small factual line built from existing data (adress, "certifierad massageterapeut", "bokning via Bokadirekt"). No invented claims.
9. **Practical info block in Contact** — nearest landmark/transport and "avbokning" text once you provide it; placeholder-free until then.
10. **Data-shape safety** — Treatments renders `treatments.slice(0, -2)` and `slice(-2)` as "Fotmassage", so adding a treatment silently breaks the grouping. Replace with an explicit `group: "standard" | "fotmassage"` field per treatment and render by group, with an empty-state guard. Keeps the file just as easy to edit.
11. **Tests** — replace the placeholder test with two real ones: siteData integrity (unique ids, non-empty price/duration, valid group, booking URL is https) and a render test that the booking URL appears and headings are present.

## Skip

- Redesign, dark mode, CMS, database/auth, contact form (Bokadirekt + phone/mail is enough and avoids GDPR handling), blog, multi-page routing, analytics or any paid dependency, testimonials (none verified).

## Files touched

- `index.html` (metadata, canonical, theme-color)
- `public/robots.txt`, new `public/sitemap.xml`
- new `src/components/StructuredData.tsx`, `src/components/MobileBookingBar.tsx`
- `src/pages/Index.tsx` (`<main>`, skip link target, new components)
- `src/components/Navbar.tsx` (aria, skip link)
- `src/components/About.tsx` (alt text, image attrs)
- `src/components/Hero.tsx` (image attrs, trust row)
- `src/components/Treatments.tsx` (group-based rendering, empty state)
- `src/components/Contact.tsx` (link labels)
- `src/components/AnimateOnScroll.tsx`, `src/index.css` (reduced motion)
- `src/pages/NotFound.tsx` (Swedish)
- `src/data/siteData.ts` (group field, name fix; content values only after your confirmation)
- `src/test/siteData.test.ts`, `src/test/index.test.tsx` (replacing `example.test.ts`)
- `src/assets/` optimized images

## Acceptance criteria

- Title under 60 chars containing "massage" + "Stockholm"; description under 160 chars; canonical and og/twitter tags present.
- JSON-LD validates as a single `HealthAndBeautyBusiness` with name, address, telephone, email, url; no invented fields.
- `sitemap.xml` reachable; robots.txt references it.
- Exactly one `<h1>`; `<main>` present; skip link works with keyboard; mobile menu button reports state; all images have meaningful Swedish alt text.
- With "Reduce motion" enabled, no fade/translate/pulse animations run and all content is visible.
- Hero + portrait images total well under 300 kB; no layout shift on load.
- Adding or removing a treatment in `siteData.ts` renders correctly without touching component code.
- `npm run build`, `npm run lint`, `npm test` all pass; page verified at 375 px and 1280 px.

## Implementation batch (one pass)

Metadata + robots/sitemap + JSON-LD → accessibility and reduced-motion → image optimization → treatment grouping and empty state → Swedish 404 → mobile booking bar and trust row → tests, then build/lint/test and a mobile + desktop screenshot check in the same pass.

Answer the four content questions above and I will fold them into the same batch; otherwise I implement everything except the unverifiable content.
