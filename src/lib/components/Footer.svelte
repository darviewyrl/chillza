<script lang="ts">
	import { resolve } from '$app/paths';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { navigation, product, socialLinks } from '$lib/data/site';
	const sectionHref = (hash: (typeof navigation)[number]['href']): `/#${string}` => `/${hash}`;
</script>

<footer class="site-footer">
	<div class="page-shell footer-layout">
		<div>
			<p class="footer-brand">CHILL <span>ZA</span></p>
			<p>{product.slogan}</p>
		</div>
		<nav aria-label="Footer navigation">
			{#each navigation as item (item.href)}<a href={resolve(sectionHref(item.href))}
					>{item.label}</a
				>{/each}
		</nav>
		<div class="footer-socials">
			{#each socialLinks as social (social.href)}<a
					href={social.href}
					target="_blank"
					rel="external noreferrer"
					aria-label={social.name}><SocialIcon name={social.icon} class="size-5" /></a
				>{/each}
		</div>
	</div>
</footer>
