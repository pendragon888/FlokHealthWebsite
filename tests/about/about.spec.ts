import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit About page for Flok Health", ()=>{

    test('Validate About page present', async ({ aboutPage}) => {
        await aboutPage.goto()
        await expect(aboutPage.aboutSection).toContainText('All historical healthcare delivery models have been a fundamental trade-off between quality and scale.Our AI-native care transforms that trade-off into a virtuous cycle, where more scale means more quality and further scale. Physiotherapy is just the beginning.')
        await expect(aboutPage.ourStory).toContainText('Founded by Finn and Ric in 2022, our growing team has deep expertise across healthcare, engineering, and regulated AI systems. We have a proven track record building and commercialising disruptive healthtech at scale, and are well-backed by top-tier VCs and multiple unicorn founders. If this sounds like a mission you need to be part of, come and join us.')
        await expect(aboutPage.aboutSection).toMatchAriaSnapshot(`- text: I’m always looking for better ways to reach people, to support them earlier, and remove the barriers that keep them from thriving. Kirsty Henderson`)
    })
})