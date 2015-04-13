'use strict';

var mockedData = require('../mock/mockedDataE2E.js');
module.exports = function () {

    browser.addMockModule('mockedData', mockedData);
    var self = this;

    this.gotoLoginPage = function () {
        browser.get('/#/app/login');
    };
    this.gotoAddAccountPage = function () {
        browser.get('/#/app/add-account');
    };
    this.clickSideMenu = function () {
        var btn = element.all(by.css('.left-buttons button')).get(0).getWebElement();
        browser.executeScript("arguments[0].click()", btn);
    };
    this.clickInvoice = function () {
        self.clickByCss('#account-summary .ion-document-text');
    };
    this.clickRegister = function () {
        self.clickByCss('#login a.btn-register');
    };
    this.clickForgotPassword = function () {
        //self.clickByCss('#login a'); 
        element(by.id('forgotPasswordLink')).click();
    };
    this.clickRegisterSubmit = function () {
        self.clickByCss('#register form button');
    };
    this.getMockedData = function (value) {
        return browser.executeScript('return angular.injector(["mockedData"]).get("' + value + '")');
    };
    this.clickRenew = function () {
        self.clickByCss('#account-summary .ion-refresh');
    };
    this.clickPayment = function () {
        self.clickByCss('#account-summary .ion-social-usd');
    };
    this.assertTextFromDataSet = function (locator, mockValue, mockField) {
        var elem = self.byCss(locator);
        elem.getText().then(
                function (text) {
                    self.getMockedData(mockValue).then(function (obj) {
                        expect(text.toString()).toBe(obj[mockField]);
                    });
                });
    }
    this.clickByCss = function (selector) {
        var elem = self.byCss(selector);
        elem.click();
    };
    this.clickByCssAll = function (selector, index) {
        var elem = self.byCssAllIndex(selector, index);
        elem.click();
    };
    this.byCssAllIndex = function (selector, index) {
        var elem = element.all(by.css(selector)).get(index);
        self.wait(elem);
        return elem;
    };
    this.byCss = function (selector) {
        var elem = element(by.css(selector));
        self.wait(elem);
        return elem;
    };

    this.assertTextByCss = function (selector, value) {
        var elem = self.byCss(selector);
        expect(elem.getText()).toBe(value);
    };
    this.assertTextByCssAllIndex = function (selector, value, index) {
        var elem = self.byCssAllIndex(selector, index);
        expect(elem.getText()).toBe(value);
    };    

    this.assertCountByCss = function (selector, count) {
        self.byCssAllIndex(selector, 0);
        var elem = element.all(by.css(selector))
        expect(elem.count()).toBe(count);
    };
    this.wait = function (elem) {
        browser.wait(function () {
            return elem.isPresent();
        });
        browser.wait(function () {
            return elem.isDisplayed();
        });
    };
};

 