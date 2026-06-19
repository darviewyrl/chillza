# CHILL ZA Campaign Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, all-English CHILL ZA beverage-launch website whose hero reads as one premium commercial key visual centered on the transparent product can.

**Architecture:** Keep Svelte components and structured site data as the interactive 30% of the design, while purpose-built background and foreground campaign artwork supply the integrated 70% atmosphere. Preserve the exact can and mascot as live layers, join them with shared lighting and occlusion, and centralize brand tokens and motion rules in the global stylesheet.

**Tech Stack:** SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS 4, Lucide Svelte, Simple Icons, Vitest, Testing Library, Playwright, generated raster artwork.

---

## File Map

- Create `src/lib/components/Icon.svelte`: maps approved semantic icon names to Lucide components.
- Create `src/lib/components/SocialIcon.svelte`: renders official Facebook and Instagram Simple Icons paths.
- Create `src/lib/components/HeroArt.svelte`: owns the can, mascot, artwork, badge, shadows, and depth layers.
- Create `src/lib/components/HeroArt.svelte.test.ts`: verifies exact product assets, hierarchy hooks, and decorative semantics.
- Create `static/images/campaign/hero-atmosphere.webp`: opaque mango light, splash, bubbles, distant ice, and mango mass.
- Create `static/images/campaign/hero-foreground.png`: transparent foreground ice, droplets, leaves, and mango occlusion.
- Create `static/images/chillza-can-transparent.png`: deployable copy of the approved transparent can.
- Modify `src/lib/data/site.ts`: English-only content, typed icon names, artwork paths, official social identifiers.
- Modify `src/lib/data/site.spec.ts`: content, English-only, social, and product-image invariants.
- Modify `src/lib/components/Hero.svelte`: advertising-poster layout, campaign copy, CTAs, and `HeroArt` assembly.
- Modify `src/lib/components/Navbar.svelte`: official social icons, clean desktop navigation, accessible mobile menu.
- Modify `src/lib/components/Navbar.svelte.test.ts`: navigation and official social icon coverage.
- Modify `src/lib/components/BenefitCard.svelte`: Lucide icon rendering and continuous premium benefit treatment.
- Modify `src/lib/components/ProductDetails.svelte`: premium product showcase using the transparent can and proper icons.
- Modify `src/lib/components/VideoPlaceholder.svelte`: cinematic campaign poster and Lucide play control.
- Modify `src/lib/components/ContactSection.svelte`: campaign-consistent contact surface and official social icons.
- Modify `src/lib/components/Footer.svelte`: English navigation and official social icons.
- Modify `src/lib/components/TeamMemberCard.svelte`: English initials/labels and restrained editorial cards.
- Modify `src/lib/components/TeamMemberCard.svelte.test.ts`: English fallback content.
- Modify `src/routes/+page.svelte`: section structure, English metadata, and benefits-band treatment.
- Modify `src/routes/layout.css`: brand tokens, typography, art-stage styling, responsive rules, focus, and reduced motion.
- Modify `tests/landing.e2e.ts`: transparent can, English-only content, social links, navigation, modal, responsive overflow, and visual hierarchy checks.
- Modify `package.json` and `package-lock.json`: add `lucide-svelte` and `simple-icons`.

### Task 1: Lock content and asset invariants with failing tests

**Files:**

- Modify: `src/lib/data/site.spec.ts`
- Modify: `tests/landing.e2e.ts`

- [ ] **Step 1: Extend the data tests with the approved invariants**

Add tests that assert the new image path, exact English team content, official social IDs, campaign artwork paths, and absence of Thai Unicode:

Update the existing import to include `campaignArtwork`:

```ts
import { benefits, campaignArtwork, navigation, product, socialLinks, teamMembers } from './site';
```

```ts
it('uses the approved transparent can and campaign artwork', () => {
	expect(product.image).toBe('/images/chillza-can-transparent.png');
	expect(campaignArtwork).toEqual({
		atmosphere: '/images/campaign/hero-atmosphere.webp',
		foreground: '/images/campaign/hero-foreground.png'
	});
});

it('contains English-only campaign content and official social IDs', () => {
	const serialized = JSON.stringify({ product, benefits, teamMembers, socialLinks });
	expect(serialized).not.toMatch(/[\u0E00-\u0E7F]/);
	expect(serialized).not.toContain('�');
	expect(socialLinks.map((item) => item.icon)).toEqual(['facebook', 'instagram']);
	expect(teamMembers.map((member) => member.name)).toEqual([
		'Surada Supasri',
		'Kritaporn Chooitjin',
		'Nannapas Nilket',
		'Warunpack Bunruangsri',
		'Tharathep Hariwon',
		'Chanathip Wongsamran',
		'Pongsakorn Nichkasem',
		'Phachara Suphamethanon'
	]);
});
```

