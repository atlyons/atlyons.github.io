module.exports = {
    'Testing the contents of the first article in the Popcrush.com feed': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            .waitForElementVisible('body', 500)

            // Click on the title of the first article
            .page.popcrush.feedObjects().articleTitle()

            .waitForElementVisible('body', 500)

            // Verify the articles author appears at the top of the article
            .page.popcrush.articleObjects().articleAuthor()

            // Clicking the 'FACEBOOK' share button
            .page.popcrush.articleObjects().facebookBtn()

            // Clicking the 'TWITTER' share button
            .page.popcrush.articleObjects().twitterBtn()

            // Clicking the 'EMAIL' share button
            .page.popcrush.articleObjects().emailBtn()

            // Clicking the 'REDIT' share button
            .page.popcrush.articleObjects().reditBtn()

            // Navigate back to the home page - Popcrush.com
            // .page.popcrush.headerObjects().homeBtn()

            // Click the cover image of the first article
            // .page.popcrush.feedObjects().articleImage()

            // Navigate back to the home page - Popcrush.com
            // .page.popcrush.headerObjects().homeBtn()

            // Click the 'READ MORE' button located at the bottom of the article preview
            // .page.popcrush.feedObjects().articleReadMore()

            .end();
    }
};