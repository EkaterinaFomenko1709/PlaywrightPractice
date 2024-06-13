import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/'); 
  await page.getByRole('link', { name: 'SPECIAL OFFER' }).click();
  await page.getByRole('button', { name: 'SEE OFFER' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByLabel('ShoppingCart').click();
  await page.getByText('REMOVE').click();
});