module.exports = {
    'Testing the contents of the first article in the Popcrush.com feed': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // .waitForElementVisible('body', 500)

            // Click on the title of the first article
            .page.popcrush.feedObjects().articleTitle()

            .waitForElementVisible('body', 500)

            // Verify the 'HOT HEADLINES' section appears within the article sidebar
            .page.popcrush.hotHeadlinesObjects().hotHeadlines()

            // Verify the 'HOT HEADLINES' section appears within the article sidebar
            .page.popcrush.hotHeadlinesObjects().hotHeadlinesLink()

            .end();
    }
};