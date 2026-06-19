<script lang="ts">
	import { campaignArtwork, product } from '$lib/data/site';
</script>

<figure class="hero-art">
	<img
		src={campaignArtwork.atmosphere}
		alt=""
		aria-hidden="true"
		class="hero-atmosphere"
		data-campaign-atmosphere
	/>
	<div class="hero-aura" aria-hidden="true"></div>
	<div class="hero-shadow" aria-hidden="true"></div>
	<img
		src="/images/chillza-character.png"
		alt="CHILL ZA brand mascot"
		class="hero-mascot"
		data-hero-mascot
	/>
	<div class="hero-mango-shadow" aria-hidden="true"></div>
	<img src={product.image} alt="CHILL ZA Mango Soda can" class="hero-can" data-hero-can />
	<div class="hero-badge" aria-label={`Only ${product.price} Baht`}>
		<span>Only</span>
		<strong>{product.price}</strong>
		<span>Baht</span>
	</div>
	<img
		src={campaignArtwork.foreground}
		alt=""
		aria-hidden="true"
		class="hero-foreground"
		data-campaign-foreground
	/>
</figure>
