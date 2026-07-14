import { test, expect } from '@fixtures/pages.fixture'
import { formData } from '@datafactory/registrationData.json'

test.describe("Visit Check Availability page for Flok Health", ()=>{
    test.beforeEach(async ({ checkAvailabilityPage }) => {
        await checkAvailabilityPage.goto()
        await expect(checkAvailabilityPage.checkAvailabilityLink).toBeVisible()
    })

    test('Validate availability for a location', async ({ checkAvailabilityPage, yourDetailsPage }) => {
        await (checkAvailabilityPage.postcodeField).fill(formData.postcode)
        await expect(checkAvailabilityPage.checkAvailabilityLink).toBeEnabled()
        await checkAvailabilityPage.checkAvailabilityLink.click()

        // Your details
        await expect(yourDetailsPage.form).toContainText('To access physiotherapy for your lower back pain on the NHS please complete the form below.')
        await expect(yourDetailsPage.title).toContainText('Register for digital physiotherapy')

        await yourDetailsPage.firstName.fill(formData.firstName)
        await yourDetailsPage.lastName.fill(formData.lastName)
        await yourDetailsPage.dateOfBirth.fill(formData.dob)
        await yourDetailsPage.gender.selectOption(formData.gender)
        await yourDetailsPage.firstLineOfAddress.fill(formData.firstLineOfAddress)
        await yourDetailsPage.postcode.clear()
        await yourDetailsPage.postcode.fill(formData.postcode)
        await yourDetailsPage.gpPractice.fill(formData.gpPractice)
        await yourDetailsPage.email.fill(formData.email)
        await yourDetailsPage.mobile.fill(formData.mobile)
        await yourDetailsPage.consent.click()
        await yourDetailsPage.continueButton.click()

        // Don't proceed further with test due to submission on Production Environment
    })

    test('Check Your Details validation messages are shown', async ({ checkAvailabilityPage, yourDetailsPage }) => {
        await (checkAvailabilityPage.postcodeField).fill(formData.postcode)
        await expect(checkAvailabilityPage.checkAvailabilityLink).toBeEnabled()
        await checkAvailabilityPage.checkAvailabilityLink.click()
        await yourDetailsPage.postcode.clear()
        await yourDetailsPage.continueButton.click()
        await expect(yourDetailsPage.firstNameError).toBeVisible()
        await expect(yourDetailsPage.firstNameError).toContainText('Please enter your name.')
        await expect(yourDetailsPage.lastNameError).toBeVisible()
        await expect(yourDetailsPage.lastNameError).toContainText('Please enter your name.')
        await expect(yourDetailsPage.dateOfBirthError).toBeVisible()
        await expect(yourDetailsPage.dateOfBirthError).toContainText('Please enter your date of birth.')
        await expect(yourDetailsPage.genderError).toBeVisible()
        await expect(yourDetailsPage.genderError).toContainText('Please select a gender.')
        await expect(yourDetailsPage.firstLineOfAddressError).toBeVisible()
        await expect(yourDetailsPage.firstLineOfAddressError).toContainText('Please enter your address.')
        await expect(yourDetailsPage.postcodeError).toBeVisible()
        await expect(yourDetailsPage.postcodeError).toContainText('Please enter your postcode.')
        await expect(yourDetailsPage.gpPracticeError).toBeVisible()
        await expect(yourDetailsPage.gpPracticeError).toContainText('Please start typing to search for your GP.')
        await expect(yourDetailsPage.emailError).toBeVisible()
        await expect(yourDetailsPage.emailError).toContainText('Please enter your email.')
        await expect(yourDetailsPage.mobileError).toBeVisible()
        await expect(yourDetailsPage.mobileError).toContainText('Please enter your mobile number.')
        await expect(yourDetailsPage.termsError).toBeVisible()
        await expect(yourDetailsPage.termsError).toContainText('You must agree to the terms to be able to continue.')
    })
})