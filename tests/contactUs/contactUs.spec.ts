import { test, expect } from '@fixtures/pages.fixture'
import { formData } from '@datafactory/jobApplicationData.json'

test.describe("Visit Contact Us page for Flok Health", ()=>{
    test.beforeEach(async ({ contactUsPage }) => {
        await contactUsPage.goto()
    })

    test('Validate Contact Us page present', async ({ contactUsPage }) => {
        await expect(contactUsPage.generalEnquiryButton).toBeVisible();
        await expect(contactUsPage.haveAQuestionText).toBeVisible()
        await expect(contactUsPage.haveAQuestionText).toContainText("Have a question or need support? Start by choosing what you’d like to get in touch about, send us a message, and we’ll get back to you as soon as we can.")
    })

    // Job application form has been removed
    test.skip('Fill out Job Application Form using test data', async ({ contactUsPage }) => {
        await expect(contactUsPage.jobApplicationButton).toBeVisible();
        await expect(contactUsPage.jobApplicationButton).toContainText('Job application');
        await contactUsPage.jobApplicationButton.click()
        await (contactUsPage.roleSelector).selectOption(formData.role)
        await contactUsPage.firstNameField.fill(formData.firstName);
        await contactUsPage.surnameField.fill(formData.surname);
        await contactUsPage.emailField.fill(formData.email);
        await contactUsPage.messageField.fill(formData.message);
        await contactUsPage.confirmationCheckbox.check()
    })
})