- [ ] **Step 2: Extend Playwright coverage for visible requirements**

Add assertions for the transparent can, no Thai text, two official social destinations, and hero art hooks:

```ts
await expect(page.locator('[data-hero-can]')).toHaveAttribute(
	'src',
	'/images/chillza-can-transparent.png'
);
await expect(page.locator('[data-hero-mascot]')).toBeVisible();
await expect(page.locator('[data-campaign-atmosphere]')).toBeVisible();
await expect(page.locator('body')).not.toContainText(/[\u0E00-\u0E7F]/);
await expect(page.getByRole('link', { name: 'Facebook' }).first()).toHaveAttribute(
	'href',
	'https://facebook.com/ChillZaThailand'
);
await expect(page.getByRole('link', { name: 'Instagram' }).first()).toHaveAttribute(
	'href',
	'https://instagram.com/chillza.official'
);
```

- [ ] **Step 3: Run the focused tests and verify they fail for the intended reasons**

Run: `npm run test:unit -- --run src/lib/data/site.spec.ts`

Expected: FAIL because `campaignArtwork` and the new English data do not exist and the product still references `chillza-can.png`.

- [ ] **Step 4: Commit the failing specification tests**

```bash
git add src/lib/data/site.spec.ts tests/landing.e2e.ts
git commit -m "test: define campaign redesign requirements"
```

### Task 2: Add professional icon dependencies and deploy the transparent can

**Files:**

- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `static/images/chillza-can-transparent.png`

- [ ] **Step 1: Install the icon libraries**

Run: `npm install lucide-svelte simple-icons`

Expected: both packages appear in `dependencies`, and npm completes without audit-blocking errors.

- [ ] **Step 2: Copy the user-approved transparent can into the static asset tree**

Run:

```powershell
Copy-Item -LiteralPath 'images\chillza-can-transparent.png' -Destination 'static\images\chillza-can-transparent.png'
```

Expected: `static/images/chillza-can-transparent.png` exists and retains dimensions `1086 × 1448`.

- [ ] **Step 3: Verify alpha and dimensions without modifying the image**

Run a read-only image inspection and confirm the file is a PNG with an alpha channel and `1086 × 1448` dimensions.

- [ ] **Step 4: Commit dependencies and the product asset**

```bash
git add package.json package-lock.json static/images/chillza-can-transparent.png
git commit -m "feat: add campaign icon libraries and transparent can"
```

### Task 3: Normalize all site data to English and typed icon identifiers

**Files:**

- Modify: `src/lib/data/site.ts`
- Test: `src/lib/data/site.spec.ts`

- [ ] **Step 1: Replace the data interfaces and content**

Remove `thaiBrand`, `thaiName`, and emoji strings. Define icon unions and campaign paths:

```ts
export type IconName =
	| 'leaf'
	| 'mango'
	| 'sparkles'
	| 'low-sugar'
	| 'droplets'
	| 'shopping-bag'
	| 'play'
	| 'users';

export type SocialIconName = 'facebook' | 'instagram';

export const campaignArtwork = {
	atmosphere: '/images/campaign/hero-atmosphere.webp',
	foreground: '/images/campaign/hero-foreground.png'
} as const;
```

Set `product.image` to `/images/chillza-can-transparent.png`, use the approved eight English names and roles, and set each social link's `icon` to `facebook` or `instagram`.

- [ ] **Step 2: Run the data tests**

Run: `npm run test:unit -- --run src/lib/data/site.spec.ts`

Expected: PASS for transparent-can path, English content, exact team names, navigation, benefits, and social identifiers.

- [ ] **Step 3: Search for legacy content**

Run: `rg -n "chillza-can\.png|[\u0E00-\u0E7F]|�" src`

Expected: remaining matches are limited to components that will be replaced in later tasks; `src/lib/data/site.ts` has none.

