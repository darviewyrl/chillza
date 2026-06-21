import { render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';
import Hero from './Hero.svelte';

describe('Hero', () => {
	it('does not render the removed descriptive sentence', () => {
		render(Hero, { onOrder: vi.fn() });

		expect(
			screen.queryByText(
				'Sweet mango, real tea, and sparkling bubbles — the perfect refreshment for every moment.'
			)
		).not.toBeInTheDocument();
	});
});
