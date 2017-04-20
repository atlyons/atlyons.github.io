module.exports = {
    'Popcrush.com trending tops navbar test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Click TRENDING list item 1
            .page.popcrush.headerObjects().trendingOne()

            // Click TRENDING list item 2
            .page.popcrush.headerObjects().trendingTwo()

            // Click TRENDING list item 3
            .page.popcrush.headerObjects().trendingThree()

            // Click TRENDING list item 4
            .page.popcrush.headerObjects().trendingFour()

            // Click TRENDING list item 5
            .page.popcrush.headerObjects().trendingFive()

            // Click TRENDING list item 6
            .page.popcrush.headerObjects().trendingSix()

        .end();          
    }
};