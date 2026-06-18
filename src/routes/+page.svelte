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
	<title>CHILL ZA Mango Soda | Chill Your Day, Pop Your Mood!</title>
	<meta
		name="description"
		content="Meet CHILL ZA Mango Soda Sparkling Tea—a bright, fizzy mango drink made for hot days and fun breaks. Only 20 Baht."
	/>
	<meta property="og:title" content="CHILL ZA Mango Soda" />
	<meta property="og:description" content="Chill Your Day, Pop Your Mood!" />
	<meta property="og:type" content="website" />
</svelte:head>

<Navbar />
<main>
	<Hero onOrder={openOrderModal} />

	<section id="benefits" class="scroll-mt-20 bg-[#fffaf0] py-24">
		<div class="page-shell">
			<div class="mx-auto mb-12 max-w-2xl text-center">
				<p class="section-kicker">Why you'll love it</p>
				<h2 class="section-title">
					Four reasons to<br /><span class="text-orange-500">pop your mood.</span>
				</h2>
				<p class="mt-4 text-lg text-stone-600">
					A little tea, a lot of mango, and just the right amount of sparkle.
				</p>
			</div>
			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{#each benefits as benefit, index (benefit.title)}
					<BenefitCard {benefit} {index} />
				{/each}
			</div>
		</div>
	</section>

	<ProductDetails />
	<VideoPlaceholder />
	<ContactSection />

	<section id="team" class="scroll-mt-20 overflow-hidden bg-[#fffaf0] py-24">
		<div class="page-shell">
			<div class="mx-auto mb-12 max-w-3xl text-center">
				<p class="section-kicker">The people behind the pop</p>
				<h2 class="section-title">Created By</h2>
				<p class="mt-4 text-lg leading-relaxed text-stone-600">
					จัดทำโดย นักเรียนชั้น ม.6/4 โรงเรียนมารีย์วิทยา นครราชสีมา
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
