<script lang="ts">
	import { onMount } from 'svelte';
	import type { TeamMember } from '$lib/data/site';

	let { member }: { member: TeamMember } = $props();
	let imageFailed = $state(false);
	let hydrated = $state(false);

	onMount(() => {
		hydrated = true;
	});

	function initials(name: string) {
		return name
			.split(/\s+/)
			.filter(Boolean)
			.slice(0, 2)
			.map((part) => part[0])
			.join('')
			.toUpperCase();
	}
</script>

<article class="team-card">
	{#if imageFailed || !hydrated || !member.imageAvailable}
		<div class="team-fallback" aria-hidden="true">
			{initials(member.name)}
		</div>
	{:else}
		<img
			src={member.image}
			alt={member.name}
			class="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
			onerror={() => (imageFailed = true)}
		/>
	{/if}

	<div class="px-3 pb-4 pt-5">
		<p class="team-number">Student {Number(member.studentNumber)}</p>
		<h3 class="mt-2 text-lg font-black text-stone-950">{member.name}</h3>
		<p class="mt-2 text-sm leading-relaxed text-stone-600">{member.role}</p>
	</div>
</article>
