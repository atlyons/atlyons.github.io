module.exports = function (browser) {

// Navigating to website
    this.airbnb = function() {
      browser
          .url('http://www.airbnb.com/')
          .waitForElementVisible('body', 4000)
          .assert.title('Vacation Rentals, Homes, Experiences & Places - Airbnb')
      return browser;
    };

// Adding a travel location
    this.location = function() {
      browser
          .setValue('input[name=location]', 'Chico, CA')
      return browser;
    };

// Adding travel dates
    this.date = function() {
      browser
          // Click the Date field
          .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[2]/div[1]/span/div/div/div[2]/button')
          // Selecting a arrival date
          .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[2]/div[1]/span/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]/table/tbody/tr[5]/td[4]/button')
          // Selecting a return date
          .click('xpath', 'html/body/main/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/form/div/div[2]/div[1]/span/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div/div[3]/table/tbody/tr[2]/td[4]/button')
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