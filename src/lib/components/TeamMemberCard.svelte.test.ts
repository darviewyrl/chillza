import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TeamMemberCard from './TeamMemberCard.svelte';

const member = {
	name: 'Pongsakorn Nichkasem',
	studentNumber: '27',
	role: 'Website Developer',
	image: '/images/team/member-27.jpg',
	imageAvailable: false
};

describe('TeamMemberCard', () => {
	it('presents a team member as an editorial credit', () => {
		render(TeamMemberCard, { member });
		expect(screen.getByRole('heading', { name: member.name })).toBeVisible();
		expect(screen.getByText(member.role)).toBeVisible();
		expect(screen.getByText(member.studentNumber)).toBeVisible();
	});
});
