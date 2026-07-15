import { test, expect } from '@fixtures/pages.fixture'
import fs from 'fs'
import path from 'path'

test.describe("Check GP Pratices display as an option", ()=>{
    test.beforeEach(async ({ yourDetailsPage }) => {
        await yourDetailsPage.goto()
        await expect(yourDetailsPage.title).toBeVisible()
    })

    test('Validate GP Pratice from API displays as an option in the UI', async ({ yourDetailsPage, page }) => {
        const jsonFilePath  = path.resolve(__dirname, '../../.temp/gpPracticesFile.json')
        // Check if file exists
        if (!fs.existsSync(jsonFilePath)) {
            throw new Error(`JSON file not found: ${jsonFilePath}`);
        }

        // Read and parse JSON
        let jsonData: any;
        try {
            const fileContent = fs.readFileSync(jsonFilePath, 'utf-8');
            jsonData = JSON.parse(fileContent);
        } catch (err) {
            throw new Error(`Failed to read or parse JSON: ${(err as Error).message}`);
        }

        const gpPracticeFromFile = jsonData.body.gp_list[5].name
        await yourDetailsPage.gpPractice.clear()
        await yourDetailsPage.gpPractice.fill(gpPracticeFromFile)
        await page.getByRole('option', { name: `${gpPracticeFromFile}` }).click();
        await expect(yourDetailsPage.gpPractice).toHaveValue(gpPracticeFromFile)
    })
})