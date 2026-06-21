<script lang="ts">
	import { campaignArtwork } from '$lib/data/site';
</script>

<figure class="hero-art">
	<picture class="hero-picture">
		<source media="(max-width: 699px)" srcset={campaignArtwork.mobile} />
		<img
			src={campaignArtwork.desktop}
			alt="CHILL ZA Mango Soda with the CHILL ZA mascot"
			class="hero-artwork"
			data-hero-artwork
		/>
	</picture>
	<img
		src={campaignArtwork.title}
		alt="CHILL ZA — Chill Your Day, Pop Your Mood!"
		class="hero-title-art"
	/>
	<img src={campaignArtwork.price} alt="Only 20 Baht" class="hero-price-art" />
</figure>
