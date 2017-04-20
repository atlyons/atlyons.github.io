module.exports = function (browser) {

// -----------------------------------------------------

// ----HOME PAGE CAROUSEL----

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


// -----------------------------------------------------

// ----HOME PAGE CAROUSEL----

// Clicking article title
this.articleTitle = function () {
    browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/div/div/section/article[1]/header/h2/a')
    return browser;
};

// Clicking article author name
this.articleAuthor = function () {
    browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/div/div/section/article[1]/header/div/span[1]/a')
    return browser;
};

// Clicking article cover image
this.articleImage = function () {
    browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/div/div/section/article[1]/figure/a/img')
    return browser;
};

// Clicking 'READ MORE' button
this.articleReadMore = function () {
    browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/div/div/section/article[1]/div[1]/p[2]/a')
    return browser;
};


// -----------------------------------------------------

// ----PHOTOS SECTION----

// Assert 'PHOTOS' section is present
this.photos = function () {
    browser
            .expect.element('h4').text.to.equal('PHOTOS')
    return browser;
};

// Clicking the left Carousel button
this.photosImg = function () {
    browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/aside/div[2]/article[1]/figure/a/img')
    return browser;
};

// Clicking the left Carousel button
this.photosTitle = function () {
    browser
            .click('xpath', 'html/body/div[1]/div[4]/div[3]/aside/div[2]/article[1]/div/a')
    return browser;
};


}