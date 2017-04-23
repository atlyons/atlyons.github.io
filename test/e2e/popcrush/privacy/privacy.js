module.exports = {
  'Testing each anchor link on the Privacy screen' : function (client) {
    client
    
      // Navigate to Popcrush.com
      .page.popcrush.headerObjects().popcrush()
      .waitForElementVisible('body', 500)

      // Verify the 'POPCRUSH NETWORK' string appears within the footer
      .page.popcrush.footerObjects().privacyBtn()

      // Click the '1. Scope' button
      .page.popcrush.privacyObjects().scopeBtn()

      // Click the '2. Contact Us' button
      .page.popcrush.privacyObjects().infoBtn()

      // Click the '3. Personal' button
      .page.popcrush.privacyObjects().personalBtn()

      // Click the '4. Third Parties' button
      .page.popcrush.privacyObjects().thirdPartiesBtn()

      // Click the '5. Non-Personally' button
      .page.popcrush.privacyObjects().nonPersonalBtn()

      // Click the '6. Security' button
      .page.popcrush.privacyObjects().securityBtn()

      // Click the '7. Links' button
      .page.popcrush.privacyObjects().linksBtn()

      // Click the '8. Opt-Out' button
      .page.popcrush.privacyObjects().optOutBtn()

      // Click the '9. Children' button
      .page.popcrush.privacyObjects().childrenBtn()

      // Click the '10. California' button
      .page.popcrush.privacyObjects().californiaBtn()

      // Click the '11. Disclosure' button
      .page.popcrush.privacyObjects().disclosureBtn()

      // Click the '13. Non-Confidential' button
      .page.popcrush.privacyObjects().nonConfidentialBtn()

      // Click the '14. Retention' button
      .page.popcrush.privacyObjects().retentionBtn()

      // Click the '15. Assignment' button
      .page.popcrush.privacyObjects().assignmentBtn()

      // Click the '16. International' button
      .page.popcrush.privacyObjects().internationalBtn()

      // Click the '17. Disputes' button
      .page.popcrush.privacyObjects().disputesBtn()

      // Click the '18. Contact' button
      .page.popcrush.privacyObjects().contactBtn()

      .end();
  }
};