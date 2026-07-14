import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit For Patients page for Flok Health", ()=>{
    test.beforeEach(async ({ forPatientsPage }) => {
        await forPatientsPage.goto()
    })

    test('Validate For Patients page is present', async ({ forPatientsPage }) => {
        await expect(forPatientsPage.personalCare).toContainText('The help you need, when you need itWe\'re with you every step of the way, so you can get back to what matters most.')
    })

    test('Validate Check availabiity link is present and directs to correct page', async ({ forPatientsPage, page, context }) => {
        await expect(forPatientsPage.checkAvailabilityLink.first()).toBeVisible()

        context.waitForEvent('page')
        const checkAvailabilityPromise = page.waitForEvent('popup');
        await forPatientsPage.checkAvailabilityLink.first().click()
        const newCheckAvailabilityPage = await checkAvailabilityPromise;
        await newCheckAvailabilityPage.getByRole('textbox', { name: 'Postcode' }).fill('CB23 7EE');
        await expect(newCheckAvailabilityPage).toHaveURL('https://clinic.flok.health/self-refer/coverage')
    })

    test('Validate Vimeo video player is present and plays', async ({ forPatientsPage }) => {
        await expect(forPatientsPage.videoPlayer).toBeVisible()
        await forPatientsPage.videoPlayerPlay.click()
    })
})