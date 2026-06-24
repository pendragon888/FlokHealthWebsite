import { type Locator, type Page} from "playwright";

export class ForOrganisationsPage {
    readonly page: Page
    readonly firstSection: Locator
    readonly howItWorksSection: Locator

    constructor(page:Page) {
        this.page = page
        this.firstSection = page.locator('.div-block-18')
        this.howItWorksSection = page.locator('#how-it-works')
       }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'organisations')
    }
}