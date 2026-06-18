# CHILL ZA Beverage Launch Website — Design Specification

**Date:** 2026-06-19  
**Status:** Approved design direction; awaiting written-spec review  
**Source requirements:** `specs/chillza-redesign.md` plus the user's approved 70/30 hybrid campaign direction

## Objective

Redesign the CHILL ZA website as a premium mango beverage launch campaign. The result must feel like a commercial advertising key visual extended into a complete website, not a conventional startup landing page or a collection of independent PNG assets.

The supplied reference image informs scale, depth, visual hierarchy, lighting, and advertising rhythm only. The implementation must remain an original CHILL ZA composition and must not recreate the reference.

## Core Art Direction

The visual system is a **70/30 hybrid composition**:

- Approximately 70% of the hero's visual impact comes from purpose-built campaign artwork: a unified mango mass, beverage splash, bubbles, leaves, atmospheric lighting, and large foreground/background ice.
- Approximately 30% remains as responsive live website layers: the exact transparent product can, mascot, price badge, product copy, navigation, and calls to action.
- Shared lighting, shadows, occlusion, color treatment, and depth blur bind the layers into one scene.
- The design uses fewer, larger, more deliberate elements. It avoids random circles, scattered clip art, excessive gradients, generic AI decorations, and repeated floating assets.

## Visual Hierarchy

The hero hierarchy is fixed:

1. Product can
2. CHILL ZA product name
3. Integrated mango composition
4. “ONLY 20 BAHT” price badge
5. Mascot

The can is the largest identifiable object and the clearest point of contrast. The mascot is clearly visible and contributes personality but remains smaller, less central, and lower contrast than the can.

## Hero Key Visual

### Layout

- The hero fills nearly the entire first viewport, with a minimum desktop height near `100svh` and a protected content area beneath the navigation.
- Copy occupies the left side; the commercial product composition occupies the center-right and may extend beyond the viewport edges.
- The can is enlarged roughly 25–35% relative to the current implementation, positioned center-right, and allowed to crop slightly at large breakpoints if this increases impact.
- The mango composition forms one large base and rising arc around the can. Mango flesh and leaves appear both behind the can and across a limited portion of its lower edge to create convincing occlusion.
- The mascot sits beside and slightly behind the can, with a controlled overlap into the composition. It is moderately larger than in the current site but never approaches the can's scale or contrast.
- The circular price badge sits inside the composition rather than in an unrelated corner.

### Artwork Asset Strategy

The existing product assets are source material, not the entire composition.

- `/images/chillza-can-transparent.png` is the only primary product-can asset. Every website reference to `chillza-can.png` is replaced.
- `/images/chillza-character.png` remains the exact mascot artwork.
- `/images/mango.png` and `/images/ice.png` may be used as visual/source references, but the hero must not present repeated copies as separate floating objects.
- New original campaign assets will be created for the hero:
  - an opaque atmospheric background containing the mango-yellow light field, splash energy, bubbles, and distant ice;
  - a unified mango-and-leaf composition designed around the can's final position;
  - a transparent foreground overlay containing large ice, splash highlights, droplets, and limited mango occlusion.
- Generated assets must not contain product labels, logos, typography, a replacement can, or a replacement mascot. This prevents brand distortion and keeps the real product artwork exact.
- The foreground overlay crosses in front of the live can and mascot only where physically plausible. A matching shadow and warm reflected-light treatment visually welds the layers together.

### Lighting and Depth

- Use warm mango-gold backlight behind the can, cooler white highlights on ice, and a grounded amber contact shadow beneath the composition.
- Add a subtle can shadow, soft rim glow, and restrained floating motion. Motion must not make the can feel weightless or toy-like.
- Distant ice receives lower contrast and mild blur; foreground ice is larger, sharper near its focal edge, and partially cropped by the viewport.
- Soda bubbles and droplets follow the splash arc and do not appear as evenly distributed decorative dots.

### Hero Content

The hero contains:

