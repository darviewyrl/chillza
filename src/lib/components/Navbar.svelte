<script lang="ts">
	import { resolve } from '$app/paths';
	import { Menu, X } from 'lucide-svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { navigation, socialLinks } from '$lib/data/site';

	let menuOpen = $state(false);
	const sectionHref = (hash: (typeof navigation)[number]['href']): `/#${string}` => `/${hash}`;
	const socialAnchor = (social: (typeof socialLinks)[number]) => ({
		href: social.href,
		target: '_blank',
		rel: 'external noreferrer',
		'aria-label': social.name
	});
</script>

<header class="site-header">
	<div class="nav-shell">
		<a href={resolve('/#home')} aria-label="CHILL ZA home" class="nav-brand">CHILL ZA</a>
		<div class="nav-desktop hidden items-center gap-7 lg:flex">
			<nav aria-label="Primary navigation" class="flex items-center gap-6">
				{#each navigation as item (item.href)}
					<a href={resolve(sectionHref(item.href))} class="nav-link">{item.label}</a>
				{/each}
			</nav>
			<div class="nav-socials flex items-center gap-3" data-nav-socials="desktop">
				{#each socialLinks as social (social.name)}
					<a {...socialAnchor(social)} class="social-chip"
						><SocialIcon name={social.icon} class="size-5" /></a
					>
				{/each}
			</div>
		</div>
		<div class="nav-mobile flex items-center gap-2 lg:hidden" data-nav-socials="mobile">
			{#each socialLinks as social (social.name)}
				<a {...socialAnchor(social)} class="social-chip"
					><SocialIcon name={social.icon} class="size-5" /></a
				>
			{/each}
			<button
				type="button"
				aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={menuOpen}
				aria-controls="mobile-navigation"
				class="nav-menu-button"
				onclick={() => (menuOpen = !menuOpen)}
			>
				{#if menuOpen}<X aria-hidden="true" size={26} />{:else}<Menu
						aria-hidden="true"
						size={28}
					/>{/if}
			</button>
		</div>
		{#if menuOpen}
			<nav id="mobile-navigation" aria-label="Mobile navigation" class="mobile-navigation">
				{#each navigation as item (item.href)}
					<a href={resolve(sectionHref(item.href))} onclick={() => (menuOpen = false)}
						>{item.label}</a
					>
				{/each}
			</nav>
		{/if}
	</div>
</header>
