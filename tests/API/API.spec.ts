import { test, expect } from '@fixtures/pages.fixture'

test.describe('API testing', async () => {
    test.describe.configure({ retries:1 })
    test('GET GP Practices from API', async ({ request }) => {
        const response = await request.get('https://clinic.flok.health/api/self-refer/pathway?postcode=CB23');
        expect(response.status()).toBe(200)
        const body = await response.json()
        expect(body).toHaveProperty('gp_list')
        expect(body).toBeTruthy()
    })

    test('GET GP Practices from API without postcode throws 400 status code error', async ({ request }) => {
        const response = await request.get('https://clinic.flok.health/api/self-refer/pathway?postcode=');
        expect(response.status()).toBe(400)
    })
})