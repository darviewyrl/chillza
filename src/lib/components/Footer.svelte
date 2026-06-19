<script lang="ts">
	import { resolve } from '$app/paths';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { navigation, product, socialLinks } from '$lib/data/site';

	function sectionHref(hash: (typeof navigation)[number]['href']): `/#${string}` {
		return `/${hash}`;
	}

	function socialAnchor(social: (typeof socialLinks)[number]) {
		return {
			href: social.href,
			target: '_blank',
			rel: 'external noreferrer',
			'aria-label': social.name
		};
	}
</script>

<footer class="bg-[color:var(--ink)] py-12 text-white">
	<div
		class="page-shell flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left"
	>
		<div>
			<p class="display-title text-3xl font-black tracking-tight">
				CHILL <span class="text-[color:var(--brand-sun)]">ZA</span>
			</p>
			<p class="mt-2 text-sm font-bold italic text-white/55">{product.slogan}</p>
		</div>

		<nav
			aria-label="Footer navigation"
			class="flex flex-wrap justify-center gap-4 text-sm font-black uppercase tracking-[0.16em] text-white/70"
		>
			{#each navigation as item (item.href)}
				<a
					href={resolve(sectionHref(item.href))}
					class="transition hover:text-[color:var(--brand-sun)]">{item.label}</a
				>
			{/each}
		</nav>

		<div class="flex items-center justify-center gap-3">
			{#each socialLinks as social (social.href)}
				<a {...socialAnchor(social)} class="social-chip social-chip-dark">
					<SocialIcon name={social.icon} class="size-4" />
				</a>
			{/each}
		</div>
	</div>
</footer>
