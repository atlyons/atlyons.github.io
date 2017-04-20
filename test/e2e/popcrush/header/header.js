module.exports = {
  'Popcrush.com header navigation test' : function (client) {
    client
    
      // Navigate to Popcrush.com
      .page.popcrush.headerObjects().popcrush()
      // .waitForElementVisible('body', 500)

      // Click the "Popcrush" logo
      .page.popcrush.headerObjects().popcrushLogo()

     // Click the "HOME" button from the nav bar
      .page.popcrush.headerObjects().homeBtn()

     // Click the "NEWS" button from the nav bar
      .page.popcrush.headerObjects().newsBtn()

     // Click the "MUSIC" button from the nav bar
      .page.popcrush.headerObjects().musicBtn()

     // Click the "MOVIE" button from the nav bar
      .page.popcrush.headerObjects().movieBtn()

     // Click the "TV" button from the nav bar
      .page.popcrush.headerObjects().tvBtn()

     // Click the "POLLS" button from the nav bar
      .page.popcrush.headerObjects().pollsBtn()

     // Click the "VIDEOS" button from the nav bar
      .page.popcrush.headerObjects().videosBtn()

     // Click the "PHOTOS" button from the nav bar
      .page.popcrush.headerObjects().photosBtn()

     // Click the "LISTS" button from the nav bar
      .page.popcrush.headerObjects().listsBtn()

      .end();
  }
};