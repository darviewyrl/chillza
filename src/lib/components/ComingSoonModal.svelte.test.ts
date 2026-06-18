import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';
import ComingSoonModal from './ComingSoonModal.svelte';

describe('ComingSoonModal', () => {
	it('closes with Escape and calls the close handler', async () => {
		const onClose = vi.fn();
		render(ComingSoonModal, { open: true, onClose });

		expect(screen.getByRole('dialog', { name: 'Ordering coming soon' })).toBeVisible();
		await fireEvent.keyDown(window, { key: 'Escape' });
		expect(onClose).toHaveBeenCalledOnce();
	});
});
