import { test, expect } from '@playwright/test';


test('Correct answer increases points', async ({ page }) => {
  await page.goto('');
  await expect(page.getByText("Teie punktid: ")).toHaveText("Teie punktid: 0");

  // Click correct answer
  await page.getByText("Hunt").click();
  await expect(page.getByText("Teie punktid: ")).toHaveText("Teie punktid: 1");
});

test('Incorrect answer does not change points', async ({ page }) => {
  await page.goto(''); 
  await expect(page.getByText("Teie punktid: ")).toHaveText("Teie punktid: 0");

  // Click incorrect answer
  await page.getByText("Rebane").click();
  await expect(page.getByText("Teie punktid: ")).toHaveText("Teie punktid: 0");
});


test('Clicking correct answer multiple times increases points by one', async ({ page }) => {
  await page.goto('');
  // Click correct answer twice
  await page.getByText('Hunt').click();
  await page.getByText('Hunt').click();
  await expect(page.getByText("Teie punktid: ")).toHaveText("Teie punktid: 1");
});

test('Personalized text is correct', async ({ page }) => {
  await page.goto('');
  // Choose correct answer each time
  await page.getByText('Hunt').click();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();
  await page.getByText('Suitsupääsuke').click();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();
  await page.getByText('Räim').click();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();
  await page.getByText('Rukkilill').click();
  await page.getByRole('button', { name: 'Tulemused' }).click();

  await expect(page.getByText("Tulemus:")).toHaveText("Tulemus: Teate Eesti rahvussümboleid väga hästi, tubli!");
});

