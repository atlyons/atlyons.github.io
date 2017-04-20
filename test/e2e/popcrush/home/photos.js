module.exports = {
    'Popcrush.com search test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Verify that the 'PHOTOS' section is present
            .page.popcrush.home().photos()

            // Click on the Cover Image of the first 'PHOTOS' article
            .page.popcrush.home().photosImg()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click on the article title of the first 'PHOTOS' article
            .page.popcrush.home().photosTitle()

            .end();
    }
};