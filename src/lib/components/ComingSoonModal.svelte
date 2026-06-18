<script lang="ts">
	let { open, onClose }: { open: boolean; onClose: () => void } = $props();
	let dialog = $state<HTMLDivElement>();

	$effect(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		queueMicrotask(() => dialog?.focus());
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	});

	function handleKeydown(event: KeyboardEvent) {
		if (open && event.key === 'Escape') onClose();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div
		role="presentation"
		class="fixed inset-0 z-[100] grid place-items-center bg-stone-950/70 p-5 backdrop-blur-sm"
		onclick={(event) => {
			if (event.target === event.currentTarget) onClose();
		}}
	>
		<div
			bind:this={dialog}
			role="dialog"
			aria-modal="true"
			aria-label="Ordering coming soon"
			tabindex="0"
			class="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/70 bg-[#fffaf0] p-8 text-center shadow-2xl outline-none sm:p-10"
		>
			<div
				aria-hidden="true"
				class="absolute -right-10 -top-10 size-36 rounded-full bg-yellow-300/70"
			></div>
			<span
				class="relative mx-auto grid size-16 place-items-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 text-3xl shadow-lg"
				>🥭</span
			>
			<p class="relative mt-6 text-xs font-black uppercase tracking-[0.22em] text-orange-600">
				Order update
			</p>
			<h2 class="relative mt-2 text-4xl font-black text-stone-950">Coming Soon!</h2>
			<p class="relative mt-3 leading-relaxed text-stone-600">
				Our fizzy mango mood is almost ready to order. Follow us for the first pop!
			</p>
			<button type="button" class="cta-primary relative mt-7 w-full" onclick={onClose}
				>Keep chilling</button
			>
		</div>
	</div>
{/if}
