module.exports = function (browser) {
    
// -----------------------------------------------------
// ---- PHOTOS SECTION ----

    // Assert 'PHOTOS' section is present
    this.photos = function () {
        browser
            .expect.element('h4').text.to.equal('PHOTOS')
        return browser;
    };

    // Clicking the first list item - 'PHOTOS' cover image
    this.photosImg = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/aside/div[2]/article[1]/figure/a/img')
        return browser;
    };

    // Clicking the first list item - 'PHOTOS' title
    this.photosTitle = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/aside/div[2]/article[1]/div/a')
        return browser;
    };
}