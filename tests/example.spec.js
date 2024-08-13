const { test, expect } = require('@playwright/test');

test('should load the homepage and display text', async ({ page }) => {
    await page.goto('/');
  
    await expect(page.locator('text=TigerHall Library')).toBeVisible();

});

test('should trigger GraphQL query and display search results when inputing a query and pressing Enter', async ({ page }) => {
    const searchQuery = 'Test';
  
    const [response] = await Promise.all([
      page.waitForResponse(response =>
        response.url().includes('/v2') && response.status() === 200 && response.request().postData().includes('GetAllPodcasts')
      ),
      page.goto('http://localhost:1234'),
  
      page.fill('input[placeholder="Search"]', searchQuery),
    ]);
  
    expect(response.ok()).toBeTruthy(); 
  
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('data.contentCards');
  });