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
			.filter((part) => part && !['นาย', 'นางสาว'].includes(part))
			.slice(0, 2)
			.map((part) => part[0])
			.join('');
	}
</script>

<article
	class="group overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white p-3 shadow-[0_20px_60px_-35px_rgba(249,115,22,0.5)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_-35px_rgba(249,115,22,0.7)]"
>
	{#if imageFailed || !hydrated || !member.imageAvailable}
		<div
			aria-hidden="true"
			class="grid aspect-[4/3] place-items-center rounded-[1.25rem] bg-gradient-to-br from-yellow-200 via-orange-200 to-orange-300 text-5xl font-black text-orange-900"
		>
			{initials(member.name)}
		</div>
	{:else}
		<img
			src={member.image}
			alt={member.name}
			class="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
			onerror={() => (imageFailed = true)}
		/>
	{/if}
	<div class="px-3 pb-4 pt-5">
		<p class="text-xs font-black uppercase tracking-[0.16em] text-orange-600">
			เลขที่ {Number(member.studentNumber)}
		</p>
		<h3 class="mt-2 text-lg font-black text-stone-950">{member.name}</h3>
		<p class="mt-2 text-sm leading-relaxed text-stone-600">{member.role}</p>
	</div>
</article>
