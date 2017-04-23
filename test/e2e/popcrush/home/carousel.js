module.exports = {
    'Popcrush.com home page carousel test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Click the carousel next button
            .page.popcrush.carouselObjects().carouselRight()

            // Click the carousel previous button
            .page.popcrush.carouselObjects().carouselRight()
     
        .end();          
    }
};