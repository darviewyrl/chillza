<script lang="ts">
	import { product } from '$lib/data/site';
	let { onOrder }: { onOrder: (event: MouseEvent) => void } = $props();
</script>

<section
	id="home"
	class="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#fff8c7_0,transparent_32%),linear-gradient(135deg,#fffdf2_0%,#ffe166_45%,#ff9c1a_100%)] pt-28 lg:pt-20"
>
	<div
		aria-hidden="true"
		class="absolute -left-24 top-32 size-72 rounded-full border-[45px] border-white/25"
	></div>
	<div
		aria-hidden="true"
		class="bubble absolute right-[8%] top-[18%] size-12 rounded-full border-2 border-white/70 bg-white/20 shadow-inner"
	></div>
	<div
		aria-hidden="true"
		class="bubble-delay absolute left-[46%] top-[24%] size-6 rounded-full border border-white/80 bg-white/30"
	></div>
	<div
		aria-hidden="true"
		class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fffaf0] to-transparent"
	></div>

	<div
		class="page-shell relative grid items-center gap-10 pb-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-4 lg:pb-12"
	>
		<div class="relative z-20 text-center lg:text-left">
			<div
				class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-bold tracking-wide text-orange-900 shadow-sm backdrop-blur-md"
			>
				<span class="size-2 animate-pulse rounded-full bg-green-600"></span>
				{product.thaiName}
			</div>
			<p class="mb-2 text-sm font-black uppercase tracking-[0.32em] text-green-800">
				Mango Soda Sparkling Tea
			</p>
			<h1
				class="display-title text-[clamp(3.6rem,9vw,7.5rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-stone-950"
			>
				<span class="block">Chill</span>
				<span
					class="text-stroke block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent"
					>ZA</span
				>
			</h1>
			<p class="mx-auto mt-7 max-w-xl text-xl font-bold italic text-stone-800 sm:text-2xl lg:mx-0">
				“{product.slogan}”
			</p>
			<p class="mx-auto mt-3 max-w-lg text-base leading-relaxed text-stone-700 lg:mx-0">
				A tropical pop of sweet mango, real tea and sparkling refreshment—made for bright breaks and
				even brighter moods.
			</p>
			<div class="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
				<button type="button" class="cta-primary" onclick={onOrder}>Order Now</button>
				<a class="cta-secondary" href="#video"><span aria-hidden="true">▶</span> Watch Video</a>
			</div>
		</div>

		<div
			class="relative -mt-16 mx-auto h-[460px] w-full max-w-[620px] sm:mt-0 sm:h-[610px] lg:h-[680px]"
		>
			<div
				class="absolute left-1/2 top-1/2 size-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-2xl sm:size-[480px]"
			></div>
			<img
				src="/images/chillza-character.png"
				alt="CHILL ZA yellow-haired mascot"
				class="float-slow absolute -right-14 bottom-3 z-0 hidden h-[76%] object-contain drop-shadow-2xl sm:block lg:-right-4 lg:h-[80%]"
			/>
			<img
				src={product.image}
				alt="CHILL ZA Mango Soda can"
				class="float-product absolute left-1/2 top-[55%] z-10 h-[68%] object-contain drop-shadow-[0_32px_30px_rgba(111,63,0,0.32)] sm:left-[43%] sm:h-[74%] lg:left-[38%]"
			/>
			<img
				src="/images/mango.png"
				alt=""
				class="float-slow absolute -bottom-8 -left-12 z-20 w-44 object-contain drop-shadow-xl sm:w-60 lg:-left-6"
			/>
			<img
				src="/images/ice.png"
				alt=""
				class="float-reverse absolute -right-8 top-6 z-0 w-32 rotate-12 object-contain opacity-90 sm:w-44"
			/>
			<div
				class="absolute right-1 top-[18%] z-30 -rotate-6 rounded-full border-4 border-white bg-orange-500 px-5 py-4 text-center text-white shadow-xl sm:right-[6%]"
			>
				<span class="block text-[10px] font-black uppercase tracking-wider">Only</span>
				<strong class="block text-3xl leading-none">{product.price}</strong>
				<span class="text-xs font-black uppercase">Baht</span>
			</div>
		</div>
	</div>
</section>
