<script lang="ts">
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { socialLinks } from '$lib/data/site';
</script>

<section id="contact" class="scroll-mt-20 bg-white py-24">
	<div class="page-shell">
		<div class="contact-shell">
			<div class="contact-copy">
				<p class="section-kicker text-green-900">Stay Connected</p>
				<h2 class="section-title text-stone-950">
					Follow the launch,
					<span class="text-[color:var(--brand-mango-deep)]">join the buzz.</span>
				</h2>
				<p class="mt-4 max-w-md font-medium text-stone-700">
					See behind the scenes, campaign updates, and every new CHILL ZA drop through our official
					social channels.
				</p>
			</div>

			<div class="grid gap-4 sm:grid-cols-2">
				{#each socialLinks as social (social.href)}
					<a href={social.href} target="_blank" rel="external noreferrer" class="contact-card">
						<span class="contact-icon">
							<SocialIcon name={social.icon} class="size-5" />
						</span>
						<p class="contact-label">{social.name}</p>
						<p class="contact-handle">{social.handle}</p>
						<span class="contact-linktext">Visit channel</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
