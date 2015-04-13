'use strict';
var Common = require('../e2e/commonPage.js');
var Login = require('../e2e/loginPage.js');

describe('loginSpec', function () {
    var common, loginPage;
    beforeEach(function () {
        common = new Common();
        loginPage = new Login();
    });

    it('should go to login page', function () {
        common.gotoLoginPage();
        common.assertTextByCss('#login > ion-content > div > span > h3','Login to Your Account');
    });
    it('should login and go to account summary page', function () {
        loginPage.mockLoginSuccess();
        common.gotoLoginPage();
        loginPage.fillLoginForm();
        loginPage.clickLogin();
        common.assertTextByCss('#account-summary > ion-content > div.scroll > div > span > h3','Account Summary');
    });
    it('should show invalid username password on login', function () {
        loginPage.mockLoginError();
        common.gotoLoginPage();
        loginPage.fillLoginForm();
        loginPage.clickLogin();
        common.assertTextByCss('div.popup-container.error.popup-showing.active div.popup-body > span','Invalid username/password');
    });

});
