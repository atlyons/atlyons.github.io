module.exports = {
    'Popcrush.com newsletter test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Verify the 'NEWSLETTER' section is displayed
            .page.popcrush.home().newsletter()

            // Send keys to the newsletter field
            .page.popcrush.home().newsletterField()

            // Click the newsletter submit btn
            .page.popcrush.home().newsletterBtn()

            // pause
            .pause(1000)

            // Verify the Recaptcha is displayed
            .page.popcrush.home().recaptcha()

        .end();          
    }
};