- [ ] **Step 4: Commit English structured content**

```bash
git add src/lib/data/site.ts src/lib/data/site.spec.ts
git commit -m "feat: normalize chill za campaign content"
```

### Task 4: Build reusable Lucide and official social icon components

**Files:**

- Create: `src/lib/components/Icon.svelte`
- Create: `src/lib/components/SocialIcon.svelte`
- Modify: `src/lib/components/Navbar.svelte.test.ts`

- [ ] **Step 1: Add a failing navbar test for official SVG social icons**

Render `Navbar` and assert links named Facebook and Instagram each contain an SVG with `data-brand-icon` equal to the expected name.

```ts
expect(
	screen.getByRole('link', { name: 'Facebook' }).querySelector('[data-brand-icon="facebook"]')
).toBeTruthy();
expect(
	screen.getByRole('link', { name: 'Instagram' }).querySelector('[data-brand-icon="instagram"]')
).toBeTruthy();
```

- [ ] **Step 2: Run the navbar test to verify failure**

Run: `npm run test:unit -- --run src/lib/components/Navbar.svelte.test.ts`

Expected: FAIL because the social links and brand SVG components are not rendered.

- [ ] **Step 3: Implement the Lucide mapper**

Map the typed names to `Leaf`, `Citrus`, `Sparkles`, `CandyOff`, `Droplets`, `ShoppingBag`, `Play`, and `Users` from `lucide-svelte`. Accept `name`, `size`, `strokeWidth`, and `class` props and render through `<svelte:component>` or the Svelte 5 dynamic component form.

- [ ] **Step 4: Implement official Simple Icons paths**

Import `siFacebook` and `siInstagram` from `simple-icons`, select by `SocialIconName`, and render:

```svelte
<svg data-brand-icon={name} viewBox="0 0 24 24" role="img" aria-hidden="true" class={className}>
	<path d={icon.path} fill="currentColor" />
</svg>
```

- [ ] **Step 5: Commit the shared icon primitives**

```bash
git add src/lib/components/Icon.svelte src/lib/components/SocialIcon.svelte src/lib/components/Navbar.svelte.test.ts
git commit -m "feat: add professional campaign icons"
```

### Task 5: Create and validate the campaign artwork

**Files:**

- Create: `static/images/campaign/hero-atmosphere.webp`
- Create: `static/images/campaign/hero-foreground.png`

- [ ] **Step 1: Generate the opaque atmosphere artwork**

Use the image-generation workflow with the supplied reference strictly as composition/style inspiration and the current mango, ice, and can assets as lighting/palette references. Generate a wide original scene with this prompt:

```text
Original premium mango sparkling-tea advertising environment, wide 16:10 website hero, luminous cream-to-mango-yellow atmosphere, one large integrated bed and rising arc of ripe mango flesh and green leaves concentrated center-right, energetic golden beverage splash behind an empty central product silhouette, realistic condensation droplets and soda bubbles following the splash trajectory, large softly blurred background ice, commercial studio lighting, warm amber reflections and cool ice highlights, photoreal advertising finish, generous readable light area on the left. No can, no bottle, no person, no mascot, no logo, no typography, no badge, no random floating circles, no copied composition.
```

Export/crop as an optimized wide WebP suitable for the hero while preserving the left copy-safe area.

- [ ] **Step 2: Generate the transparent foreground occlusion artwork**

Generate on a flat removable chroma-key background:

```text
Foreground layer for a premium mango soda advertisement: two or three very large realistic crystal-clear ice forms cropped by the bottom and right frame, a coherent low mango cluster with glossy cubes and two green leaves, a narrow golden splash ribbon and droplets connecting the forms, consistent warm mango backlight and cool white specular highlights, wide website-hero perspective. Sparse intentional composition. No can, no bottle, no person, no mascot, no logo, no text, no badge, no scattered clip art. Flat solid chroma-key background with no shadows on the key color.
```

Remove the chroma key with the imagegen helper, use a soft matte and despill, and save the alpha result as `hero-foreground.png`.

- [ ] **Step 3: Inspect both assets at full resolution**

Verify that the atmosphere has no generated lettering/product, the foreground has a clean alpha edge, mango and ice share one perspective, and the left copy-safe area remains quiet. Reject and regenerate any asset that looks like repeated clip art or changes the CHILL ZA product identity.

