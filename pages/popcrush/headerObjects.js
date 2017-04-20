module.exports = function (browser) {

// -----------------------------------------------------

// ----NAVIGATING TO POPCRUSH.COM----

// Navigating to website
this.popcrush = function () {
    browser
        .url('http://www.popcrush.com/')
        .assert.title('PopCrush')
    return browser;
};


// -----------------------------------------------------

// ----POPCRUSH.COM LOGO----

// Clicking the Popcrush Logo
this.popcrushLogo = function () {
    browser
        .click('a[class=site_logo_link]')
        .assert.title('PopCrush')
    return browser;
};


// -----------------------------------------------------

// ----NAVBAR----

    // Clicking the Home button
    this.homeBtn = function () {
        browser
            .click('#menu-item-306170 > a > span')
            .assert.title('PopCrush')
        return browser;
    };

    // Clicking the News button
    this.newsBtn = function () {
        browser
            .click('#menu-item-485408 > a > span')
            .expect.element('h1').text.to.equal('CELEBRITY NEWS')
        // .assert.title('Celebrity News - PopCrush')
        return browser;
    };

    // Clicking the Music button
    this.musicBtn = function () {
        browser
            .click('#menu-item-423041 > a > span')
            .expect.element('h1').text.to.equal('MUSIC NEWS')
        // .assert.title('Music News - PopCrush')
        return browser;
    };

    // Clicking the Movie button
    this.movieBtn = function () {
        browser
            .click('#menu-item-423046 > a > span')
            .expect.element('h1').text.to.equal('MOVIE NEWS')
        // .assert.title('Movie News - PopCrush')
        return browser;
    };

    // Clicking the TV button
    this.tvBtn = function () {
        browser
            .click('#menu-item-423045 > a > span')
            .expect.element('h1').text.to.equal('TV NEWS')
        // .assert.title('TV News - PopCrush')
        return browser;
    };

    // Clicking the Polls button
    this.pollsBtn = function () {
        browser
            .click('#menu-item-186601 > a > span')
            .expect.element('h1').text.to.equal('POLLS')
        //  .assert.title('Polls - PopCrush')
        return browser;
    };

    // Clicking the Videos button
    this.videosBtn = function () {
        browser
            .click('#menu-item-414460 > a > span')
            .expect.element('h1').text.to.equal('VIDEOS')
        //  .assert.title('Videos - PopCrush')
        return browser;
    };

    // Clicking the Photos button
    this.photosBtn = function () {
        browser
            .click('#menu-item-376278 > a > span')
            .expect.element('h1').text.to.equal('PHOTO GALLERIES')
        //  .assert.title('Photo Galleries - PopCrush')
        return browser;
    };

    // Clicking the Lists button
    this.listsBtn = function () {
        browser
            .click('#menu-item-423048 > a > span')
            .expect.element('h1').text.to.equal('LISTS')
        //  .assert.title('Lists - PopCrush')
        return browser;
    };

// -----------------------------------------------------

// ----TRENDING NAV LINKS----

    // Clicking TRENDING link 1
    this.trendingOne = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[1]/div/ul/li[2]/a')
            .saveScreenshot('screenshots/popcrush/trending/link1.png')
        return browser;
    };

    // Clicking TRENDING link 2
    this.trendingTwo = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[1]/div/ul/li[3]/a')
            .saveScreenshot('screenshots/popcrush/trending/link2.png')
        return browser;
    };

    // Clicking TRENDING link 3
    this.trendingThree = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[1]/div/ul/li[4]/a')
            .saveScreenshot('screenshots/popcrush/trending/link3.png')
        return browser;
    };

    // Clicking TRENDING link 4
    this.trendingFour = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[1]/div/ul/li[5]/a')
            .saveScreenshot('screenshots/popcrush/trending/link4.png')
        return browser;
    };

    // Clicking TRENDING link 5
    this.trendingFive = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[1]/div/ul/li[6]/a')
            .saveScreenshot('screenshots/popcrush/trending/link5.png')
        return browser;
    };

    // Clicking TRENDING link 6
    this.trendingSix = function () {
        browser
            .click('xpath', 'html/body/div[1]/div[4]/div[1]/div/ul/li[7]/a')
            .saveScreenshot('screenshots/popcrush/trending/link6.png')
        return browser;
    };


