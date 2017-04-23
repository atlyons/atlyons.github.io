module.exports = function (browser) {

// -----------------------------------------------------
// ---- PAGINATION SECTION ----

    // Click the '1' pagination button
    this.pagination1 = function () {
        browser 
            .click('.pagi_items > a[href*="/"].pagi_item:nth-of-type(1)')
            .waitForElementVisible('body', 500)
            .assert.title('PopCrush')
        return browser;
    };

    // Click the '2' pagination button
    this.pagination2 = function () {
        browser 
            .click('a[href*="/page/2/"].pagi_item')
            .waitForElementVisible('body', 500)
            .expect.element('h1').text.to.equal('LATEST NEWS - PAGE 2')
       return browser;
    };

    // Click the '3' pagination button
    this.pagination3 = function () {
        browser 
            .click('a[href*="/page/3/"]')
            .waitForElementVisible('body', 500)
            .expect.element('h1').text.to.equal('LATEST NEWS - PAGE 3')
        return browser;
    };

    // Click the 'Advance / Forward - >' pagination button
    this.paginationForward = function () {
        browser 
            .click('a.page_next>b')
            .waitForElementVisible('body', 500)
            .expect.element('h1').text.to.equal('LATEST NEWS - PAGE 4')
        return browser;
    };

    // Click the 'Reverse / Back - <' pagination button
    this.paginationReverse = function () {
        browser 
            .click('a.page_prev>b')
              .waitForElementVisible('body', 500)
            .expect.element('h1').text.to.equal('LATEST NEWS - PAGE 3')
        return browser;
    };
}