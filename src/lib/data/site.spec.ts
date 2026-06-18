import { describe, expect, it } from 'vitest';
import { benefits, navigation, product, socialLinks, teamMembers } from './site';

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
