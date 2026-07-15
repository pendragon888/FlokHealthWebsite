import { test, expect } from '@fixtures/pages.fixture'
import fs from 'fs'
import path from 'path'

test.describe('API testing', async () => {
    test.describe.configure({ retries:1 })
    test('GET GP Practices from API', async ({ request }) => {
        // Define a relative file path (relative to project root)
        const relativeDir = path.join(__dirname, '../../.temp');
        const fileName = 'gpPracticesFile.json';
        const gpPracticesFile = path.join(relativeDir, fileName);
        const response = await request.get(process.env.API_BASE_URL+'self-refer/pathway?postcode=CB23')
        if (!response.ok()) {
            throw new Error(`Request failed with status ${response.status()}`)
        }
        expect(response.status()).toBe(200)
        const body = await response.json()
        expect(body).toHaveProperty('gp_list')
        expect(body).toBeTruthy()

        // Save response to JSON file
        await fs.writeFileSync(gpPracticesFile, JSON.stringify({ body }, null, 2));
    })

    test('GET GP Practices from API without postcode throws 400 status code error', async ({ request }) => {
        const response = await request.get(process.env.API_BASE_URL+'self-refer/pathway?postcode=')
        expect(response.status()).toBe(400)
    })
})