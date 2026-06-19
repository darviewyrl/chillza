import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import HeroArt from './HeroArt.svelte';

describe('HeroArt', () => {
	it('renders the campaign art hierarchy with approved assets', () => {
		const { container } = render(HeroArt);

		expect(screen.getByAltText('CHILL ZA Mango Soda can')).toHaveAttribute(
			'src',
			'/images/chillza-can-transparent.png'
		);
		expect(screen.getByAltText('CHILL ZA brand mascot')).toBeInTheDocument();
		expect(container.querySelector('[data-campaign-atmosphere]')).toBeTruthy();
		expect(container.querySelector('[data-campaign-foreground]')).toHaveAttribute('alt', '');
		expect(screen.getByText('20')).toBeVisible();
	});
});
