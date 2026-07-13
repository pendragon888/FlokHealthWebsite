import { type Locator, type Page} from "playwright"

export class LandingPage {
    readonly page: Page

    constructor(page:Page) {
        this.page = page
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }
}