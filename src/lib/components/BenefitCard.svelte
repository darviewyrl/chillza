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
		<p class="benefit-index">0{index + 1}</p>
		<h3 class="benefit-title">{benefit.title}</h3>
		<p class="benefit-description">{benefit.description}</p>
	</div>
</article>
