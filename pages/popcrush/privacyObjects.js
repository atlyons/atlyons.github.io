module.exports = function (browser) {

// -----------------------------------------------------
// ---- FOOTER OBJECTS ----

    // Verifying the 'Scope' button scrolls down to list item no. 1
    this.scopeBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(2) > a')
            .expect.element('#scope').text.to.equal('1. Scope')
        return browser;
    };

    // Verifying the 'Information Collected' button scrolls down to list item no. 2
    this.infoBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(3) > a')
            .expect.element('#info').text.to.equal('2. Information Collected')
        return browser;
    };

    // Verifying the 'Personal Information' button scrolls down to list item no. 3
    this.personalBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(4) > a')
            .expect.element('#personal').text.to.equal('3. Use of Your Personal Information')
        return browser;
    };

    // Verifying the 'Third Parties' button scrolls down to list item no. 4
    this.thirdPartiesBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(5) > a')
            .expect.element('#third-parties').text.to.equal('4. Sharing Personal Information With Third Parties')
        return browser;
    };

    // Verifying the 'Non-Personally' button scrolls down to list item no. 5
    this.nonPersonalBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(6) > a')
            .expect.element('#non-personal').text.to.equal('5. Non-Personally Identifiable Information')
        return browser;
    };

    // Verifying the 'Security' button scrolls down to list item no. 6
    this.securityBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(7) > a')
            .expect.element('#security').text.to.equal('6. Your Security')
        return browser;
    };

    // Verifying the 'Links' button scrolls down to list item no. 7
    this.linksBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(8) > a')
            .expect.element('#links').text.to.equal('7. Links to Other Website(s)')
        return browser;
    };

    // Verifying the 'Opt-out' button scrolls down to list item no. 8
    this.optOutBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(9) > a')
            .expect.element('#opt-out').text.to.equal('8. Opt-Out')
        return browser;
    };

    // Verifying the 'Children' button scrolls down to list item no. 9
    this.childrenBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(10) > a')
            .expect.element('#children').text.to.equal('9. Children')
        return browser;
    };

    // Verifying the 'California' button scrolls down to list item no. 10
    this.californiaBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(11) > a')
            .expect.element('#california').text.to.equal('10. Your California Privacy Rights')
        return browser;
    };

    // Verifying the 'Disclosure' button scrolls down to list item no. 10
    this.disclosureBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(12) > a')
            .expect.element('#disclosure').text.to.equal('11. Disclosure for Legal Purposes')
        return browser;
    };

    // Verifying the 'Non-Confidential' button scrolls down to list item no. 11
    this.nonConfidentialBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(13) > a')
            .expect.element('#non-confidential').text.to.equal('12. Non-Confidential Information')
        return browser;
    };

    // Verifying the 'Retention' button scrolls down to list item no. 12
    this.retentionBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(14) > a')
            .expect.element('#retention').text.to.equal('13. Retention, Access and Deletion')
        return browser;
    };

    // Verifying the 'Assignment' button scrolls down to list item no. 13
    this.assignmentBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(15) > a')
            .expect.element('#assignment').text.to.equal('14. Assignment')
        return browser;
    };

    // Verifying the 'International' button scrolls down to list item no. 14
    this.internationalBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(16) > a')
            .expect.element('#international').text.to.equal('15. International User Notice')
        return browser;
    };

    // Verifying the 'Disputes' button scrolls down to list item no. 15
    this.disputesBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(17) > a')
            .expect.element('#disputes').text.to.equal('16. Disputes')
        return browser;
    };

    // Verifying the 'Contact' button scrolls down to list item no. 16
    this.contactBtn = function () {
        browser
            .click('#content_main > section > article > div > ul > p:nth-child(18) > a')
            .expect.element('#contact').text.to.equal('17. Contact')
        return browser;
    };

}

