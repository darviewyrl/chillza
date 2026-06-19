<script lang="ts">
	import {
		CandyOff,
		Citrus,
		Droplets,
		Leaf,
		Play,
		ShoppingBag,
		Sparkles,
		Users
	} from 'lucide-svelte';
	import type { IconName } from '$lib/data/site';

	const icons = {
		leaf: Leaf,
		mango: Citrus,
		sparkles: Sparkles,
		'low-sugar': CandyOff,
		droplets: Droplets,
		'shopping-bag': ShoppingBag,
		play: Play,
		users: Users
	} as const;

	let {
		name,
		size = 20,
		strokeWidth = 2,
		class: className = ''
	}: {
		name: IconName;
		size?: number;
		strokeWidth?: number;
		class?: string;
	} = $props();

	const IconComponent = $derived(icons[name]);
</script>

<IconComponent {size} {strokeWidth} class={className} />
