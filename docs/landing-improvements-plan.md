# Landing Page Improvements – Comprehensive Plan

## 1. Typography and alignment

- **Hero**
  - Align headline and body with design: ensure font sizes match (e.g. headline ~5xl, subtext ~xl), line-height and letter-spacing consistent.
  - Check "Get expert feedback on your college essay in minutes" line breaks and spacing so it matches the reference layout.
- **Review Results card**
  - Match "Review Results" and "82/100" badge typography (weight, size).
  - Essay excerpt and feedback block: consistent text sizes (e.g. `text-sm` for excerpt, clear hierarchy for "Strong opening metaphor" and body).
  - Score cards (Voice 85, Structure 78, Insight 82): ensure numbers and labels use the intended sizes and alignment (e.g. large bold number, smaller label).
- **Sections**
  - Section titles (e.g. "Why students choose Univyrse", "How it works"): consistent `text-3xl` (or per design), centered, with subtitle size/color (`text-lg text-muted-foreground`).
  - Card titles and descriptions: consistent use of CardTitle vs CardDescription and spacing so sections align visually.

**Implementation:** Audit `app/page.tsx` and any shared text styles; add or tune Tailwind classes (e.g. `text-4xl`/`text-5xl`, `leading-tight`, `tracking-tight`) and spacing utilities to match the design image.

---

## 2. Copy: remove em dashes

- **Current:** Hero subtext uses an em dash: "fit—without writing".
- **Change:** Replace with a comma or rephrase, e.g. "fit, without writing it for you" or "fit without writing it for you".
- **Audit:** Search the whole page (and any new copy) for `—`, `–`, or similar; replace with commas or short rephrases so the tone stays the same.

---

## 3. Remove Design System from site

- **Nav:** No "Design System" link in the header (already the case; confirm).
- **Footer – Product column:** Remove the "Design System" list item and link. Keep "Start Review" and "See Example" only.
- **Result:** No Design System link anywhere on the public site.

---

## 4. Region section: worldwide, not just three countries

- **Headline:** Change "Tailored for your region" to something like "Tailored for your region, worldwide" or "For applicants everywhere" so it’s clear we support all regions.
- **Subtitle:** e.g. "Region-specific insights that match application expectations, from the US and UK to Australia and beyond."
- **Content:** Keep US, UK, and Australia as example cards, but add a fourth card or a short line under the three:
  - Option A: Fourth card "Worldwide" – e.g. "Other regions: We adapt to your country and application type."
  - Option B: One line of copy under the three cards: "We support applicants from all over the world with region-aware feedback."
- **Implementation:** Update section title, subtitle, and add one worldwide element (card or line) in `app/page.tsx`.

---

## 5. New pages (replace `#` links)

Create four pages and wire footer (and nav if needed):

| Page            | Route              | Purpose                                      |
|-----------------|--------------------|----------------------------------------------|
| Privacy Policy  | `/privacy`         | Standard privacy policy content (placeholder or real). |
| Terms of Service| `/terms`           | Terms of use (placeholder or real).         |
| Help Center     | `/help`            | FAQ-style help + links to contact/support.  |
| Contact Us      | `/contact`         | Contact form or email/instructions only.     |

- **File structure:** e.g. `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/help/page.tsx`, `app/contact/page.tsx`.
- **Layout:** Reuse the same header and footer as the landing (e.g. shared `<Header />` and `<Footer />` or layout wrapper) so navigation is consistent.
- **Content:** Placeholder sections are fine initially (e.g. "Privacy Policy", "Terms of Service", "Help Center", "Contact Us" headings and short intro text); can be filled with real content later.
- **Footer:** Replace each `href="#"` with `href="/privacy"`, `href="/terms"`, `href="/help"`, `href="/contact"` (using Next.js `Link` where appropriate).

---

## 6. Scroll-triggered reveal animations

- **Goal:** Sections (or cards) reveal as the user scrolls (e.g. fade-in + slight slide-up).
- **Approach:**
  - Use a small intersection observer–based hook or component (e.g. "RevealOnScroll") that toggles a class or state when the element enters the viewport.
  - Apply to: hero (optional), "Why students choose Univyrse" cards, "How it works" steps, region cards, trust section, FAQ, CTA banner. Optionally stagger children (e.g. each card 100ms delay).
- **Implementation:** No new backend. Pure client-side:
  - Option A: CSS only – use `@media (prefers-reduced-motion: reduce)` and simple `opacity`/`transform` with a class that gets toggled when in view (via a client component that uses `IntersectionObserver`).
  - Option B: Use a light animation library (e.g. `framer-motion` or `motion`) only if the team already uses it; otherwise keep to CSS + one small observer component.
- **Accessibility:** Respect `prefers-reduced-motion: reduce` (no or minimal motion when that preference is set).

---

## 7. Testimonials with emoji avatars and real-feel comments

- **Placement:** New section on the landing page, e.g. between "Why students choose Univyrse" and "How it works", or between "How it works" and "Tailored for your region".
- **Content:**
  - 3–4 short testimonials.
  - Each: an avatar (emoji, e.g. person with buns, smiley, etc. to match "people's emoji" style), a short quote, and optionally a name/label (e.g. "High school senior", "International applicant").
  - Quotes should sound like real user experience: e.g. "The feedback on my opening paragraph was so specific I knew exactly what to change", "Finally something that doesn’t rewrite my essay for me."
- **Design:** Card or quote block; emoji in a circle or rounded box; same spacing and typography system as the rest of the page.
- **Implementation:** Static content in `app/page.tsx` (or a `<Testimonials />` component). No backend or API; all copy hardcoded. Use a simple grid (e.g. 3 columns on desktop, 1 on mobile) for the testimonial cards.

---

## 8. Cursor rule (optional)

- **Purpose:** Remind the agent: when editing the landing or these new pages, use components; no new backends; match typography and alignment from design; avoid em dashes; include worldwide messaging in region section; keep Design System off the public site.
- **Scope:** e.g. `app/**/*.tsx` and `components/landing/**`.
- **File:** e.g. `.cursor/rules/landing-and-components.mdc` (update existing or create).

---

## Implementation order (recommended)

1. **Copy and links (quick wins)**  
   - Remove em dashes.  
   - Remove Design System from footer.  
   - Fix typography/alignment in hero and Review Results card.

2. **Region section**  
   - Update headline/subtitle and add worldwide card or line.

3. **New pages**  
   - Add `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/help/page.tsx`, `app/contact/page.tsx` with placeholder content and shared header/footer.  
   - Update footer links to these routes.

4. **Testimonials**  
   - Add testimonials section with emoji avatars and real-feel quotes.

5. **Scroll animations**  
   - Add RevealOnScroll (or equivalent) and apply to sections; respect `prefers-reduced-motion`.

6. **Rule (optional)**  
   - Update or add `.cursor/rules/landing-and-components.mdc` with the above conventions.

---

## Files to create or touch

| Action   | File / area |
|----------|-------------|
| Edit     | `app/page.tsx` (typography, em dashes, region, Design System link, testimonials, animation wrappers) |
| Create   | `app/privacy/page.tsx` |
| Create   | `app/terms/page.tsx` |
| Create   | `app/help/page.tsx` |
| Create   | `app/contact/page.tsx` |
| Create   | Optional: `components/landing/reveal-on-scroll.tsx` (client) |
| Create   | Optional: `components/landing/testimonials.tsx` |
| Edit     | `.cursor/rules/landing-and-components.mdc` (optional) |

This plan keeps everything front-end only, uses components, and avoids new backends while aligning the site with the design and your requirements.
