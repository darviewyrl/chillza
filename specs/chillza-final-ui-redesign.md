# CHILL ZA Landing Page Final UI Implementation

We now have final approved design assets and final approved mockup references.

Please update the CHILL ZA website implementation to use these assets as the source of truth and redesign the landing page to closely match the approved mockups.

This task is no longer about exploration.

This task is about implementation fidelity, visual polish, and reducing the AI-generated landing page feeling.

---

## Final Asset Files

The approved assets are located in:

`images/use/`

Use these files:

- `images/use/gpt-design-desktop.png`
- `images/use/gpt-design-mobile.png`
- `images/use/gpt-artwork-desktop.png`
- `images/use/gpt-artwork-mobile.png`
- `images/use/icon-hero.png`
- `images/use/icon-price.png`
- `images/use/chillza-can-transparent.png`

Asset meaning:

- `gpt-design-desktop.png` = approved desktop mockup
- `gpt-design-mobile.png` = approved mobile mockup
- `gpt-artwork-desktop.png` = approved desktop hero artwork
- `gpt-artwork-mobile.png` = approved mobile hero artwork
- `icon-hero.png` = approved hero title graphic
- `icon-price.png` = approved price badge
- `chillza-can-transparent.png` = product can asset, used only where needed outside the hero

---

## Most Important Rule

The approved design mockups are the source of truth.

Treat these files as implementation targets, not inspiration:

- `gpt-design-desktop.png`
- `gpt-design-mobile.png`

Do not reinterpret the layout.

Do not redesign the hero composition.

Do not create a new visual direction.

The goal is to make the website closely match the approved mockups.

If there is a conflict between the current website and the approved mockups, follow the approved mockups.

Priority order:

1. `gpt-design-desktop.png`
2. `gpt-design-mobile.png`
3. final approved asset files
4. existing website implementation

The existing website is not the source of truth.

---

## Hero Section

Rebuild the hero section around the final approved assets.

Desktop:

- Use `gpt-artwork-desktop.png` as the main hero artwork.
- Use `icon-hero.png` as the large hero title graphic.
- Use `icon-price.png` as the price badge.
- Match `gpt-design-desktop.png` as closely as possible.

Mobile:

- Use `gpt-artwork-mobile.png` as the main hero artwork.
- Use `icon-hero.png` or a responsive crop/size of it as the hero title graphic.
- Use `icon-price.png` as the price badge.
- Match `gpt-design-mobile.png` as closely as possible.

Important:

- Do not recreate the hero title using HTML text.
- Do not recreate the hero title using CSS.
- Do not generate alternative typography.
- Do not rebuild the hero using separate PNG layers.
- Do not manually compose the can, mascot, mango, and ice again.

The approved artwork already contains the intended commercial composition.

The hero should feel like a beverage campaign poster implemented as a website.

It should not feel like separate PNG assets placed with CSS.

---

## Old Separate Hero Assets

Do not use these assets to compose the hero anymore:

- separate can PNG
- separate mascot PNG
- mango PNG
- ice PNG

These assets were only useful during the design exploration stage.

The final hero should use the approved artwork files directly.

Keep `chillza-can-transparent.png` only if it is useful in the Product section or other non-hero areas.

If old assets are no longer referenced anywhere, remove unused imports and references safely.

Do not delete files until checking whether the current code still imports them.

---

## Desktop Hero Layout Requirements

Match the desktop mockup:

- Hero fills the first screen with strong visual impact.
- Large campaign artwork dominates the right side.
- Hero title graphic sits on the left side.
- CTA buttons sit below the title/description area.
- Price badge sits near the product composition.
- Benefits band sits at the bottom of the hero.
- The hero should feel wide, premium, bright, and energetic.
- Avoid cramped spacing.
- Avoid generic left-text/right-image SaaS layout.

Use the mockup as a visual target.

---

## Mobile Hero Layout Requirements

Match the mobile mockup:

- Mobile should not be a simple scaled-down desktop version.
- Use the mobile artwork.
- Make the layout feel like a vertical campaign poster.
- Keep the hero title readable.
- Keep the CTA buttons visible and easy to tap.
- Keep the price badge visible.
- Keep the benefits area below the artwork like the mockup.
- Use intentional cropping where needed.
- Do not allow text, buttons, price badge, or product artwork to overlap awkwardly.

The mobile layout should look specifically designed for mobile.

---

## Hero Title

Use:

`icon-hero.png`

This is a campaign graphic, not a navigation logo.

It contains:

- CHILL ZA
- Chill Your Day, Pop Your Mood!

Do not recreate it using HTML.

Do not style it using normal text.

Use it as an image asset.

Make sure it is crisp, properly sized, and positioned like the mockups.

---

## Price Badge

Use:

`icon-price.png`

This is the approved price badge.

Do not recreate the orange price circle with CSS.

Use it as an image asset.

Place it according to the approved mockups.

---

## Navigation

Update the navigation to feel cleaner and less AI-generated.

Requirements:

- Keep navigation minimal.
- Use: Home, Benefits, Product, Video, Contact, Team
- Use official Facebook and Instagram icons.
- Do not use emoji.
- Do not use placeholder social icons.
- Keep spacing balanced.
- On mobile, use a simple menu icon and preserve the mockup feeling.
- Do not make the navbar visually fight with the hero title.

Important:

Since the hero already has a large CHILL ZA campaign title, avoid using a large repeated brand logo in the first hero view.

If a brand logo is needed in the navbar, keep it small and subtle.

---

## Reduce AI-Generated UI Feeling

The current site still feels too much like an AI-generated landing page.

Please reduce these common AI patterns:

Avoid:

