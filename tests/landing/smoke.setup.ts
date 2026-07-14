import { test as setup, expect } from '@fixtures/pages.fixture'

setup.describe('Smoke test web application', async () => {
    setup('Verify each page can be accessed', async ({ landingPage, forPatientsPage, forOrganisationsPage, newsPage, aboutPage, joinTheTeamPage, contactUsPage, page }) => {
          await landingPage.goto()
          await expect(page).toHaveTitle('Flok Health | AI-Powered Digital Physiotherapy')
          await forPatientsPage.goto()
          await expect(page.getByText('Your recovery from pain starts here.')).toBeVisible()
          await forOrganisationsPage.goto()
          await expect(forOrganisationsPage.firstSection.first()).toBeVisible()
          await newsPage.goto()
          await expect(newsPage.inTheNewsSection).toContainText('In the news')
          await expect(newsPage.inTheNewsSection).toBeVisible()
          await aboutPage.goto()
          await expect(page.getByText('Healthcare without compromise')).toBeVisible()
          await joinTheTeamPage.goto()
          await expect(joinTheTeamPage.firstHeading).toContainText('Join the Flok')
          await contactUsPage.goto()
          await expect(page.getByText('Explore what’s possible with Flok Health.')).toBeVisible()
    })
})