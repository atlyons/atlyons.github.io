module.exports = function (browser) {
    
// -----------------------------------------------------
// ---- NEWSLETTER SECTION ----

    // Assert 'NEWSLETTER' section is present
    this.newsletter = function () {
        browser
            .expect.element('#tsq_sailthru_newsletter_widget-7 > div.widget_header.clearfix > h4').text.to.equal('NEWSLETTER')
        return browser;
    };

    // Type email address into the 'NEWSLETTER' field
    this.newsletterField = function () {
        browser
            .setValue('input[name=email]', 'tester@testing.com')
        return browser;
    };

    // Click the 'NEWSLETTER' submit btn     
    this.newsletterBtn = function () {
        browser
            .click('.button')
            .waitForElementVisible('body', 500)
        return browser;
    };

    // Assert 'Recaptia' appears after entering a valid email address into the Newsletter form
    this.recaptcha = function () {
        browser
            .expect.element('#tsq_sailthru_newsletter_widget-7 > div.gform_wrapper > form > div.sailthru-newsletter > span').text.to.equal('Please complete Recaptcha to submit')
        return browser;
    };
}