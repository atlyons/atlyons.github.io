module.exports = function (browser) {

// -----------------------------------------------------
// ---- POLLS SECTION ----

    // Assert 'POLLS' section is present
    this.polls = function () {
        browser 
            .expect.element('#content_sidebar > .widget.ts_blogroll_pinned.ts_blogroll.clearfix:nth-of-type(5) > .widget_header.clearfix > h4').text.to.equal('POLLS')
        return browser;
    };

    // Clicking the "POLLS" article cover image
    this.pollsImg = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/aside/div[5]/article[1]/figure/a/img')
        return browser;
    };

    // Clicking the "POLLS" article title
    this.pollsTitle = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/aside/div[5]/article[1]/div/a')
        return browser;
    };
}