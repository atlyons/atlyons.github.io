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

// ----HOME PAGE ARTICLE----

// Clicking article title
this.articleTitle = function () {
    browser
        .click('xpath', 'html/body/div[1]/div[4]/div[3]/div/div/section/article[1]/header/h2/a')
    return browser;
};

// Clicking article author name
this.articleAuthor = function () {
    browser
        .click('.the_author>a')
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


// -----------------------------------------------------

// ----PHOTOS SECTION----

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


// -----------------------------------------------------

// ----NEWSLETTER SECTION----

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


// -----------------------------------------------------

// ----POLLS SECTION----

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


// -----------------------------------------------------

// ----PAGINATION SECTION----

    // Click the '1' pagination button
    this.pagination1 = function () {
        browser 
            .click('#content_main > div.pagination_wrap.content_bg.clearfix > div > span > a:nth-child(1)')
            .assert.title('PopCrush')
        return browser;
    };

    // Click the '2' pagination button
    this.pagination2 = function () {
        browser 
            .click('#content_main > div > div > div > span.pagi_items > a:nth-child(3)')
            .expect.element('h1').text.to.equal('LATEST NEWS - PAGE 2')
       return browser;
    };

    // Click the '3' pagination button
    this.pagination3 = function () {
        browser 
            .click('#content_main > div > div > div > span.pagi_items > a:nth-child(5)')
            .expect.element('h1').text.to.equal('LATEST NEWS - PAGE 3')
        return browser;
    };

    // Click the 'Advance / Forward - >' pagination button
    this.paginationForward = function () {
        browser 
            .click('#content_main > div.pagination_wrap.content_bg.clearfix > div > a.page_next > b')
            .expect.element('h1').text.to.equal('LATEST NEWS - PAGE 4')
        return browser;
    };

    // Click the 'Reverse / Back - <' pagination button
    this.paginationReverse = function () {
        browser 
            .click('#content_main > div.pagination_wrap.content_bg.clearfix > div > a.page_prev > b')
            .expect.element('h1').text.to.equal('LATEST NEWS - PAGE 3')
        return browser;
    };


}

