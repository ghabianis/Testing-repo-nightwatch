describe("TestLoginLast", function () {
it("tests TestLoginLast", function (browser) {
  browser.windowRect({width: 922, height: 880})
  .navigateTo("https://3001-tekabdevtea-webapplicat-7dasv2ajjvw.ws-eu77.gitpod.io/auth/sign-in")
  .click("#app > div > div > div.w-lg-500px.mb-10.mb-lg-3.mx-auto.d-flex.flex-column > div > div > div > div.mt-8 > div > input")
  .setValue("#app > div > div > div.w-lg-500px.mb-10.mb-lg-3.mx-auto.d-flex.flex-column > div > div > div > div.mt-8 > div > input", "candidate6@gmail.com")
  .click("#app > div > div > div.w-lg-500px.mb-10.mb-lg-3.mx-auto.d-flex.flex-column > div > div > div > div:nth-child(4) > div.el-input.el-input--large > input")
  .doubleClick("#app > div > div > div.w-lg-500px.mb-10.mb-lg-3.mx-auto.d-flex.flex-column > div > div > div > div:nth-child(4) > div.el-input.el-input--large > input")
  .setValue("#app > div > div > div.w-lg-500px.mb-10.mb-lg-3.mx-auto.d-flex.flex-column > div > div > div > div:nth-child(4) > div.el-input.el-input--large > input", "123496787")
  .click("#app > div > div > div.w-lg-500px.mb-10.mb-lg-3.mx-auto.d-flex.flex-column > div > div > div > div.d-grid > button > span")
  .click("#app > form > div > div.d-flex.gap-5.align-items-center.justify-content-center.w-100.mb-4.mt-4 > div:nth-child(1) > div > div > div > input")
  .doubleClick("#app > form > div > div.d-flex.gap-5.align-items-center.justify-content-center.w-100.mb-4.mt-4 > div:nth-child(1) > div > div > div > input")
  .setValue("#app > form > div > div.d-flex.gap-5.align-items-center.justify-content-center.w-100.mb-4.mt-4 > div:nth-child(1) > div > div > div > input", "ghabi")
  .doubleClick("#app > form > div > div.d-flex.gap-5.align-items-center.justify-content-center.w-100.mb-4.mt-4 > div:nth-child(2) > div > div > div > input")
  .setValue("#app > form > div > div.d-flex.gap-5.align-items-center.justify-content-center.w-100.mb-4.mt-4 > div:nth-child(2) > div > div > div > input", "anis")
  .click("#jobs")
  .click("#app > form > div > div:nth-child(8) > div > div > div > button > span")
  .click("#app > form > div > div > div.d-flex.gap.flex-column.w-100.mw-375px > div.full-input.d-flex.mt-4 > div > div > button")
  .click("#app > form > div > div > div.gap-5.mt-4.d-flex.align-items-center.justify-content-center.w-100.mw-375px.p-3 > div > div > div > button > span")
  .click("#app > form > div > div.main.w-100 > div:nth-child(1) > div.d-flex.main__header.z-index-1 > h6")
  .click("#app > form > div > div:nth-child(3) > div > div > div.el-dialog__body > form > div > div:nth-child(1) > div > div > input")
  .setValue("#app > form > div > div:nth-child(3) > div > div > div.el-dialog__body > form > div > div:nth-child(1) > div > div > input", "Java")
  .click("#app > form > div > div:nth-child(3) > div > div > div.el-dialog__body > form > div > div:nth-child(2) > div > div > input")
  .setValue("#app > form > div > div:nth-child(3) > div > div > div.el-dialog__body > form > div > div:nth-child(2) > div > div > input", "Tekab")
  .click("#app > form > div > div:nth-child(3) > div > div > div.el-dialog__body > form > div > div.d-flex.checkbox.align-items-center.mt-25 > label")
  .click("#app > form > div > div:nth-child(3) > div > div > div.el-dialog__body > form > div > div.d-flex.mb-30.justify-content-space-between.align-items-center.full-input.mt-30 > div > button")
  .click("#app > form > div > div.d-flex.gap-5.mw-375px.w-100.mb-3 > div > div > div > button > span")
  .end();
  });
});
