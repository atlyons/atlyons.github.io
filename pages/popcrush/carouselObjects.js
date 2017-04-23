module.exports = function (browser) {

// -----------------------------------------------------
// ---- HOME PAGE CAROUSEL ----

// Clicking the right Carousel button
    this.carouselRight = function () {
        browser
            .click('div.dl-forward.dl-btn')
        return browser;
    };

    // Clicking the left Carousel button
    this.carouselLeft = function () {
        browser
            .click('div.dl-reverse.dl-btn')
        return browser;
    };
}