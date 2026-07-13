import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Join The Team page for Flok Health", ()=>{
    test.beforeEach(async ({ joinTheTeamPage }) => {
        await joinTheTeamPage.goto()
    })

    test('Validate Join The Team page present', async ({ joinTheTeamPage }) => {
        await expect(joinTheTeamPage.firstHeading).toContainText('Join the Flok')
        await expect(joinTheTeamPage.viewOpenPositions).toContainText('View open positions')
    })

      test('Visit SDET Role', async ({ joinTheTeamPage }) => {
        await expect(joinTheTeamPage.SDET).toBeVisible();
        await expect(joinTheTeamPage.viewOpenPositions).toContainText('View open positions')
    })
})