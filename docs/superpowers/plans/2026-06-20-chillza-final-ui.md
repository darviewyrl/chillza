# CHILL ZA Final UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the existing Svelte landing page to closely match the approved desktop and mobile campaign mockups using only the final approved hero assets.

**Architecture:** Keep the current component boundaries and structured site data, but replace the layered hero with a responsive `<picture>`-based campaign composition plus the approved title and price images. Restyle the benefits, product, video, contact, team, and footer sections as editorial campaign modules while retaining accessible interactions.

**Tech Stack:** Svelte 5, SvelteKit, Tailwind CSS 4, Vitest, Testing Library, Playwright

---

### Task 1: Enforce approved asset usage

**Files:**

- Modify: `src/lib/data/site.spec.ts`
- Modify: `src/lib/components/HeroArt.svelte.test.ts`
- Modify: `tests/landing.e2e.ts`
- Modify: `src/lib/data/site.ts`
- Modify: `src/lib/components/HeroArt.svelte`

- [ ] Update tests to require `/images/use/gpt-artwork-desktop.png`, `/images/use/gpt-artwork-mobile.png`, `/images/use/icon-hero.png`, and `/images/use/icon-price.png`, and to reject legacy layered hero selectors.
- [ ] Run `npm run test:unit -- --run` and confirm failures identify the legacy campaign assets.
- [ ] Copy the approved binary assets into `static/images/use/`, update structured asset paths, and render the responsive artwork/title/badge composition.
- [ ] Run `npm run test:unit -- --run` and confirm the asset tests pass.

### Task 2: Match the approved hero layout

**Files:**

- Modify: `src/lib/components/Hero.svelte`
- Modify: `src/lib/components/Navbar.svelte`
- Modify: `src/routes/layout.css`

- [ ] Keep an accessible text heading while using `icon-hero.png` as the visible campaign title.
- [ ] Position artwork, title, description, CTAs, price badge, social icons, and navigation against the desktop and mobile mockups.
- [ ] Keep the mobile campaign composition intentionally vertical and prevent horizontal overflow.

### Task 3: Refine campaign sections

**Files:**

- Modify: `src/routes/+page.svelte`
- Modify: `src/lib/components/BenefitCard.svelte`
- Modify: `src/lib/components/ProductDetails.svelte`
- Modify: `src/lib/components/VideoPlaceholder.svelte`
- Modify: `src/lib/components/ContactSection.svelte`
- Modify: `src/lib/components/TeamMemberCard.svelte`
- Modify: `src/lib/components/Footer.svelte`
- Modify: `src/lib/components/ComingSoonModal.svelte`
- Modify: `src/routes/layout.css`

- [ ] Turn benefits into one connected premium band and preserve the four required benefit messages.
- [ ] Replace the product detail card grid with an editorial can-and-story layout.
- [ ] Present video as an intentional campaign-film teaser.
- [ ] Present social links and team credits as clean editorial blocks without dashboard-style cards.
- [ ] Remove visible emoji and Thai text outside approved images.

### Task 4: Verify quality and fidelity

**Files:**

- Modify if needed: implementation and test files above

- [ ] Run `npm run lint`.
- [ ] Run `npm run check`.
- [ ] Run `npm run test:unit -- --run`.
- [ ] Run `npm run test:e2e`.
- [ ] Run `npm run build`.
- [ ] Inspect desktop and mobile screenshots in the in-app browser; correct hero crop, overlap, spacing, and section rhythm until they follow the approved references.
