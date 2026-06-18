<script lang="ts">
	import './layout.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/chillza-logo.png" />
	<meta name="theme-color" content="#fbbf24" />
</svelte:head>
{@render children()}
