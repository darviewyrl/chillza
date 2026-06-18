# CHILL ZA Mango Soda

A responsive SvelteKit landing page for the CHILL ZA school English advertisement project.

## Local development

```sh
npm install
npm run dev
```

## Quality checks

```sh
npm run check
npm run lint
npm run test:unit -- --run
npm run test:e2e
npm run build
```

The production build is generated as a static site in `build/` with `@sveltejs/adapter-static` and is ready for Vercel deployment.

## Updating content

Product details, benefits, social links, navigation, and team members live in `src/lib/data/site.ts`.

To add a team photo:

1. Save the image to `static/images/team/member-XX.jpg` using the matching student number.
2. Set that member's `imageAvailable` value to `true` in `src/lib/data/site.ts`.

The card shows an initials avatar whenever `imageAvailable` is `false` or the file cannot load.

## Adding the advertisement video

Replace the placeholder inside `src/lib/components/VideoPlaceholder.svelte` with an embedded iframe or a local `<video>` element. Keep the `id="video"` section anchor so navigation continues to work.

## Image assets

- Original source images are preserved in `images/`.
- Web-ready transparent PNG files are served from `static/images/`.
- Generated chroma-key intermediates are excluded from Git under `tmp/`.
