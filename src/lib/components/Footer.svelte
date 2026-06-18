<script lang="ts">
	import { product, socialLinks } from '$lib/data/site';
</script>

<footer class="bg-stone-950 py-12 text-white">
	<div
		class="page-shell flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
	>
		<div>
			<p class="display-title text-3xl font-black tracking-tight">
				CHILL <span class="text-yellow-300">ZA</span>
			</p>
			<p class="mt-2 text-sm font-bold italic text-stone-400">{product.slogan}</p>
		</div>
		<div class="flex gap-3">
			{#each socialLinks as social (social.href)}
				<a
					href={social.href}
					target="_blank"
					rel="external noreferrer"
					aria-label={social.name}
					class="grid size-11 place-items-center rounded-full border border-white/20 font-black transition hover:-translate-y-1 hover:border-yellow-300 hover:bg-yellow-300 hover:text-stone-950"
					>{social.icon}</a
				>
			{/each}
		</div>
		<p class="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">
			School English Advertisement Project
		</p>
	</div>
</footer>
