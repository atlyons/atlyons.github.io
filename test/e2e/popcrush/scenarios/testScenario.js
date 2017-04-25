    //  Steps:
    //         1. Navigate to 'Popcrush.com'
    //         2. Click on the first 'POLLS' article
    //         3. Click the 'Facebook SHARE' btn
    //         4. Click the 3rd 'TRENDING' link
    //         5. Click the 'PIRVACY' btn
    //         6. Enter the word 'CAT' into the 'SEARCH' field
    //         7. Click the 'SEARCH' btn


module.exports = {
    'Testing a Popcrush.com user flow' : function (client) {
        client

            // 1. Navigate to 'Popcrush.com'
            .page.popcrush.headerObjects().popcrush()

            // 2. Click on the first 'POLLS' article
            .page.popcrush.pollsObjects().pollsImg()
            
            // 3. Click the 'Facebook SHARE' btn
            .page.popcrush.articleObjects().facebookBtn()

            // 4. Click the 3rd 'TRENDING' link
            .page.popcrush.headerObjects().trendingThree()

            // 5. Click the 'PIRVACY' btn
            .page.popcrush.footerObjects().privacyBtn()

            // 6. Enter the word 'CAT' into the 'SEARCH' field
            .page.popcrush.headerObjects().searchField()

            // 7. Click the 'SEARCH' btn
            .page.popcrush.headerObjects().searchBtn()

            .end();
    }
};