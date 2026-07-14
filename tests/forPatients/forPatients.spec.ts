import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit For Patients page for Flok Health", ()=>{
    test.beforeEach(async ({ forPatientsPage }) => {
        await forPatientsPage.goto()
    })

    test('Validate For Patients page is present', async ({ forPatientsPage }) => {
        await expect(forPatientsPage.personalCare).toContainText('The help you need, when you need itWe\'re with you every step of the way, so you can get back to what matters most.')
    })

    test('Validate Check availabiity link is present and directs to correct page', async ({ forPatientsPage, checkAvailabilityPage }) => {
        await expect(forPatientsPage.checkAvailabilityLink.first()).toBeVisible()
        await forPatientsPage.checkAvailabilityLink.click()
        await checkAvailabilityPage
    })

    test('Validate Vimeo video player is present and plays', async ({ forPatientsPage }) => {
        await expect(forPatientsPage.videoPlayer).toBeVisible()
        await forPatientsPage.videoPlayerPlay.click()
    })
})