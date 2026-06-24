import { type Locator, type Page} from "playwright";

export class ContactUsPage {
    readonly page: Page
    readonly haveAQuestionText: Locator
    readonly generalEnquiryButton: Locator
    readonly patientEnquiryButton: Locator
    readonly jobApplicationButton: Locator
    readonly roleSelector: Locator
    readonly firstNameField: Locator
    readonly surnameField: Locator
    readonly emailField: Locator
    readonly messageField: Locator
    readonly confirmationCheckbox: Locator
    readonly submitButton: Locator

    constructor(page:Page) {
        this.page = page
        this.haveAQuestionText = page.getByText('Have a question or need')
        this.generalEnquiryButton = page.getByRole('tab', { name: 'General enquiry' })
        this.patientEnquiryButton = page.getByRole('tab', { name: 'Patient enquiry' })
        this.jobApplicationButton = page.getByRole('tab', { name: 'Job application' })
        this.roleSelector = page.getByRole('combobox')
        this.firstNameField = page.locator('#name-career')
        this.surnameField = page.locator('#Surname-career')
        this.emailField = page.locator('#Email-career')
        this.messageField = page.locator('#Message-career')
        this.confirmationCheckbox = page.locator('.w-checkbox-input')
        this.submitButton = page.getByRole('button', { name: 'Submit' })
       }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'contact')
    }
}