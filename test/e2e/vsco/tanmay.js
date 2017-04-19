module.exports = {
  'Demo @ tanmaysarkar.com' : function (browser) {
    browser
      .page.sample.webHome().goToTanmay()
      .page.sample.webHome().navigateSample01()
      .page.sample.sample_01().fillForm()
      .page.sample.sample_01().backhome()
      .page.sample.webHome().validateheader()
      .end();
  }
};