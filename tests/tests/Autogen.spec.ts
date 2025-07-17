import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'React logo' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Vite logo' }).click();
  const page2 = await page2Promise;
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByText('count is 5Edit src/App.tsx').click();
  await page.getByText('Click on the Vite and React').click();
  await page.getByText('Tailwind is working!').click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Vite logo' }).click();
  const page3 = await page3Promise;
});