<script lang="ts">
	import { tick } from 'svelte';
	import BenefitCard from '$lib/components/BenefitCard.svelte';
	import ComingSoonModal from '$lib/components/ComingSoonModal.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ProductDetails from '$lib/components/ProductDetails.svelte';
	import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
	import VideoPlaceholder from '$lib/components/VideoPlaceholder.svelte';
	import { benefits, teamMembers } from '$lib/data/site';

	let orderModalOpen = $state(false);
	let orderTrigger: HTMLButtonElement | null = null;

	function openOrderModal(event: MouseEvent) {
		orderTrigger = event.currentTarget as HTMLButtonElement;
		orderModalOpen = true;
	}

	async function closeOrderModal() {
		orderModalOpen = false;
		await tick();
		orderTrigger?.focus();
	}
</script>

<svelte:head>
	<title>CHILL ZA Mango Soda | Premium Mango Sparkling Tea</title>
	<meta
		name="description"
		content="Discover CHILL ZA Mango Soda Sparkling Tea, a bright commercial-style beverage launch experience with juicy mango flavor, tea extract, and sparkling refreshment. Only 20 Baht."
	/>
	<meta property="og:title" content="CHILL ZA Mango Soda" />
	<meta property="og:description" content="Chill Your Day, Pop Your Mood!" />
	<meta property="og:type" content="website" />
</svelte:head>

<Navbar />
<main>
	<Hero onOrder={openOrderModal} />

	<section id="benefits" class="benefits-section scroll-mt-20">
		<div class="page-shell">
			<div class="benefits-band">
				{#each benefits as benefit, index (benefit.title)}
					<BenefitCard {benefit} {index} />
				{/each}
			</div>
		</div>
	</section>

	<ProductDetails />
	<VideoPlaceholder />
	<ContactSection />

	<section id="team" class="scroll-mt-20 bg-[color:var(--surface-soft)] py-24">
		<div class="page-shell">
			<div class="mx-auto mb-12 max-w-3xl text-center">
				<p class="section-kicker">Team</p>
				<h2 class="section-title">The People Behind CHILL ZA</h2>
				<p class="mt-4 text-lg leading-relaxed text-stone-600">
					Grade 12/4 Students · Marie Wittaya School · Nakhon Ratchasima
				</p>
			</div>
			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{#each teamMembers as member (member.studentNumber)}
					<TeamMemberCard {member} />
				{/each}
			</div>
		</div>
	</section>
</main>
<Footer />

<ComingSoonModal open={orderModalOpen} onClose={closeOrderModal} />
