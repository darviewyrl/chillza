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
		content="Meet CHILL ZA: sweet mango, real tea, and sparkling refreshment in one bright can. Only 20 Baht."
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
			<h2 class="benefits-title">Feels good. Tastes better.</h2>
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
	<section id="team" class="team-section scroll-mt-20">
		<div class="page-shell">
			<div class="team-heading">
				<p class="section-kicker">Creative Project</p>
				<h2 class="section-title">Created By</h2>
				<p class="section-intro">Grade 12/4 Students · Marie Vittaya School · Nakhon Ratchasima</p>
			</div>
			<div class="team-list">
				{#each teamMembers as member (member.studentNumber)}
					<TeamMemberCard {member} />
				{/each}
			</div>
		</div>
	</section>
</main>
<Footer />
<ComingSoonModal open={orderModalOpen} onClose={closeOrderModal} />
