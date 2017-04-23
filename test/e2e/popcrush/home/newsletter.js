module.exports = {
    'Popcrush.com search test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Send keys to Search field
            .page.popcrush.home().newsletter()

            // Click the Search button
            .page.popcrush.home().newsletterField()
            .page.popcrush.home().newsletterBtn()
            .pause(1000)
            .page.popcrush.home().recaptcha()

        // .end();          
    }
};