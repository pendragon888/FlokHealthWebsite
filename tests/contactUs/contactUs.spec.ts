import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Contact Us page for Flok Health", ()=>{
    test.beforeEach(async ({ contactUsPage }) => {
        await contactUsPage.goto()
    })

    test('Validate Contact Us page present, ', async ({ contactUsPage }) => {
        await expect(contactUsPage.generalEnquiryButton).toBeVisible();
        await expect(contactUsPage.haveAQuestionText).toBeVisible()
        await expect(contactUsPage.haveAQuestionText).toContainText("Have a question or need support? Start by choosing what you’d like to get in touch about, send us a message, and we’ll get back to you as soon as we can.")
    })

    test('Fill out Job Application Form, ', async ({ contactUsPage }) => {
        await expect(contactUsPage.jobApplicationButton).toBeVisible();
        await expect(contactUsPage.jobApplicationButton).toContainText('Job application');
        await contactUsPage.jobApplicationButton.click()
        await (contactUsPage.roleSelector).selectOption('Senior/Staff System Test Engineer')
        await contactUsPage.firstNameField.fill('Kevin');
        await contactUsPage.surnameField.fill('Dang');
        await contactUsPage.emailField.fill('pendragon888@hotmail.com');
        await contactUsPage.messageField.fill('Application for Senior/Staff System Test Engineer');
        await contactUsPage.confirmationCheckbox.check()
    })
})