module.exports = {
    'Testing pagination on Popcrush.com': function (client) {
        client

            // Navigate to Popcrush.com
            .page.popcrush.headerObjects().popcrush()

            // Click the '2' pagination button
            .page.popcrush.paginationObjects().pagination2()

            // Click the '1' pagination button
            .page.popcrush.paginationObjects().pagination1()

            // Click the '3' pagination button
            .page.popcrush.paginationObjects().pagination3()

            // Click the 'Advance / Forward - >' pagination button
            .page.popcrush.paginationObjects().paginationForward()

            // Click the 'Reverse / Back - <' pagination button
            .page.popcrush.paginationObjects().paginationReverse()

            .end();
    }
};
