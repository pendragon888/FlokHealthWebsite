import { test, expect } from '@fixtures/pages.fixture'
import { formData } from '@datafactory/jobApplicationData.json'

test.describe("Visit Contact Us page for Flok Health", ()=>{
    test.beforeEach(async ({ contactUsPage }) => {
        await contactUsPage.goto()
    })

    test('Validate Contact Us page present', async ({ contactUsPage }) => {
        await expect(contactUsPage.generalEnquiryButton).toBeVisible()
        await expect(contactUsPage.haveAQuestionText).toBeVisible()
        await expect(contactUsPage.haveAQuestionText).toContainText("Have a question or need support? Start by choosing what you’d like to get in touch about, send us a message, and we’ll get back to you as soon as we can.")
    })

    test('Fill out General Enquiry form', async ({ contactUsPage}) => {
        await expect(contactUsPage.generalEnquiryButton).toBeVisible()
        await expect(contactUsPage.generalEnquiryButton).toContainText('General enquiry')
        await expect(contactUsPage.generalEnquiryForm).toBeVisible()
        await contactUsPage.GEFirstNameField.fill(formData.firstName)
        await contactUsPage.GESurnameField.fill(formData.surname)
        await contactUsPage.GEEmailField.fill(formData.email)
        await contactUsPage.GEMessageField.fill(formData.message)
    })

    test('Fill out Patient Enquiry form', async ({ contactUsPage}) => {
        await expect(contactUsPage.patientEnquiryButton).toBeVisible()
        await expect(contactUsPage.patientEnquiryButton).toContainText('Patient enquiry')
        await (contactUsPage.patientEnquiryButton).click()
        await expect(contactUsPage.patientEnquiryForm).toBeVisible()
        await contactUsPage.PEFirstNameField.fill(formData.firstName)
        await contactUsPage.PESurnameField.fill(formData.surname)
        await contactUsPage.PEEmailField.fill(formData.email)
        await contactUsPage.PEMessageField.fill(formData.message)
    })

    // Job application form has been removed
    test.skip('Fill out Job Application Form using test data', async ({ contactUsPage }) => {
        await expect(contactUsPage.jobApplicationButton).toBeVisible()
        await expect(contactUsPage.jobApplicationButton).toContainText('Job application')
        await contactUsPage.jobApplicationButton.click()
        await (contactUsPage.JARoleSelector).selectOption(formData.role)
        await contactUsPage.JAFirstNameField.fill(formData.firstName)
        await contactUsPage.JASurnameField.fill(formData.surname)
        await contactUsPage.JAEmailField.fill(formData.email)
        await contactUsPage.JAMessageField.fill(formData.message)
        await contactUsPage.JAConfirmationCheckbox.check()
    })
})