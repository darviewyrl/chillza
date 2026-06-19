<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { product } from '$lib/data/site';

	const details = [
		{ label: 'Product Type', value: product.type, icon: 'droplets' },
		{ label: 'Flavor', value: product.flavor, icon: 'mango' },
		{ label: 'Price', value: `${product.price} Baht`, icon: 'sparkles' },
		{ label: 'Best For', value: product.bestFor, icon: 'leaf' }
	] as const;
</script>

<section id="product" class="scroll-mt-20 bg-[color:var(--ink)] py-24 text-white">
	<div class="page-shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
		<div class="product-stage">
			<div class="product-halo" aria-hidden="true"></div>
			<div class="product-panel" aria-hidden="true"></div>
			<img src={product.image} alt="A chilled can of CHILL ZA Mango Soda" class="product-can" />
		</div>

		<div>
			<p class="section-kicker text-[color:var(--brand-sun)]">The Product</p>
			<h2 class="section-title text-white">
				Bright mango fizz,
				<span class="text-[color:var(--brand-sun)]">ready to launch.</span>
			</h2>
			<p class="mt-5 max-w-xl text-lg leading-relaxed text-white/74">
				CHILL ZA blends juicy mango sweetness, sparkling lift, and real tea character into a can
				that feels playful, polished, and easy to crave.
			</p>

			<div class="mt-9 grid gap-4 sm:grid-cols-2">
				{#each details as detail (detail.label)}
					<div class="product-detail">
						<div class="product-detail-icon">
							<Icon name={detail.icon} class="size-5" />
						</div>
						<p class="product-detail-label">{detail.label}</p>
						<p class="product-detail-value">{detail.value}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
