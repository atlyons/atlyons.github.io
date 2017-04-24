module.exports = function (browser) {

// -----------------------------------------------------
// ---- ARTICLE OBJECTS ----

    // Verify the articles author appears at the top of the article
    this.articleAuthor = function () {
        browser
            .expect.element('.the_author>span').text.to.equal('by')
        return browser;
    };

    // Clicking the 'FACEBOOK' share button
    this.facebookBtn = function () {
        browser
            .click('a.facebook.share_link>div')
            .expect.element('a.facebook.share_link>div>span').text.to.equal('SHARE')
        return browser;
    };

    // Clicking the 'TWITTER' share button
    this.twitterBtn = function () {
        browser
            // .expect.element('a.twitter.share_link>div').to.be.visible
            .click('a.twitter.share_link>div')
        return browser;
    };

    // Clicking the 'EMAIL' share button
    this.emailBtn = function () {
        browser
            // .expect.element('a.email.share_link > div').to.be.visible
            .click('a.email.share_link > div')
        return browser;
    };

    // Clicking the 'REDIT' share button
    this.reditBtn = function () {
        browser
            // .expect.element('a.redit.share_link > div').to.be.visible
            .click('a.reddit.share_link > span')
        return browser;
    };

    // Clicking article cover image
    this.articleImage = function () {
        browser
            // .click('xpath', 'html/body/div[1]/div[4]/div[3]/div/div/section/article[1]/figure/a/img')
            // .click('#post-content-519545>figure>a>img')
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