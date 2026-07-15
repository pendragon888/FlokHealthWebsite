import { test, expect } from '@fixtures/pages.fixture'
import { body } from '../../.temp/gpPracticesFile.json'

test.describe("Check GP Pratices display as an option", ()=>{
    test.beforeEach(async ({ yourDetailsPage }) => {
        await yourDetailsPage.goto()
        await expect(yourDetailsPage.title).toBeVisible()
    })

    test('Validate GP Pratice from API displays as an option in the UI', async ({ yourDetailsPage, page }) => {
        const gpPracticeFromFile = body.gp_list[5].name
        await yourDetailsPage.gpPractice.clear()
        await yourDetailsPage.gpPractice.fill(gpPracticeFromFile)
        await page.getByRole('option', { name: `${gpPracticeFromFile}` }).click();
        await expect(yourDetailsPage.gpPractice).toHaveValue(gpPracticeFromFile)
    })
})