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
            .expect.element('.social-group-top > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)').text.to.equal('SHARE')
        return browser;
    };

    // Clicking the 'TWITTER' share button
    this.twitterBtn = function () {
        browser
            .click('a.twitter.share_link>div')
            .expect.element('.social-group-top > div:nth-child(1) > a:nth-child(2) > span:nth-child(2)').text.to.equal('TWEET')
        return browser;
    };

    // Clicking the 'EMAIL' share button
    this.emailBtn = function () {
        browser
            .click('a.email.share_link > div')
            .expect.element('.social-group-top > div:nth-child(1) > a:nth-child(3) > span:nth-child(2)').text.to.equal('EMAIL')
        return browser;
    };

    // Clicking the 'REDIT' share button
    this.reditBtn = function () {
        browser
            .click('a.reddit.share_link > span')
            .expect.element('.social-group-top > div:nth-child(1) > a:nth-child(4) > span:nth-child(2)').text.to.equal('REDDIT')
        return browser;
    };

    // Verify the 'LEAVE A COMMENT' section is displayed
    this.leaveAComment = function () {
        browser
            .expect.element('.comments-header > h4:nth-child(1)').text.to.equal('LEAVE A COMMENT')
        return browser;
    };

    // Verify the 'FILED UNDER' section is displayed
    this.filedUnder = function () {
        browser
            .expect.element('.the_tags').to.be.visible;
        return browser;
    };

    // Verify the 'CATEGORY' section is displayed
    this.catagory = function () {
        browser
            .expect.element('.the_category').to.be.visible;
        return browser;
    };

}
