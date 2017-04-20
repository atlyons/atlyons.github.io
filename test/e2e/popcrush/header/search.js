module.exports = {
    'Popcrush.com search test': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Send keys to Search field
            .page.popcrush.headerObjects().searchField()

            // Click the Search button
            .page.popcrush.headerObjects().searchBtn()

        .end();          
    }
};