- [ ] **Step 4: Optimize and record intrinsic dimensions**

Keep the background below a practical hero payload and the foreground alpha asset sized only as large as necessary for crisp desktop rendering. Confirm both load successfully from their `/images/campaign/...` URLs.

- [ ] **Step 5: Commit the approved campaign artwork**

```bash
git add static/images/campaign/hero-atmosphere.webp static/images/campaign/hero-foreground.png
git commit -m "feat: add chill za campaign artwork"
```

### Task 6: Build the unified hero art stage

**Files:**

- Create: `src/lib/components/HeroArt.svelte`
- Create: `src/lib/components/HeroArt.svelte.test.ts`
- Modify: `src/lib/components/Hero.svelte`
- Modify: `src/routes/layout.css`

- [ ] **Step 1: Write failing component tests for the art hierarchy**

Render `HeroArt` and assert the atmosphere, exact can, mascot, foreground overlay, and price badge exist. Assert the can and mascot have separate stable data hooks and meaningful/empty alt text as appropriate.

```ts
expect(screen.getByAltText('CHILL ZA Mango Soda can')).toHaveAttribute(
	'src',
	'/images/chillza-can-transparent.png'
);
expect(screen.getByAltText('CHILL ZA brand mascot')).toBeInTheDocument();
expect(container.querySelector('[data-campaign-foreground]')).toHaveAttribute('alt', '');
expect(screen.getByText('20')).toBeVisible();
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:unit -- --run src/lib/components/HeroArt.svelte.test.ts`

Expected: FAIL because `HeroArt.svelte` does not exist.

- [ ] **Step 3: Implement `HeroArt.svelte` with a single composition wrapper**

Use one `figure.hero-art` containing, in stacking order: atmosphere, glow/contact shadow, mascot, mango shadow, transparent can, price badge, and foreground overlay. Apply `data-hero-can`, `data-hero-mascot`, `data-campaign-atmosphere`, and `data-campaign-foreground` hooks.

- [ ] **Step 4: Implement the approved scale relationship in CSS**

Set the can as the art-stage scale reference and size the mascot to 60–70% of its visible height. Use custom properties so breakpoints remain explicit:

```css
.hero-art {
	--can-height: min(86cqh, 46rem);
	--mascot-ratio: 0.66;
}
.hero-can {
	height: var(--can-height);
}
.hero-mascot {
	height: calc(var(--can-height) * var(--mascot-ratio));
}
```

Add shared amber reflection, realistic can shadow, subtle restrained float, foreground occlusion, and breakpoint-specific positions. Keep the can above the mascot and below the physically plausible foreground layer.

- [ ] **Step 5: Rebuild `Hero.svelte` around the art stage**

Use the approved English eyebrow, `CHILL ZA` lockup, two-line campaign slogan, description, and Lucide ShoppingBag/Play CTAs. Remove independent mango and ice `<img>` elements and all emoji/malformed characters.

- [ ] **Step 6: Run focused tests and type checking**

Run: `npm run test:unit -- --run src/lib/components/HeroArt.svelte.test.ts && npm run check`

Expected: PASS with no Svelte or TypeScript errors.

- [ ] **Step 7: Commit the unified hero**

```bash
git add src/lib/components/HeroArt.svelte src/lib/components/HeroArt.svelte.test.ts src/lib/components/Hero.svelte src/routes/layout.css
git commit -m "feat: build unified beverage campaign hero"
```

### Task 7: Extend the campaign system across navigation and every section

**Files:**

