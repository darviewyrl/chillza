<script lang="ts">
	import { socialLinks } from '$lib/data/site';
</script>

<section id="contact" class="scroll-mt-20 bg-white py-24">
	<div class="page-shell">
		<div
			class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 px-6 py-14 shadow-[0_30px_80px_-35px_rgba(234,88,12,0.55)] sm:px-12 lg:px-20"
		>
			<div
				aria-hidden="true"
				class="absolute -right-20 -top-20 size-72 rounded-full border-[45px] border-white/20"
			></div>
			<div class="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
				<div>
					<p class="section-kicker text-green-900">Join the chill side</p>
					<h2 class="section-title text-stone-950">Scan, follow,<br />and chill with us!</h2>
					<p class="mt-4 max-w-md font-medium text-stone-700">
						Follow our school project journey and catch every bright, bubbly update.
					</p>
				</div>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each socialLinks as social (social.href)}
						<a
							href={social.href}
							target="_blank"
							rel="external noreferrer"
							class="group rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white"
						>
							<span
								class="grid size-12 place-items-center rounded-2xl bg-stone-950 text-2xl font-black text-white transition group-hover:rotate-6 group-hover:bg-green-700"
								>{social.icon}</span
							>
							<p class="mt-6 text-xs font-black uppercase tracking-[0.18em] text-orange-600">
								{social.name}
							</p>
							<p class="mt-1 text-lg font-black text-stone-950">{social.handle}</p>
							<span
								class="mt-5 inline-block font-bold text-stone-500 transition group-hover:translate-x-1 group-hover:text-stone-950"
								>Follow now →</span
							>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
