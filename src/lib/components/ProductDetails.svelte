<script lang="ts">
	import { product } from '$lib/data/site';

	const details = [
		{ label: 'Product Type', value: product.type, icon: '✦' },
		{ label: 'Flavor', value: product.flavor, icon: '🥭' },
		{ label: 'Price', value: `${product.price} Baht`, icon: '฿' },
		{ label: 'Best for', value: product.bestFor, icon: '☀' }
	];
</script>

<section id="product" class="scroll-mt-20 overflow-hidden bg-stone-950 py-24 text-white">
	<div class="page-shell grid items-center gap-14 lg:grid-cols-2">
		<div class="relative mx-auto min-h-[480px] w-full max-w-lg">
			<div
				class="absolute inset-8 rounded-[45%] bg-gradient-to-br from-yellow-300 to-orange-500 blur-2xl"
			></div>
			<div
				class="absolute inset-4 rounded-[3rem] border border-white/20 bg-white/10 backdrop-blur-md"
			></div>
			<img
				src={product.image}
				alt="A chilled can of CHILL ZA Mango Soda"
				class="float-slow relative mx-auto h-[500px] object-contain drop-shadow-[0_32px_35px_rgba(0,0,0,0.55)]"
			/>
		</div>
		<div>
			<p class="section-kicker text-yellow-300">Meet your new chill</p>
			<h2 class="section-title text-white">
				Mango mood,<br /><span class="text-yellow-300">ready to pop.</span>
			</h2>
			<p class="mt-5 max-w-xl text-lg leading-relaxed text-stone-300">
				Real tea aroma meets a juicy mango sparkle in one bright, easy-drinking can.
			</p>
			<div class="mt-9 grid gap-3 sm:grid-cols-2">
				{#each details as detail (detail.label)}
					<div
						class="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-yellow-300/50 hover:bg-white/10"
					>
						<span
							class="mb-3 grid size-9 place-items-center rounded-full bg-yellow-300 font-black text-stone-950"
							>{detail.icon}</span
						>
						<p class="text-xs font-black uppercase tracking-[0.16em] text-stone-400">
							{detail.label}
						</p>
						<p class="mt-1 font-bold text-white">{detail.value}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
