<script lang="ts">
	import { product } from '$lib/data/site';
	const qualities = [
		'Real tea extract',
		'Sweet mango flavor',
		'Sparkling refreshment',
		'Low sugar'
	];
</script>

<section id="product" class="product-section scroll-mt-20">
	<div class="page-shell product-layout">
		<div class="product-visual">
			<div class="product-sun" aria-hidden="true"></div>
			<img src={product.image} alt="A chilled can of CHILL ZA Mango Soda" class="product-can" />
		</div>
		<div class="product-story">
			<p class="section-kicker">Mango Soda Sparkling Tea</p>
			<h2 class="section-title">A bright pop of mango.</h2>
			<p class="section-intro">
				Juicy mango sweetness meets real tea character and a lively sparkle. Light, playful, and
				made for the moments that need a little more sunshine.
			</p>
			<ul class="quality-list">
				{#each qualities as quality (quality)}<li>{quality}</li>{/each}
			</ul>
			<p class="product-price"><strong>{product.price}</strong><span>Baht<br />per can</span></p>
		</div>
	</div>
</section>
