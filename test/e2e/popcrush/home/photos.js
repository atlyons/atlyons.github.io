module.exports = {
    'Verifying the PHOTOS section is displayed on Popcrush.com': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Verify that the 'PHOTOS' section is present
            .page.popcrush.photosObjects().photos()

            // Click on the Cover Image of the first 'PHOTOS' article
            .page.popcrush.photosObjects().photosImg()

            // Navigate back to the home page - Popcrush.com
            .page.popcrush.headerObjects().homeBtn()

            // Click on the article title of the first 'PHOTOS' article
            .page.popcrush.photosObjects().photosTitle()

            .end();
    }
};