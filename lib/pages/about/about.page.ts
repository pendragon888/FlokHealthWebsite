import { type Locator, type Page} from "playwright"

export class AboutPage {
    readonly page: Page
    readonly aboutSection: Locator
    readonly ourStory: Locator

    constructor(page:Page) {
        this.page = page
        this.aboutSection = page.locator('body')
        this.ourStory = page.getByRole('paragraph')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'about')
    }
}