import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit For Organisations page for Flok Health", ()=>{
    test.beforeEach(async ({ forOrganisationsPage }) => {
        await forOrganisationsPage.goto()
    })
    
    test('Validate For Organisations page present', async ({ forOrganisationsPage }) => {
        
        await expect(forOrganisationsPage.firstSection.first()).toBeVisible()
        await expect(forOrganisationsPage.firstSection).toContainText('We operate end-to-end MSK care pathways on behalf of large healthcare systems and providers. Your patients get more choice, more care, and no waiting list.')
    })

    test('Validate How it works', async ({ forOrganisationsPage }) => {
        var HowItWorksText = 
            "How it works" + 
            "1. Self-referral" +
            "Patients can self-refer directly to our service, or via existing referral routes. We integrate with your workflows to offer eligible patients a choice of treatment." +
            " 2. Triage & assessment"
            "Our AI system is a Class IIa medical device, providing immediate access to gold-standard triage and red flag screening. We configure this locally to match your pathways." +
            " 3. Weekly appointments" +
            "Once cleared for digital treatment, patients have a weekly video call appointment with their AI physiotherapist. Fully personalised treatment, available 24/7." +
            " 4. Multidisciplinary care" +
            "Our AI system delivers a totally unique care pathway for every patient. This includes exercise prescription, education and coaching, and MBCT techniques for pain management." +
            " 5. Clinician support throughout" +
            "We're a CQC-approved healthcare provider, and our team of Cambridge-based HCPC-registered physiotherapists are on hand throughout to offer additional remote support." +
            " 6. Discharge & follow-up" +
            "Discharge isn't the end - we equip patients with the tools they need for confident self-management going forwards. Data integrations and dashboards give you oversight throughout."
        
        await expect(forOrganisationsPage.howItWorksSection).toBeVisible()
        await expect(forOrganisationsPage.howItWorksSection).toContainText(HowItWorksText)
    })
})