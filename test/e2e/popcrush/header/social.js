module.exports = {
    'Popcrush.com social links test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Click the FACEBOOK social button
            .page.popcrush.headerObjects().facebookBtn()

            // Click the TWITTER social button
            .page.popcrush.headerObjects().twitterBtn()

            // Click the YOUTUBE social button
            .page.popcrush.headerObjects().youtubeBtn()

            // Click the INSTAGRAM social button
            .page.popcrush.headerObjects().instagramBtn()

            // Click the RSS social button
            .page.popcrush.headerObjects().rssBtn()

        .end();          
    }
};