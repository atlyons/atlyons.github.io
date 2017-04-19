module.exports = function (browser) {

// Navigating to website
    this.airbnb = function() {
      browser
          .url('http://www.airbnb.com/')
        //  .verify.attributeEquals("meta[name=description]", "Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.")
        //   .verify.attributeEquals("meta[name=title]", "Vacation Rentals, Homes, Experiences &amp; Places - Airbnb")
        //   .expect.element('.textHeader_8yxs9w').text.to.equal('Where to? Start your next trip on Airbnb.');
          .assert.title('Vacation Rentals, Homes, Experiences & Places - Airbnb')
      return browser;
    };

// Adding a travel location
    this.airbnbLogo = function() {
      browser
          .click('div.icon_1sfsmb2')
        //   .verify.attributeEquals("meta[name=description]", "Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.")
        //   .verify.attributeEquals("meta[name=title]", "Vacation Rentals, Homes, Experiences &amp; Places - Airbnb")
        //   .expect.element('meta[name=description]').text.to.equal('Where to? Start your next trip on Airbnb.');
          .assert.title('Vacation Rentals, Homes, Experiences & Places - Airbnb')
      return browser;
    };


// "Become a Host" nav button
    this.becomeAHost = function() {
      browser
          // Click the "Become a Host" button
          .click('xpath', '//*[@id="site-content"]/div/div/div[1]/div[2]/div[1]/header/div/div/div[3]/div/nav/ul/li[4]/div/div/button/div/div/span')
      return browser;
    };

            // "Host a home" nav button
                this.hostAHome = function() {
                browser
                    // Click the "Host a home" button
                    .click('div.child_17u98ky')
                    .assert.title('Rent Out Your Room, House or Apartment on Airbnb')
                return browser;
                };

            // "Host an expirience" nav button
                this.hostAnExpirience = function() {
                browser
                    // Click the "Host an expirience" button
                    .click('.list_cdqs15 > li:nth-child(3) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)')
                    .assert.title('Become an Experience Host')
                return browser;
                };



// HELP BUTTON TAB
    // Click the NAV "Help"" button
        this.help = function() {
            browser
                // Click the "Help" button
                .click('li.item_1g2dfiu:nth-child(4) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)')
            return browser;
    };

            // "Airbnb help" button
                this.airbnbHelp = function() {
                    browser
                        // Click the "Airbnb help" button
                        .click('a.component_9w5i1l-o_O-navigation_3mnosr')
                    return browser;
                };






// Adding no. of travel guests
    this.guest = function() {
      browser
          // Click guests field
          .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[3]/div[1]/button')
          // Click Adults + increase button once
          .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[3]/div[1]/div/div/div/div[1]/div[1]/fieldset/div/div[2]/div/div[3]/button')
          // Click the 'Apply' button
          .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[3]/div[1]/div/div/div/div[2]/div/div[2]/div/span/button')
          .assert.title('Chico, CA – Airbnb')
      return browser;
    };

// Screenshot of results
    this.results = function() {
      browser
          .pause('4000')
          .saveScreenshot('screenshots/vscotest/airbnb.png')
    return browser;
    };
};