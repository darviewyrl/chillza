<script lang="ts">
	import HeroArt from '$lib/components/HeroArt.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let { onOrder }: { onOrder: (event: MouseEvent) => void } = $props();
</script>

<section id="home" class="hero-shell scroll-mt-20 overflow-hidden">
	<HeroArt />
	<div class="hero-copy">
		<h1 class="sr-only">CHILL ZA Mango Soda Sparkling Tea</h1>
		<div class="hero-actions">
			<button type="button" class="cta-primary" onclick={onOrder}>
				<span>Order Now</span><span aria-hidden="true">→</span>
			</button>
			<a class="cta-secondary" href="#video">
				<span class="cta-play"><Icon name="play" class="size-4" /></span>
				<span>Watch Video</span>
			</a>
		</div>
	</div>
</section>
