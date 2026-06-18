<script lang="ts">
	import { resolve } from '$app/paths';
	import { navigation } from '$lib/data/site';

	let menuOpen = $state(false);

	function sectionHref(hash: (typeof navigation)[number]['href']): `/#${string}` {
		return `/${hash}`;
	}
</script>

<header
	class="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-[#fffaf0]/85 backdrop-blur-xl"
>
	<div class="page-shell flex h-20 items-center justify-between">
		<a href="#home" aria-label="CHILL ZA home" class="group flex items-center gap-2">
			<img
				src="/images/chillza-logo.png"
				alt=""
				class="h-12 w-auto max-w-32 object-contain transition group-hover:rotate-2"
			/>
			<span class="sr-only">CHILL ZA</span>
		</a>
		<nav aria-label="Primary navigation" class="hidden items-center gap-7 lg:flex">
			{#each navigation as item (item.href)}
				<a
					href={resolve(sectionHref(item.href))}
					class="text-sm font-black uppercase tracking-wide text-stone-700 transition hover:text-orange-600"
					>{item.label}</a
				>
			{/each}
		</nav>
		<button
			type="button"
			aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			aria-expanded={menuOpen}
			aria-controls="mobile-navigation"
			class="grid size-11 place-items-center rounded-full border border-stone-200 bg-white text-stone-950 shadow-sm lg:hidden"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span aria-hidden="true" class="text-xl">{menuOpen ? '×' : '☰'}</span>
		</button>
		{#if menuOpen}
			<nav
				id="mobile-navigation"
				aria-label="Mobile navigation"
				class="absolute inset-x-4 top-[calc(100%+.5rem)] grid gap-1 rounded-3xl border border-orange-100 bg-white p-4 shadow-2xl lg:hidden"
			>
				{#each navigation as item (item.href)}
					<a
						href={resolve(sectionHref(item.href))}
						class="rounded-2xl px-4 py-3 font-black text-stone-800 transition hover:bg-yellow-100 hover:text-orange-700"
						onclick={() => (menuOpen = false)}>{item.label}</a
					>
				{/each}
			</nav>
		{/if}
	</div>
</header>
