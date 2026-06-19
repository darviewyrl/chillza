<script lang="ts">
	import HeroArt from '$lib/components/HeroArt.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let { onOrder }: { onOrder: (event: MouseEvent) => void } = $props();
</script>

<section id="home" class="hero-shell scroll-mt-20 overflow-hidden pt-28 lg:pt-24">
	<div class="page-shell hero-grid pb-18 lg:pb-14">
		<div class="hero-copy">
			<p class="hero-kicker">Mango Soda Sparkling Tea</p>
			<h1 class="display-title hero-title">CHILL ZA</h1>
			<p class="hero-slogan">
				<span>Chill Your Day,</span>
				<span>Pop Your Mood!</span>
			</p>
			<p class="hero-description">
				A tropical burst of sweet mango, real tea extract, and sparkling bubbles made for bright
				breaks and even brighter moods.
			</p>
			<div class="hero-actions">
				<button type="button" class="cta-primary" onclick={onOrder}>
					<Icon name="shopping-bag" class="size-4" />
					<span>Order Now</span>
				</button>
				<a class="cta-secondary" href="#video">
					<Icon name="play" class="size-4" />
					<span>Watch Video</span>
				</a>
			</div>
		</div>

		<div class="hero-stage">
			<HeroArt />
		</div>
	</div>
</section>