- Modify: `src/lib/components/Navbar.svelte`
- Modify: `src/lib/components/BenefitCard.svelte`
- Modify: `src/lib/components/ProductDetails.svelte`
- Modify: `src/lib/components/VideoPlaceholder.svelte`
- Modify: `src/lib/components/ContactSection.svelte`
- Modify: `src/lib/components/Footer.svelte`
- Modify: `src/lib/components/TeamMemberCard.svelte`
- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/layout.css`

- [ ] **Step 1: Replace navbar placeholders with professional icons**

Render desktop Facebook and Instagram links with `SocialIcon`, replace the malformed mobile-menu characters with Lucide `Menu` and `X`, preserve accessible labels, and keep the mobile close-on-selection behavior.

- [ ] **Step 2: Convert the benefits into one premium continuous band**

Render benefit icons through `Icon.svelte`, reduce card-like separation, retain four clear text groups, and place the band so it overlaps the hero edge without covering key artwork.

- [ ] **Step 3: Redesign the product showcase**

Use the transparent can, a restrained dark mango/charcoal stage, Lucide detail icons, short English copy, and one strong lighting field. Remove all emoji detail values and duplicated decorative shapes.

- [ ] **Step 4: Redesign the video section as campaign media**

Use a cinematic poster surface, a Lucide Play icon, strong English campaign copy, and the existing accessible non-autoplay placeholder behavior.

- [ ] **Step 5: Redesign contact, team, and footer consistently**

Use official `SocialIcon` components in contact and footer; use English team labels and initials; render the exact school subtitle; keep the same cream, mango, green, charcoal, borders, and section rhythm rather than introducing unrelated card styles.

- [ ] **Step 6: Normalize page metadata and section copy**

Replace the malformed em dash and all remaining mojibake in `+page.svelte`; keep the required section IDs and order.

- [ ] **Step 7: Run component/data tests and the legacy-content scan**

Run:

```bash
npm run test:unit -- --run
rg -n "chillza-can\.png|[\u0E00-\u0E7F]|�" src static --glob '!static/images/chillza-can.png'
```

Expected: all unit tests PASS; the search returns no source/content references.

- [ ] **Step 8: Commit the complete section redesign**

```bash
git add src/lib/components src/routes/+page.svelte src/routes/layout.css
git commit -m "feat: extend campaign design across landing page"
```

### Task 8: Responsive, accessibility, and browser acceptance pass

**Files:**

- Modify: `src/routes/layout.css`
- Modify: `tests/landing.e2e.ts`

- [ ] **Step 1: Add responsive hero ratio assertions**

For desktop and mobile projects, evaluate the can and mascot bounding boxes and require the mascot ratio to remain between 0.60 and 0.70:

```ts
const ratio = await page.evaluate(() => {
	const can = document.querySelector<HTMLElement>('[data-hero-can]')!.getBoundingClientRect();
	const mascot = document.querySelector<HTMLElement>('[data-hero-mascot]')!.getBoundingClientRect();
	return mascot.height / can.height;
});
expect(ratio).toBeGreaterThanOrEqual(0.6);
expect(ratio).toBeLessThanOrEqual(0.7);
```

- [ ] **Step 2: Run Playwright and observe the new failures**

Run: `npm run test:e2e`

Expected: any remaining failures identify breakpoint cropping, social naming, overflow, or scale-ratio defects.

- [ ] **Step 3: Tune art direction at desktop, tablet, and mobile widths**

Use browser inspection at approximately 1440×900, 1024×768, 768×1024, and 390×844. Adjust only bounded transforms, `object-position`, copy width, foreground crop, and section spacing. Never reduce the mascot below 60% or above 70% of can height, and never allow it to overtake the can's z-order or contrast.

- [ ] **Step 4: Verify keyboard and reduced-motion behavior**

Tab through navigation, CTAs, modal, video control, and social links. Emulate `prefers-reduced-motion: reduce` and confirm all layers remain composed while float/parallax animation stops.

- [ ] **Step 5: Inspect screenshots for commercial-composition defects**

Capture desktop and mobile screenshots and check: can is dominant; mascot is clearly visible; mango reads as a single mass; foreground/background ice creates depth; badge belongs to the scene; no text or can label is blocked; no repeated clip-art feeling; all below-fold sections retain the same visual quality.

- [ ] **Step 6: Run the full verification suite**

Run:

```bash
npm run format
npm run lint
npm run check
npm run test:unit -- --run
npm run test:e2e
npm run build
```

Expected: formatting completes; lint, type checking, unit tests, Playwright tests, and production build all PASS.

- [ ] **Step 7: Run final asset/source checks**

Run:

```bash
rg -n "chillza-can\.png|[\u0E00-\u0E7F]|�" src tests
git status --short
```

Expected: no legacy can, Thai, or mojibake matches; status shows only intended tracked implementation changes or is clean after commit.

- [ ] **Step 8: Commit responsive and acceptance fixes**

```bash
git add src/routes/layout.css tests/landing.e2e.ts
git commit -m "test: verify responsive campaign experience"
```
