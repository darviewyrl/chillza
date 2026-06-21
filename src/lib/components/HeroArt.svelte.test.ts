import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import HeroArt from './HeroArt.svelte';

describe('HeroArt', () => {
	it('renders the campaign art hierarchy with approved assets', () => {
		const { container } = render(HeroArt);

		expect(screen.getByAltText('CHILL ZA Mango Soda with the CHILL ZA mascot')).toHaveAttribute(
			'src',
			'/images/use/gpt-artwork-desktop.png'
		);
		expect(container.querySelector('source')).toHaveAttribute(
			'srcset',
			'/images/use/gpt-artwork-mobile.png'
		);
		expect(screen.getByAltText('CHILL ZA — Chill Your Day, Pop Your Mood!')).toHaveAttribute(
			'src',
			'/images/use/icon-hero.png'
		);
		expect(screen.getByAltText('Only 20 Baht')).toHaveAttribute(
			'src',
			'/images/use/icon-price.png'
		);
		expect(container.querySelector('[data-hero-can]')).toBeNull();
		expect(container.querySelector('[data-hero-mascot]')).toBeNull();
	});
});
