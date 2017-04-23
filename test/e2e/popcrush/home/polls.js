module.exports = {
    'Verifying the POLLS section is displayed on Popcrush.com': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Verify that the 'POLLS' section is present
            .page.popcrush.pollsObjects().polls()
            
            // Save a screenshot of the Polls 
            .saveScreenshot('screenshots/popcrush/home/polls/polls.png')

            // Click on the Cover Image of the first 'POLLS' article
            .page.popcrush.pollsObjects().pollsImg()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click on the article title of the first 'PHOTOS' article
            .page.popcrush.pollsObjects().pollsTitle()

            .end();
    }
};