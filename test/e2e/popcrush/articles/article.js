module.exports = {
    'Testing the contents of the first article in the Popcrush.com feed': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // .waitForElementVisible('body', 500)

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

            // Verify the 'LEAVE A COMMENT' section is displayed
            .page.popcrush.articleObjects().leaveAComment()

            // Verify the 'FILED UNDER' section is displayed
            .page.popcrush.articleObjects().filedUnder()

            // Verify the 'FILED UNDER' section is displayed
            .page.popcrush.articleObjects().catagory()

            .end();
    }
};