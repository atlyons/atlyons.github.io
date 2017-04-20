module.exports = {
  'Airbnb Search for - Chico, CA' : function (client) {
    client
      // navigate to airbnb.com
      .page.searchScreen().airbnb()
      
      // Adding Search location
      .page.searchScreen().location()

      // Adding Search dates
      .page.searchScreen().date()

      // Increasing number of guests
      .page.searchScreen().guest()

      // Screenshot of the results
      .page.searchScreen().results()
      .end();
  }
};