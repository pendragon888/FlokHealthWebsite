import { type Locator, type Page} from "playwright";

export class NewsPage {
    readonly page: Page
    readonly inTheNewsSection: Locator
    readonly recentHighlightsSection: Locator
    readonly article: Locator

    constructor(page:Page) {
        this.page = page
        this.inTheNewsSection = page.getByRole('heading', { name: 'In the news' })
        this.recentHighlightsSection = page.getByRole('heading', { name: 'Recent highlights' })
        this.article = page.getByRole('listitem')
       }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'news')
    }
}