import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Flok Health", ()=>{

    test('Validate Landing page present', async ({ landingPage, page }) => {
        await landingPage.goto()
        await expect(page.getByText('Healthcare without compromise')).toBeVisible()
        await expect(page.getByText('We believe healthcare should feel like a partnership.')).toBeVisible()
    })
})