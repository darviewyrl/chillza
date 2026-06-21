// @vitest-environment jsdom
import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar.svelte';

describe('Navbar positioning hooks', () => {
	it('marks the social icon groups for top-right positioning', () => {
		const { container } = render(Navbar);

		expect(container.querySelector('[data-nav-socials="desktop"]')).toBeTruthy();
		expect(container.querySelector('[data-nav-socials="mobile"]')).toBeTruthy();
	});
});
