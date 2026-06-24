import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit For News page for Flok Health", ()=>{
     test.beforeEach(async ({ newsPage }) => {
        await newsPage.goto()
    })

    test('Validate News page present', async ({ newsPage }) => {
        await expect(newsPage.inTheNewsSection).toBeVisible()
        await expect(newsPage.inTheNewsSection).toContainText('In the news')
    })

    test('Validate number of Recent Highlights is more than one ', async ({ newsPage }) => {
        await expect(newsPage.recentHighlightsSection).toBeVisible()
        await expect(newsPage.recentHighlightsSection).toContainText('Recent highlights')
        
        var articleCount = await newsPage.article.count()
        await expect(articleCount).toBeGreaterThan(0)
    })
})