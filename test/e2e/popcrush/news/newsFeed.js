module.exports = {
  'Testing the Popcrush.com news feed' : function (client) {
    client
    
      // Navigate to Popcrush.com
      .page.popcrush.headerObjects().popcrush()

      // Click the 'NEWS' btn
      .page.popcrush.headerObjects().newsBtn()

      // Click the first articles title
      .page.popcrush.feedObjects().articleTitle()

      .back()

      // Click on the articles author
      .page.popcrush.feedObjects().articleAuthor()

      .back()

      // Click the article image
      .page.popcrush.feedObjects().articleImage()

      .back()

      // Click the 'READ MORE' btn
      .page.popcrush.feedObjects().articleReadMore()

      .end();
  }
};