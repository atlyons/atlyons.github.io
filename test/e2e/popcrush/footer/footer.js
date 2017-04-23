module.exports = {
  'Popcrush.com header navigation test' : function (client) {
    client
    
      // Navigate to Popcrush.com
      .page.popcrush.headerObjects().popcrush()
      // .waitForElementVisible('body', 500)

      // Verify the 'POPCRUSH NETWORK' string appears within the footer
      .page.popcrush.footerObjects().popcrushNetwork()

      // Click the 'Contact Us' button
      .page.popcrush.footerObjects().contactUsBtn()

      // Click the 'Privacy' button
      .page.popcrush.footerObjects().privacyBtn()

      // Click the 'HOME' button within the navbar
      .page.popcrush.headerObjects().homeBtn()

      // Click the 'Advertise' button
      .page.popcrush.footerObjects().advertiseBtn()

      .end();
  }
};