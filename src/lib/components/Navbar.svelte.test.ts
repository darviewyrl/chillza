import { fireEvent, render, screen, within } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar.svelte';

describe('Navbar', () => {
	it('opens and closes the mobile navigation', async () => {
		render(Navbar);
		const toggle = screen.getByRole('button', { name: 'Open navigation menu' });

		expect(toggle).toHaveAttribute('aria-expanded', 'false');
		await fireEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-expanded', 'true');
		const mobileNavigation = screen.getByRole('navigation', { name: 'Mobile navigation' });
		expect(mobileNavigation).toBeVisible();

		await fireEvent.click(within(mobileNavigation).getByRole('link', { name: 'Benefits' }));
		expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	it('renders official social brand icons', () => {
		render(Navbar);
		expect(
			screen.getByRole('link', { name: 'Facebook' }).querySelector('[data-brand-icon="facebook"]')
		).toBeTruthy();
		expect(
			screen.getByRole('link', { name: 'Instagram' }).querySelector('[data-brand-icon="instagram"]')
		).toBeTruthy();
	});
});