- repetitive rounded cards
- generic 2x2 feature grids
- dashboard-style profile cards
- random floating shapes
- random circles
- excessive gradients
- too many glass cards
- placeholder-looking sections
- emoji icons
- obvious “template landing page” structure
- separate PNGs placed side by side

Increase:

- campaign-style visual storytelling
- stronger art direction
- better spacing
- premium typography
- fewer but stronger visual elements
- editorial layout
- natural section transitions
- real beverage brand feeling
- visual consistency with the approved mockups

The final website should feel like a CHILL ZA mango soda campaign page, not a generic AI landing page with beverage images added.

---

## Typography

The previous typography felt awkward in some places.

Requirements:

- Do not use awkward compressed text like “CHILLZA”.
- The hero title is handled by `icon-hero.png`.
- For normal website text, use a clean modern sans-serif font.
- Improve letter spacing.
- Use strong but readable headings.
- Avoid overly tight tracking.
- Avoid generic AI-looking display typography.
- Keep English copy clean, natural, and readable.

Visible website copy should be English.

---

## Benefits Section

The benefits section should follow the approved mockup style.

Requirements:

- Use a premium band style, not random separate cards.
- Use tasteful glassmorphism if appropriate.
- Keep the benefit icons clean and professional.
- Use real icons, not emoji.
- Make it feel connected to the hero rather than a separate generic block.

Benefits:

- Real Tea Extract
- Sweet Mango Flavor
- Sparkling & Refreshing
- Low Sugar

Avoid making this section look like a generic SaaS feature grid.

---

## Product Section

Redesign the Product section to feel like a beverage product story.

Requirements:

- It should not look like a generic 2x2 feature card grid.
- It should feel more editorial and brand-like.
- Use `chillza-can-transparent.png` here if useful.
- Keep the product can clean and premium.
- Use warm mango-yellow visual language.
- Keep copy short and natural.

Suggested direction:

A product showcase section with product can, short story, product details, and key qualities.

Make it feel like a real beverage brand page.

---

## Video Section

The Video section should not feel like a basic placeholder.

Requirements:

- Make it feel like a campaign film teaser.
- Use stronger visual hierarchy.
- Use a large play button.
- Keep the “coming soon” idea if there is no real video yet, but make it feel intentional.
- Avoid a plain embedded rectangle or empty placeholder.

It should feel like a commercial teaser block.

---

## Contact Section

Make the Contact / Social section feel like a brand-follow section, not a basic contact box.

Requirements:

- Use official Facebook and Instagram icons.
- Make links clickable.
- Keep layout clean and premium.
- Avoid generic cards if they make the section feel AI-generated.

Social links:

- Facebook: https://facebook.com/ChillZaThailand
- Instagram: https://instagram.com/chillza.official

---

## Team Section

The Team section currently risks looking like an employee directory.

Please redesign it to feel like a creative project showcase.

Requirements:

- Avoid repetitive admin-dashboard profile cards.
- Avoid overly generic rounded rectangles.
- Use a cleaner editorial layout.
- Keep the content readable.
- If profile images exist, use them.
- If profile images do not exist, use elegant placeholders, but do not make them look like a dashboard.

Team title:

Created By

Subtitle:

Grade 12/4 Students · Marie Vittaya School · Nakhon Ratchasima

Team members:

- Surada Supasri — Location Preparation
- Kritaporn Chooitjin — Location Preparation
- Nannapas Nilket — Location Preparation
- Warunpack Bunruangsri — Script Writer & Actor
- Tharathep Hariwon — Script Writer
- Chanathip Wongsamran — Videographer
- Pongsakorn Nichkasem — Website Developer, Poster Designer & Product Designer
- Phachara Suphamethanon — Location Preparation

---

## Footer

Keep the footer concise and clean.

Include:

- CHILL ZA
- Slogan or short brand line
- Navigation anchors
- Facebook and Instagram links

Do not overdesign it.

---

## Icons

Use:

- Lucide icons for UI and feature icons
- Official Facebook and Instagram icons from a proper icon library such as Simple Icons, Iconify, or equivalent

Do not use emoji anywhere in the visible UI.

---

## Language

Keep all visible website content in English.

Remove remaining Thai visible UI text except text that is baked into approved image assets.

Thai text inside image assets is acceptable because it is part of the final graphic design.

---

## Responsiveness

The website must look good on:

- desktop
- tablet
- mobile

Specific requirements:

- Desktop should closely match `gpt-design-desktop.png`.
- Mobile should closely match `gpt-design-mobile.png`.
- Do not allow horizontal overflow.
- Do not allow hero assets to crop important information.
- Do not allow CTAs to overlap artwork.
- Keep tap targets comfortable on mobile.

---

## Implementation Quality

Use clean Svelte + Tailwind implementation.

Requirements:

- Remove unused imports.
- Remove unused components if they are no longer needed.
- Keep data in sensible structures.
- Do not introduce unnecessary state management.
- Keep components easy to understand.
- Use semantic HTML.
- Add alt text for meaningful images.
- Decorative images can use empty alt text if appropriate.
- Respect accessibility basics.

---

## Verification

After implementation, run:

- npm run lint
- npm run check
- npm run test:unit -- --run
- npm run test:e2e
- npm run build

Fix all issues before reporting back.

Also manually inspect:

- desktop hero
- mobile hero
- benefits band
- product section
- video section
- contact section
- team section

Confirm that the final page visually follows the approved mockups and no longer feels like separate PNG assets arranged by CSS.

---

## Final Goal

The final website should feel like:

A real CHILL ZA mango soda campaign website.

It should not feel like:

An AI-generated SaaS landing page with beverage images added on top.

Optimize for:

- visual fidelity to the approved mockups
- campaign presentation
- marketing impact
- natural layout
- premium beverage brand feeling

Do not optimize only for clean component structure.

Optimize for implementation fidelity and visual quality.
