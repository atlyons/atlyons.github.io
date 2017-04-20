module.exports = {
    'Popcrush.com search test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Click on the title of the first article
            .page.popcrush.home().articleTitle()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click on the authors name of the first article
            .page.popcrush.home().articleAuthor()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click the cover image of the first article
            .page.popcrush.home().articleImage()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click the 'READ MORE' button located at the bottom of the article preview
            .page.popcrush.home().articleReadMore()

            .end();
    }
};