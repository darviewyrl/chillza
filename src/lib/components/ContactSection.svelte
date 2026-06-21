<script lang="ts">
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { socialLinks } from '$lib/data/site';
</script>

<section id="contact" class="contact-section scroll-mt-20">
	<div class="page-shell contact-layout">
		<div>
			<p class="section-kicker">Stay Connected</p>
			<h2 class="section-title">Follow the flavor.</h2>
			<p class="section-intro">
				Behind-the-scenes moments, launch updates, and every fresh CHILL ZA drop.
			</p>
		</div>
		<div class="contact-links">
			{#each socialLinks as social (social.href)}
				<a
					href={social.href}
					target="_blank"
					rel="external noreferrer"
					class="contact-link"
					aria-label={social.name}
				>
					<SocialIcon name={social.icon} class="size-7" /><span
						><strong>{social.name}</strong><small>{social.handle}</small></span
					><span aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>
	</div>
</section>
