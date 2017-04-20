module.exports = {
  'Airbnb header navigation test' : function (client) {
    client
      // navigate to airbnb.com
      .page.headerNav().airbnb()
      .waitForElementVisible('body', 4000)

      // Click the "Become a host" button
     .page.headerNav().becomeAHost()
      .waitForElementVisible('body', 4000)

     // Click the "host a home" button from the "Become a host" nav drop down
     .page.headerNav().hostAHome()
      .waitForElementVisible('body', 4000)

     // Click the Airbnb logo to navigate back to airbnb.com
      .page.headerNav().airbnbLogo()
      .waitForElementVisible('body', 4000)

     // Click the "Become a host" button
     .page.headerNav().becomeAHost()
      .waitForElementVisible('body', 4000)

     // Click the "host a home" button from the "Become a host" nav drop down
     .page.headerNav().hostAnExpirience()
      .waitForElementVisible('body', 4000)

      .pause('1000')
     .page.headerNav().help()
     .waitForElementVisible('body', 4000)
     .pause('100000')
    //  .page.headerNav().airbnbHelp()
    //  .waitForElementVisible('body', 4000)
      // Increasing number of guests
    //   .page.searchScreen().guest()

      // Screenshot of the results
    //   .page.searchScreen().results()
      .end();
  }
};