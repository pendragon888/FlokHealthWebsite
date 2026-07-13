import { type Locator, type Page} from "playwright"

export class ContactUsPage {
    readonly page: Page
    readonly haveAQuestionText: Locator
    readonly generalEnquiryButton: Locator
    readonly patientEnquiryButton: Locator
    readonly jobApplicationButton: Locator
    readonly recaptchaCheckbox: Locator
    readonly submitButton: Locator

    // General enquiry
    readonly generalEnquiryForm: Locator
    readonly GEFirstNameField: Locator
    readonly GESurnameField: Locator
    readonly GEEmailField: Locator
    readonly GEMessageField: Locator

    // Patient enquiry
    readonly patientEnquiryForm: Locator
    readonly PEFirstNameField: Locator
    readonly PESurnameField: Locator
    readonly PEEmailField: Locator
    readonly PEMessageField: Locator

    // Job Application
    readonly JARoleSelector: Locator
    readonly JAFirstNameField: Locator
    readonly JASurnameField: Locator
    readonly JAEmailField: Locator
    readonly JAMessageField: Locator
    readonly JAConfirmationCheckbox: Locator


    constructor(page:Page) {
        this.page = page
        this.haveAQuestionText = page.getByText('Have a question or need')
        this.generalEnquiryButton = page.getByRole('tab', { name: 'General enquiry' })
        this.patientEnquiryButton = page.getByRole('tab', { name: 'Patient enquiry' })
        this.jobApplicationButton = page.getByRole('tab', { name: 'Job application' })
        this.recaptchaCheckbox = page.locator('#recaptcha-anchor')
        this.submitButton = page.getByRole('button', { name: 'Submit' })

        // General enquiry
        this.generalEnquiryForm = page.locator('[aria-label="General enquiry form"]')
        this.GEFirstNameField = page.locator('#name')
        this.GESurnameField = page.locator('#Surname')
        this.GEEmailField = page.locator('#Email')
        this.GEMessageField = page.locator('#Message')

        // Patient enquiry
        this.patientEnquiryForm = page.locator('[aria-label="Patient support form"]')
        this.PEFirstNameField = page.locator('#name-support')
        this.PESurnameField = page.locator('#Surname-support')
        this.PEEmailField = page.locator('#Email-support')
        this.PEMessageField = page.locator('#Message-support')

        // Job application (this could be removed, since the section no longer exists)
        this.JARoleSelector = page.getByRole('combobox')
        this.JAFirstNameField = page.locator('#name-career')
        this.JASurnameField = page.locator('#Surname-career')
        this.JAEmailField = page.locator('#Email-career')
        this.JAMessageField = page.locator('#Message-career')
        this.JAConfirmationCheckbox = page.locator('.w-checkbox-input')
       }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'contact')
    }
}