import { test, expect } from '@playwright/test';

// logout.js
/**
 * Logs out from saucedemo inventory page
 * @param {import('@playwright/test').Page} page - Playwright Page object
 */
async function logout(page) {
  // Open the burger menu
  await page.click('#react-burger-menu-btn');
  
  // Wait for the menu to open and click logout
  await page.click('#logout_sidebar_link');
}

module.exports = { logout };
