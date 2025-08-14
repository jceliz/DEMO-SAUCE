import { test, expect } from '@playwright/test';


async function logout(page) {
  // Open the burger menu
  await page.click('#react-burger-menu-btn');
  
  // Wait for the menu to open and click logout
  await page.click('#logout_sidebar_link');
}

test('Logout from Saucedemo', async ({ page }) => {
  // Go to login page and log in first
  // await page.goto('https://www.saucedemo.com/');
  // await page.fill('#user-name', 'standard_user');
  // await page.fill('#password', 'secret_sauce');
  // await page.click('#login-button');

  // Verify we're in the inventory page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Use the logout function
  await logout(page);

  // Verify we're back to login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