- Eyebrow: `MANGO SODA SPARKLING TEA`
- Primary product lockup: `CHILL ZA`
- Campaign line: `Chill Your Day,` / `Pop Your Mood!`
- A concise English product description
- Primary CTA: `Order Now` with a shopping-bag icon
- Secondary CTA: `Watch Video` with a play icon
- Circular badge: `ONLY` / `20` / `BAHT`

The CHILL ZA lockup must read intentionally as a single brand name, not as two awkwardly stacked generic headings. The existing logo may be used in navigation while large hero typography supplies campaign scale.

## Navigation

- Minimal items: Home, Benefits, Product, Video, Contact, Team.
- The logo sits left, navigation is centered or optically balanced, and official Facebook and Instagram icons sit on the right.
- Social icons are clickable and retain the URLs already provided by the project content.
- Use official brand icons from a professional icon package; do not approximate the logos with Lucide glyphs, emoji, letters, or placeholder circles.
- The navigation begins transparent over the hero and gains a restrained translucent surface when scrolled.
- Mobile navigation uses an accessible menu button and compact overlay/panel without obscuring the product composition unnecessarily.

## Full Page Structure

### 1. Hero

The unified commercial key visual described above. This is the primary brand moment.

### 2. Benefits Band

A premium cream/glass band partially overlaps the bottom of the hero. It contains four concise benefits with Lucide icons:

- Real Tea Extract — Leaf
- Sweet Mango Flavor — mango/fruit treatment using a suitable professional icon
- Sparkling & Refreshing — Sparkles or Droplets
- Low Sugar — a suitable low-sugar/health icon treatment

Cards share one continuous surface on desktop rather than looking like four unrelated floating tiles.

### 3. Product Showcase

A focused product section with a large transparent can, concise product story, feature facts, and warm editorial lighting. The composition is calmer than the hero but uses the same mango, green-leaf, cream, and condensation language. The can remains the primary product image.

### 4. Video Campaign

A cinematic poster-style video block with a large thumbnail, strong play control, campaign copy, and depth treatment. The video opens using the project's existing interaction pattern. The section must feel like campaign media, not an embedded utility panel.

### 5. Brand / Contact

A compact launch/contact section with an English call to action and clickable official Facebook and Instagram icons beside the supplied social links.

### 6. Team

An all-English team section with restrained editorial cards and the following exact content:

- Surada Supasri — Location Preparation
- Kritaporn Chooitjin — Location Preparation
- Nannapas Nilket — Location Preparation
- Warunpack Bunruangsri — Script Writer & Actor
- Tharathep Hariwon — Script Writer
- Chanathip Wongsamran — Videographer
- Pongsakorn Nichkasem — Website Developer, Poster Designer & Product Designer
- Phachara Suphamethanon — Location Preparation

Subtitle: `Grade 12/4 Students · Marie Wittaya School · Nakhon Ratchasima`

The team section remains visually consistent with the launch campaign through typography, color, spacing, and one deliberate mango accent. It does not introduce a new generic card aesthetic.

### 7. Footer

A concise English footer with brand mark, navigation anchors, and official social links.

## Typography

- Use a bold condensed or display sans for the campaign headline and product name, paired with a highly legible modern sans for body copy and navigation.
- Typography should feel athletic, youthful, and editorial rather than rounded, bubbly, or template-like.
- Large display type may use controlled italic/skew or hand-painted energy, but must remain accessible and must not imitate the reference image's lettering exactly.
- All visible interface and marketing copy is English. Remaining mojibake and Thai text must be removed from both data and components.

## Color and Material System

- Mango gold: primary energy and CTA accent
- Warm orange: price badge and campaign emphasis
- Cream white: readable surfaces and premium contrast
- Leaf green: ingredient and freshness accent
- Charcoal/near-black: typography and primary CTA
- Ice white/cool gray: refreshing highlights

Gradients are reserved for atmospheric light and depth, not used as decoration on every component. Glass effects remain subtle, readable, and limited to surfaces that benefit from translucency.

## Icons

