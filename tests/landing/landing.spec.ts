import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Flok Health", ()=>{

    test('Validate Landing page present', async ({ landingPage, page }) => {
        await landingPage.goto()
        await expect(page).toHaveTitle('Flok Health | AI-Powered Digital Physiotherapy')
        await expect(page.getByText('Healthcare without compromise')).toBeVisible()
    })
})