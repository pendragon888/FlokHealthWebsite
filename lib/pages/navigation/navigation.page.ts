import { type Locator, type Page } from "playwright";

export class NavigationPage {
    readonly page: Page
    readonly pageTitle: Locator
    readonly navToForPatients: Locator
    readonly navToForOrganisations: Locator
    readonly navToNews: Locator
    readonly navToAbout: Locator
    readonly navToJoinTheTeam: Locator
    readonly navToContactUs: Locator

    constructor(page: Page) {
        this.page = page
        this.pageTitle = page.getByTestId('page-title')
        this.navToForPatients = page.getByRole('link', { name: 'For Patients' })
        this.navToForOrganisations = page.getByRole('link', { name: 'For Organisations' })
        this.navToNews = page.getByRole('link', { name: 'News' })
        this.navToAbout = page.getByRole('link', { name: 'About' })
        this.navToJoinTheTeam = page.getByRole('link', { name: 'Join the team' })
        this.navToContactUs = page.getByRole('link', { name: 'Contact us' })
   
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }
}