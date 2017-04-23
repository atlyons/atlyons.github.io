module.exports = {
    'Testing the first article in the Popcrush.com feed': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Click on the title of the first article
            .page.popcrush.feedObjects().articleTitle()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click on the authors name of the first article
            .page.popcrush.feedObjects().articleAuthor()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click the cover image of the first article
            .page.popcrush.feedObjects().articleImage()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click the 'READ MORE' button located at the bottom of the article preview
            .page.popcrush.feedObjects().articleReadMore()

            .end();
    }
};