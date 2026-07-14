import { type Locator, type Page} from "playwright"

export class YourDetailsPage {
    readonly page: Page
    readonly form: Locator
    readonly title: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly dateOfBirth: Locator
    readonly gender: Locator
    readonly firstLineOfAddress: Locator
    readonly postcode: Locator
    readonly gpPractice: Locator
    readonly email: Locator
    readonly mobile: Locator
    readonly consent: Locator
    readonly continueButton: Locator

    // Your details error messages
    readonly firstNameError: Locator
    readonly lastNameError: Locator
    readonly dateOfBirthError: Locator
    readonly genderError: Locator
    readonly firstLineOfAddressError: Locator
    readonly postcodeError: Locator
    readonly gpPracticeError: Locator
    readonly emailError: Locator
    readonly mobileError: Locator
    readonly termsError: Locator

    constructor(page:Page) {
        this.page = page

        // Your details
        this.form = page.locator('form')
        this.title = page.locator('h1')
        this.firstName = page.getByRole('textbox', { name: 'First name' })
        this.lastName = page.getByRole('textbox', { name: 'Last name' })
        this.dateOfBirth = page.getByRole('textbox', { name: 'Date of birth' })
        this.gender = page.getByLabel('GenderSelectFemaleMaleOtherPrefer not to say')
        this.firstLineOfAddress = page.getByRole('textbox', { name: 'First line of address' })
        this.postcode = page.getByRole('textbox', { name: 'Postcode' })
        this.gpPractice = page.getByRole('textbox', { name: 'GP Practice' })
        this.email = page.getByRole('textbox', { name: 'Email' })
        this.mobile = page.getByRole('textbox', { name: 'Mobile number' })
        this.consent = page.locator('label').filter({ hasText: 'I consent to the collection' }).getByRole('img')
        this.continueButton = page.getByRole('button', { name: 'Continue' })
        
        // Your details error messages
        this.firstNameError = page.locator('#firstName-error')
        this.lastNameError = page.locator('#lastName-error')
        this.dateOfBirthError = page.locator('#dateOfBirth-error')
        this.genderError = page.getByText('Please select a gender')
        this.firstLineOfAddressError = page.locator('#addressLine1-error')
        this.postcodeError = page.locator('#postalCode-error')
        this.gpPracticeError = page.locator('#gpPractice-error')
        this.emailError = page.locator('#email-error')
        this.mobileError = page.locator('#mobileNumber-error')
        this.termsError = page.getByText('You must agree to the terms')
    }

    async goto(){
        await this.page.goto('https://clinic.flok.health/self-refer/EoE_CP_SR')
    }
}