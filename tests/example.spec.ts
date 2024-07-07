import { test, expect } from 'playwright-test-coverage';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Vite + React');
});
