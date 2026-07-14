import { type Locator, type Page} from "playwright"

export class CheckAvailabilityPage {
    readonly page: Page
    readonly postcodeField: Locator
    readonly pcField: Locator
    readonly checkAvailabilityLink: Locator
    readonly provideText: Locator

    constructor(page:Page) {
        this.page = page
        this.postcodeField = page.locator('#postalCode')
        this.pcField = page.getByRole('textbox', { name: 'Postcode' })
        this.checkAvailabilityLink = page.getByRole('button', { name: 'Check availability' })
        this.provideText = page.locator('#root')

    }

    async goto(){
        await this.page.goto('https://clinic.flok.health/self-refer/coverage')
    }
}