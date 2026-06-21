import { expect, test } from '@playwright/test';

test.describe('CHILL ZA landing page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('presents the product and every required section', async ({ page }) => {
		await expect(page.getByRole('heading', { level: 1, name: /chill za/i })).toBeVisible();
		for (const id of ['home', 'benefits', 'product', 'video', 'contact', 'team']) {
			await expect(page.locator(`#${id}`)).toHaveCount(1);
		}
		await expect(page.getByAltText('Only 20 Baht')).toBeVisible();
		await expect(page.locator('[data-hero-artwork]')).toHaveAttribute(
			'src',
			'/images/use/gpt-artwork-desktop.png'
		);
		await expect(page.getByAltText('CHILL ZA — Chill Your Day, Pop Your Mood!')).toBeVisible();
		await expect(page.locator('[data-hero-can]')).toHaveCount(0);
		await expect(page.locator('[data-hero-mascot]')).toHaveCount(0);
		await expect(page.locator('body')).not.toContainText(/[\u0E00-\u0E7F]/);
	});

	test('opens the order modal and restores focus after Escape', async ({ page }) => {
		const orderButton = page.getByRole('button', { name: 'Order Now' });
		await orderButton.click();
		await expect(page.getByRole('dialog', { name: 'Ordering coming soon' })).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(page.getByRole('dialog', { name: 'Ordering coming soon' })).toBeHidden();
		await expect(orderButton).toBeFocused();
	});

	test('uses safe external social links and team fallbacks', async ({ page }) => {
		const facebook = page.getByRole('link', { name: /facebook/i }).first();
		await expect(facebook).toHaveAttribute('target', '_blank');
		await expect(facebook).toHaveAttribute('rel', /noreferrer/);
		await expect(facebook).toHaveAttribute('href', 'https://facebook.com/ChillZaThailand');
		await expect(page.getByRole('link', { name: 'Instagram' }).first()).toHaveAttribute(
			'href',
			'https://instagram.com/chillza.official'
		);
		await expect(page.getByRole('heading', { name: 'Pongsakorn Nichkasem' })).toBeVisible();
	});

	test('does not create horizontal page overflow', async ({ page }) => {
		const sizes = await page.evaluate(() => ({
			scrollWidth: document.documentElement.scrollWidth,
			clientWidth: document.documentElement.clientWidth
		}));
		expect(sizes.scrollWidth).toBeLessThanOrEqual(sizes.clientWidth + 1);
	});
});

test('mobile navigation opens and closes after selection', async ({ page }, testInfo) => {
	test.skip(!testInfo.project.name.includes('mobile'), 'Mobile-only navigation behavior');
	await page.goto('/');
	const menuButton = page.getByRole('button', { name: 'Open navigation menu' });
	await menuButton.click();
	const mobileNavigation = page.getByRole('navigation', { name: 'Mobile navigation' });
	await expect(mobileNavigation).toBeVisible();
	await mobileNavigation.getByRole('link', { name: 'Benefits' }).click();
	await expect(mobileNavigation).toBeHidden();
	await expect(page).toHaveURL(/#benefits$/);
});
