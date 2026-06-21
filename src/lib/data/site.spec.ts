import { describe, expect, it } from 'vitest';
import { benefits, campaignArtwork, navigation, product, socialLinks, teamMembers } from './site';

describe('CHILL ZA site data', () => {
	it('contains the complete product and navigation content', () => {
		expect(product.name).toBe('CHILL ZA Mango Soda');
		expect(product.price).toBe(20);
		expect(benefits).toHaveLength(4);
		expect(navigation.map((item) => item.href)).toEqual([
			'#home',
			'#benefits',
			'#product',
			'#video',
			'#contact',
			'#team'
		]);
		expect(socialLinks).toHaveLength(2);
	});

	it('uses the approved transparent can and campaign artwork', () => {
		expect(product.image).toBe('/images/chillza-can-transparent.png');
		expect(campaignArtwork).toEqual({
			desktop: '/images/use/gpt-artwork-desktop.png',
			mobile: '/images/use/gpt-artwork-mobile.png',
			title: '/images/use/icon-hero.png',
			price: '/images/use/icon-price.png'
		});
	});

	it('contains English-only campaign content and official social IDs', () => {
		const serialized = JSON.stringify({ product, benefits, teamMembers, socialLinks });
		expect(serialized).not.toMatch(/[\u0E00-\u0E7F]/);
		expect(serialized).not.toContain('๏ฟฝ');
		expect(socialLinks.map((item) => item.icon)).toEqual(['facebook', 'instagram']);
		expect(teamMembers.map((member) => member.name)).toEqual([
			'Surada Supasri',
			'Kritaporn Chooitjin',
			'Nannapas Nilket',
			'Warunpack Bunruangsri',
			'Tharathep Hariwon',
			'Chanathip Wongsamran',
			'Pongsakorn Nichkasem',
			'Phachara Suphamethanon'
		]);
	});

	it('keeps all eight team members in editable structured data', () => {
		expect(teamMembers).toHaveLength(8);
		expect(teamMembers.map((member) => member.studentNumber)).toEqual([
			'01',
			'04',
			'06',
			'12',
			'15',
			'19',
			'27',
			'34'
		]);
		expect(teamMembers.every((member) => member.image.startsWith('/images/team/'))).toBe(true);
	});
});