- Replace every emoji in the website with a professional icon.
- Use Lucide icons for interface and benefit actions such as Leaf, Droplets, Sparkles, Play, ShoppingBag, and Users.
- Use official Facebook and Instagram marks from Simple Icons, Iconify, or an equivalent professional package.
- Every interactive icon has an accessible label, visible focus treatment, and an adequate pointer target.

## Responsive Behavior

- Desktop preserves the left-copy/right-key-visual advertising layout.
- Tablet reduces copy width and shifts the art stage behind and below the copy without shrinking the can below the mascot.
- Mobile becomes a deliberate poster stack: compact navigation, text first, then a large centered can composition. The price badge and mascot stay inside the art stage.
- Foreground ice may crop aggressively on mobile but cannot cover the product name, CTA controls, or the can's central branding.
- Decorative artwork is art-directed by breakpoint with `object-position`, container queries/media queries, and bounded transforms; it is not uniformly scaled down.

## Component and Data Design

The Svelte implementation should keep responsibilities focused:

- `Hero.svelte`: semantic hero content and the art-stage assembly.
- Small hero subcomponents may be introduced for the price badge and art stage if this keeps layering and responsive transforms understandable.
- Shared sections remain individual components rather than growing the route page into a single large file.
- `site.ts` remains the content source for navigation, product benefits, team data, and social URLs, with all text normalized to English.
- Global visual tokens, typography, focus states, and section rhythm live in the shared stylesheet; composition-specific positioning stays with the relevant component.

No unnecessary state management or API layer is introduced. Existing anchors and video/order interactions remain progressive and deterministic.

## Accessibility and Motion

- Maintain semantic landmarks, ordered heading levels, keyboard navigation, visible focus, and descriptive alternative text.
- Decorative artwork uses empty alt text or CSS backgrounds; the can has product-specific alt text and the mascot has concise descriptive alt text.
- Contrast must remain readable over the luminous hero using controlled local backplates or text shadows where required.
- Respect `prefers-reduced-motion`: disable can float, splash drift, and parallax while preserving the final composed positions.
- Avoid autoplaying audio or motion that blocks interaction.

## Performance and Asset Delivery

- Keep the transparent can as a high-quality PNG where alpha fidelity is essential.
- Export new opaque campaign backgrounds as responsive WebP/AVIF where supported; export alpha overlays as optimized WebP or PNG after edge validation.
- Supply appropriately sized desktop and mobile artwork variants when a single source would waste bandwidth or crop poorly.
- Preload only the critical hero image/can resources. Lazy-load below-the-fold media.
- Define intrinsic dimensions or aspect ratios for all visual assets to prevent layout shift.

If a generated asset does not match the can's lighting, palette, or perspective, it is rejected or revised rather than patched with additional decoration.

## Failure Handling

- If optional decorative artwork fails, the hero retains a readable mango-gradient base and the real can remains visible.
- Image sizing and fallback colors prevent a blank or collapsed hero.
- Video controls retain a usable poster and clear action if the media cannot load.
- External social links use safe external-link attributes while remaining keyboard accessible.

## Verification and Acceptance Criteria

Implementation is complete only when:

- No source or rendered reference to `chillza-can.png` remains.
- `/images/chillza-can-transparent.png` is the primary product image across the website.
- No emoji or Thai text remains in visible website content.
- Facebook and Instagram use official clickable brand icons in both navigation and contact areas.
- The hero reads as one campaign composition at desktop, tablet, and mobile sizes.
- The can is unmistakably the largest and most important visual element.
- Mango, ice, splash, mascot, badge, and background share believable depth and lighting.
- The mascot is clearly visible but secondary to the can.
- Automated checks cover content, navigation, CTAs, video behavior, social links, and the transparent-can path.
- Type checking, linting, unit tests, end-to-end tests, and production build pass.
- Browser verification covers representative desktop and mobile viewports, keyboard interaction, reduced motion, asset loading, and screenshot inspection for occlusion/cropping defects.

## Out of Scope

- Copying the reference screenshot or its specific illustration/lettering
- Redesigning the CHILL ZA logo or altering the can label
- Adding ecommerce checkout, authentication, a CMS, or new backend services
- Generating a replacement mascot
- Adding decorative elements solely to fill space