// -----------------------------------------------------

// ----SOCIAL HEADER LINKS----

    // Clicking the FACEBOOK button
    this.facebookBtn = function () {
        browser
            .click('.facebook')
        return browser;
    };

    // Clicking the TWITTER button
    this.twitterBtn = function () {
        browser
            .click('.twitter')
        return browser;
    };

    // Clicking the YOUTUBE button
    this.youtubeBtn = function () {
        browser
            .click('.youtube')
        return browser;
    };

    // Clicking the INSTAGRAM button
    this.instagramBtn = function () {
        browser
            .click('.instagram')
        return browser;
    };

    // Clicking the RSS button
    this.rssBtn = function () {
        browser
            .click('.rss')
        return browser;
    };

// -----------------------------------------------------

// ----SEARCH----

    this.searchField = function () {
        browser
            .setValue('input[id=search_input]', 'cat')
        return browser;
    };

      
    this.searchBtn = function () {
        browser
            .click('.search_icon')
            .waitForElementVisible('body', 500)
            .assert.title('Cat - PopCrush')
            .expect.element('h1').text.to.equal('SEARCH RESULTS FOR CAT')
        return browser;
    };








    // // "Become a Host" nav button
    // this.becomeAHost = function () {
    //     browser
    //         // Click the "Become a Host" button
    //         .click('xpath', '//*[@id="site-content"]/div/div/div[1]/div[2]/div[1]/header/div/div/div[3]/div/nav/ul/li[4]/div/div/button/div/div/span')
    //     return browser;
    // };

    // // "Host a home" nav button
    // this.hostAHome = function () {
    //     browser
    //         // Click the "Host a home" button
    //         .click('div.child_17u98ky')
    //         .assert.title('Rent Out Your Room, House or Apartment on Airbnb')
    //     return browser;
    // };

    // // "Host an expirience" nav button
    // this.hostAnExpirience = function () {
    //     browser
    //         // Click the "Host an expirience" button
    //         .click('.list_cdqs15 > li:nth-child(3) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)')
    //         .assert.title('Become an Experience Host')
    //     return browser;
    // };



    // // HELP BUTTON TAB
    // // Click the NAV "Help"" button
    // this.help = function () {
    //     browser
    //         // Click the "Help" button
    //         .find_elements_by_xpath("//*[contains(text(), 'Help')]")

    //     // .click("//span[contains(@class, 'link_cr2i2a') and text()='Help']")
    //     // .click('a[href=#logout]')
    //     return browser;
    // };

    // // "Airbnb help" button
    // this.airbnbHelp = function () {
    //     browser
    //         // Click the "Airbnb help" button
    //         .click('xpath', 'html/body/div[3]/div/div/div/div[1]')
    //     return browser;
    // };






    // // Adding no. of travel guests
    // this.guest = function () {
    //     browser
    //         // Click guests field
    //         .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[3]/div[1]/button')
    //         // Click Adults + increase button once
    //         .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[3]/div[1]/div/div/div/div[1]/div[1]/fieldset/div/div[2]/div/div[3]/button')
    //         // Click the 'Apply' button
    //         .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[3]/div[1]/div/div/div/div[2]/div/div[2]/div/span/button')
    //         .assert.title('Chico, CA – Airbnb')
    //     return browser;
    // };

    // // Screenshot of results
    // this.results = function () {
    //     browser
    //         .pause('4000')
    //         .saveScreenshot('screenshots/vscotest/airbnb.png')
    //     return browser;
    // };
};