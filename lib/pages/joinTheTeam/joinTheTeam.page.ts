import { type Locator, type Page} from "playwright";

export class JoinTheTeamPage {
    readonly page: Page
    readonly firstHeading: Locator
    readonly viewOpenPositions: Locator
    readonly SDET: Locator

    constructor(page:Page) {
        this.page = page
        this.firstHeading = page.getByRole('heading', { name: 'Join the Flok' })
        this.viewOpenPositions = page.getByRole('link', { name: 'View open positions' })
        this.SDET = page.getByLabel('All').getByText('Senior/Staff System Test')
       }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'careers')
    }
}