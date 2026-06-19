<script lang="ts">
	import { resolve } from '$app/paths';
	import { Menu, X } from 'lucide-svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { navigation, socialLinks } from '$lib/data/site';

	let menuOpen = $state(false);

	function sectionHref(hash: (typeof navigation)[number]['href']): `/#${string}` {
		return `/${hash}`;
	}

	function socialAnchor(social: (typeof socialLinks)[number]) {
		return {
			href: social.href,
			target: '_blank',
			rel: 'noreferrer',
			'aria-label': social.name
		};
	}
</script>

<header
	class="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-[color:var(--surface-glass)] backdrop-blur-xl"
>
	<div class="page-shell flex h-20 items-center justify-between gap-4">
		<a href={resolve('/#home')} aria-label="CHILL ZA home" class="group flex items-center gap-2">
			<img
				src="/images/chillza-logo.png"
				alt=""
				class="h-12 w-auto max-w-32 object-contain transition duration-300 group-hover:-rotate-2"
			/>
			<span class="sr-only">CHILL ZA</span>
		</a>

		<div class="hidden items-center gap-8 lg:flex">
			<nav aria-label="Primary navigation" class="flex items-center gap-7">
				{#each navigation as item (item.href)}
					<a
						href={resolve(sectionHref(item.href))}
						class="nav-link text-sm font-black uppercase tracking-[0.22em] text-stone-800 transition"
						>{item.label}</a
					>
				{/each}
			</nav>

			<div class="flex items-center gap-3">
				{#each socialLinks as social (social.name)}
					<a {...socialAnchor(social)} class="social-chip">
						<SocialIcon name={social.icon} class="size-4" />
					</a>
				{/each}
			</div>
		</div>

		<button
			type="button"
			aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			aria-expanded={menuOpen}
			aria-controls="mobile-navigation"
			class="grid size-11 place-items-center rounded-full border border-stone-200 bg-white/90 text-stone-950 shadow-sm lg:hidden"
			onclick={() => (menuOpen = !menuOpen)}
		>
			{#if menuOpen}
				<X aria-hidden="true" size={20} />
			{:else}
				<Menu aria-hidden="true" size={20} />
			{/if}
		</button>

		{#if menuOpen}
			<nav
				id="mobile-navigation"
				aria-label="Mobile navigation"
				class="absolute inset-x-4 top-[calc(100%+.5rem)] grid gap-1 rounded-[2rem] border border-orange-100 bg-white/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
			>
				{#each navigation as item (item.href)}
					<a
						href={resolve(sectionHref(item.href))}
						class="rounded-2xl px-4 py-3 font-black uppercase tracking-[0.14em] text-stone-800 transition hover:bg-yellow-100 hover:text-orange-700"
						onclick={() => (menuOpen = false)}>{item.label}</a
					>
				{/each}
				<div class="mt-2 flex items-center gap-3 border-t border-stone-200 pt-3">
					{#each socialLinks as social (social.name)}
						<a {...socialAnchor(social)} class="social-chip">
							<SocialIcon name={social.icon} class="size-4" />
						</a>
					{/each}
				</div>
			</nav>
		{/if}
	</div>
</header>
