module.exports = {
    'Popcrush.com search test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Send keys to Search field
            .page.popcrush.home().carouselRight()
            .page.popcrush.home().carouselRight()


            // Send keys to Search field
            .page.popcrush.home().carouselLeft()
            .page.popcrush.home().carouselRight()
     

            // Click the Search button
            // .page.popcrush.headerObjects().searchBtn()

        // .end();          
    }
};