describe("testStudent", function () {
it("tests testStudent", function (browser) {
  browser.windowRect({width: 1066, height: 907})
  .navigateTo("http://127.0.0.1:5500/test.html?username=wdsdsdsd&password=sdsdsd")
  .click("[data-test=username]")
  .setValue("[data-test=username]", "anisghabi8@gmail.com")
  .click("[data-test=password]")
  .setValue("[data-test=password]", "123123123")
  .click("body > form > div > button:nth-child(5)")
  .end();
  });
  
});

