<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
</script>

<section id="video" class="scroll-mt-20 bg-[color:var(--surface-soft)] py-24">
	<div class="page-shell">
		<div class="mx-auto mb-10 max-w-2xl text-center">
			<p class="section-kicker">Campaign Film</p>
			<h2 class="section-title">Watch The Fizz Come Alive</h2>
			<p class="mt-4 text-stone-600">
				The CHILL ZA launch video is getting its final polish. The visual world is ready. The
				storyboard is set. The premiere is next.
			</p>
		</div>

		<div class="video-stage group">
			<div class="video-poster" aria-hidden="true"></div>
			<div class="video-overlay" aria-hidden="true"></div>
			<div class="video-copy">
				<button type="button" aria-label="Advertisement video coming soon" class="video-play">
					<Icon name="play" class="size-7" />
				</button>
				<p class="video-title">Video Coming Soon</p>
				<p class="video-text">Stay tuned for the full CHILL ZA launch spot.</p>
			</div>
		</div>
	</div>
</section>
