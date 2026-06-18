import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TeamMemberCard from './TeamMemberCard.svelte';

const member = {
	name: 'นาย พงศกรณ์ นิจเกษม',
	studentNumber: '27',
	role: 'ผู้จัดทำเว็บไซต์',
	image: '/images/team/member-27.jpg',
	imageAvailable: true
};

describe('TeamMemberCard', () => {
	it('shows initials when the profile image cannot load', async () => {
		render(TeamMemberCard, { member });
		await fireEvent.error(screen.getByRole('img', { name: member.name }));
		expect(screen.getByText('พน')).toBeVisible();
		expect(screen.queryByRole('img', { name: member.name })).not.toBeInTheDocument();
	});
});
