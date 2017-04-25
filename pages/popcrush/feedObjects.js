module.exports = function (browser) {

// -----------------------------------------------------
// ---- HOME PAGE ARTICLE ----

    // Clicking article title
    this.articleTitle = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/div/div/section/article[1]/header/h2/a')
        return browser;
    };

    // Clicking article author name
    this.articleAuthor = function () {
        browser
            .click('.the_author>a')
        return browser;
    };

    // Clicking article cover image
    this.articleImage = function () {
        browser
            .click('a > img.wp-post-image.sonar_image')
        return browser;
    };

    // Clicking 'READ MORE' button
    this.articleReadMore = function () {
        browser
            .click('.more_act>a')
        return browser;
    };
}