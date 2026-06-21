<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import type { Benefit } from '$lib/data/site';

	let { benefit, index }: { benefit: Benefit; index: number } = $props();
</script>

<article class="benefit-item">
	<div class="benefit-icon-wrap">
		<Icon name={benefit.icon} class="benefit-icon" />
	</div>
	<div>
		<span class="sr-only">Benefit {index + 1}</span>
		<h3 class="benefit-title">{benefit.title}</h3>
	</div>
</article>
