import { test, expect } from '@playwright/test';

test('homepage has correct title PASS TEST', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle(/Vite/);
});

test('click count button', async ({ page }) => {
    await page.goto('http://localhost:5173');
    const countButton = page.getByRole('button');
    await expect(countButton).toHaveText('count is 0');
    await countButton.click();
    await expect(countButton).toHaveText('count is 1');
});

test('check if Tailwind is working', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const tailwindText = page.getByText('Tailwind is working!');
  await expect(tailwindText).toBeVisible();
});

test('check if Vite and React logos are visible', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const viteLogo = page.getByAltText('Vite logo');
  const reactLogo = page.getByAltText('React logo');
  await expect(viteLogo).toBeVisible();
  await expect(reactLogo).toBeVisible();
});

test('check if read the docs text is visible', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const readTheDocsText = page.getByText('Click on the Vite and React logos to learn more');
  await expect(readTheDocsText).toBeVisible();
}); 

test('check if edit src/App.tsx text is visible', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const editText = page.getByText('Edit src/App.tsx and save to test HMR');
  await expect(editText).toBeVisible();
});

test('check if card class is applied', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const cardElement = page.locator('.card');
  await expect(cardElement).toBeVisible();
}); 

test('check if react button links to React documentation', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const reactLink = page.getByRole('link', { name: 'React logo' });
  await expect(reactLink).toHaveAttribute('href', 'https://react.dev');
});

test('check if vite button links to Vite documentation', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const viteLink = page.getByRole('link', { name: 'Vite logo' });
  await expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
});

test('external links open in a new tab with proper security attributes', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const links = [
    { name: 'React logo', url: 'https://react.dev' },
    { name: 'Vite logo', url: 'https://vite.dev' },
  ];

  for (const { name } of links) {
    const link = page.getByRole('link', { name });
    await expect(link).toHaveAttribute('target', '_blank');
  }
});

test('check if vite + react is present', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const readTheDocsText = page.getByText('Vite + React');
  await expect(readTheDocsText).toBeVisible();
}); 

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