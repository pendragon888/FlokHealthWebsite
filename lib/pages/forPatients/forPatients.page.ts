import { type Locator, type Page} from "playwright"

export class ForPatientsPage {
    readonly page: Page
    readonly checkAvailabilityLink: Locator
    readonly personalCare: Locator
    readonly videoPlayer: Locator
    readonly videoPlayerPlay : Locator
    readonly videoPlayerPause : Locator

    constructor(page:Page) {
        this.page = page
        this.checkAvailabilityLink = page.getByRole('link', { name: 'Check availability' })
        this.personalCare = page.locator('#personal-care')
        this.videoPlayer = page.locator('iframe[title="Flok Health Hero Video"]')
        this.videoPlayerPlay = page.locator('iframe[title="Flok Health Hero Video"]').contentFrame().locator('#player').contentFrame().getByRole('button', { name: 'Play' })
        this.videoPlayerPause = this.videoPlayer.contentFrame().locator('#player').contentFrame().getByRole('button', { name: 'Pause' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'forpatients')
    }
}