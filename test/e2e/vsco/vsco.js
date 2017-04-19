module.exports = {
  'Demo test VSCO login' : function (client) {
    client
      .url('http://www.vsco.co')
      .waitForElementVisible('body', 1000)
      .assert.title('VSCO - Create, discover, and connect')
      .click(".Nav-primaryPages > li:nth-child(4) > a:nth-child(1)")
      .assert.title('Sign In | VSCO')
      .assert.visible('input[name=login')
      .assert.visible('input[type=password]')
      .setValue('input[name=login]', 'austintylerlyons@gmail.com')
      .setValue('input[name=password]', 'Shasta9594')
      .click('button[id=loginButton]')
      .url('http://vsco.co/catfail')
      .waitForElementVisible('footer', 10000)
      .saveScreenshot('screenshots/vscotest/signin.png')
      .assert.title('catfail | VSCO')
      .end();
  }
};