'use strict';
var Common = require('../e2e/commonPage.js');
var Home = require('../e2e/homePage.js');

describe('homeSpec', function () {
    var common, homePage;
    beforeEach(function () {
        common = new Common();
        homePage = new Home();
    });

    it('should go to profile page', function () {
        loginPage.mockHomeSuccess();
        common.assertTextByCss('#login > ion-content > div > span > h3','Login to Your Account');
    });
    it('show go to badge page', function () {
        loginPage.mockLoginSuccess();
        common.assertTextByCss('#account-summary > ion-content > div.scroll > div > span > h3','Account Summary');
    });
});
