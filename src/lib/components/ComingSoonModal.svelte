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
</script>

<svelte:window onkeydown={(event) => open && event.key === 'Escape' && onClose()} />
{#if open}
	<div
		role="presentation"
		class="modal-backdrop"
		onclick={(event) => event.target === event.currentTarget && onClose()}
	>
		<div
			bind:this={dialog}
			role="dialog"
			aria-modal="true"
			aria-label="Ordering coming soon"
			tabindex="0"
			class="modal-card"
		>
			<span class="modal-mark" aria-hidden="true">ZA</span>
			<p class="section-kicker">Order update</p>
			<h2>Coming Soon!</h2>
			<p>Our fizzy mango mood is almost ready to order. Follow us for the first pop.</p>
			<button type="button" class="cta-primary" onclick={onClose}>Keep chilling</button>
		</div>
	</div>
{/if}
