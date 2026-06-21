<script lang="ts">
	import type { TeamMember } from '$lib/data/site';
	let { member }: { member: TeamMember } = $props();
</script>

<article class="team-credit">
	<span class="team-number">{member.studentNumber}</span>
	<div>
		<h3>{member.name}</h3>
		<p>{member.role}</p>
	</div>
</article>
