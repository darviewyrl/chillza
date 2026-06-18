<script lang="ts">
	import type { Benefit } from '$lib/data/site';
	let { benefit, index }: { benefit: Benefit; index: number } = $props();
</script>

<article
	class="group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(249,115,22,0.45)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_-30px_rgba(249,115,22,0.65)]"
>
	<span class="absolute right-5 top-4 text-6xl font-black text-orange-50">0{index + 1}</span>
	<div
		class="relative mb-5 grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-200 text-3xl shadow-inner transition duration-300 group-hover:rotate-6 group-hover:scale-110"
	>
		{benefit.icon}
	</div>
	<h3 class="relative text-xl font-black text-stone-900">{benefit.title}</h3>
	<p class="relative mt-2 leading-relaxed text-stone-600">{benefit.description}</p>
</article>
