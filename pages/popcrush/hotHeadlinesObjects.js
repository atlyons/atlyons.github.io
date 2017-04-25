module.exports = function (browser) {

// -----------------------------------------------------
// ---- HOT HEADLINES OBJECTS ----

    // Verify the 'HOT HEADLINES' section appears within the article sidebar
    this.hotHeadlines = function () {
        browser
            .expect.element('.rssfeed-title').text.to.equal('HOT HEADLINES')
        return browser;
    };

    this.hotHeadlinesLink = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/aside/div[3]/ul/li[1]/span/a')
        return browser;
    };
}
