module.exports = function (browser) {

// -----------------------------------------------------
// ---- FOOTER OBJECTS ----

    // Verifying 'POPCRUSH NETWORK' appears within the footer
    this.popcrushNetwork = function () {
        browser
            .expect.element('#menu-footer > li.first.comscore.menu-item > a').text.to.equal('POPCRUSH NETWORK')
        return browser;
    };

    // Clicking article author name
    this.contactUsBtn = function () {
        browser
            .click('#menu-item-239096 > a')
        return browser;
    };

    // Clicking article cover image
    this.privacyBtn = function () {
        browser
            .click('#menu-item-939>a')
            .waitForElementVisible('body', 500)
            .expect.element('.footer_link_legal>h1').text.to.equal('PRIVACY POLICY (UPDATED: 5/9/16)')
        return browser;
    };

    // Clicking 'READ MORE' button
    this.advertiseBtn = function () {
        browser
            .click('#menu-item-279451>a')
        return browser;
    };
}