import { test, expect } from '@playwright/test';


test('Correct answer increases points', async ({ page }) => {
  await page.goto(''); 

  await expect(page.getByText("Sinu punktid: ")).toHaveText("Sinu punktid: 0");
  // Click correct answer
  await page.getByText("Hunt").click();
  await expect(page.getByText("Sinu punktid: ")).toHaveText("Sinu punktid: 1");
});

test('Incorrect answer does not change points', async ({ page }) => {
  await page.goto(''); 
  await expect(page.getByText("Sinu punktid: ")).toHaveText("Sinu punktid: 0");
  // Click incorrect answer
  await page.getByText("Rebane").click();
  await expect(page.getByText("Sinu punktid: ")).toHaveText("Sinu punktid: 0");
});


// Results correct


// Personalized text correct


// ...
