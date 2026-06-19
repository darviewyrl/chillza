<script lang="ts">
	import { siFacebook, siInstagram } from 'simple-icons';
	import type { SocialIconName } from '$lib/data/site';

	const icons = {
		facebook: siFacebook,
		instagram: siInstagram
	} as const satisfies Record<SocialIconName, { path: string }>;

	let {
		name,
		class: className = ''
	}: {
		name: SocialIconName;
		class?: string;
	} = $props();

	const icon = $derived(icons[name]);
</script>

<svg data-brand-icon={name} viewBox="0 0 24 24" role="img" aria-hidden="true" class={className}>
	<path d={icon.path} fill="currentColor" />
</svg>
