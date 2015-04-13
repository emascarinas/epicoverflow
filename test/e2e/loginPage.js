'use strict';
var Common = require('../e2e/commonPage.js');

var Login = function () {
    var common = new Common();
    
    this.fillLoginForm = function () {
        element(by.model('loginData.email')).clear().sendKeys('care@infiniteenergy.com');
        element(by.model('loginData.password')).clear().sendKeys('infinitetest1');
    };
    this.clickLogin = function () {
        common.clickByCss('#login > ion-content > div > button');
    };
    this.mockLoginSuccess = function () {
        var httpBackendMock = function () {
            angular.module('httpBackendMock', ['ngMockE2E'])
                    .run(
                    function ($httpBackend, getAccounts, getAccount, configuration, getAccessKeyID, getInvoices, getRenewalRates, getRenewalTerms, renewRate,
                            getPaymentSetupInfo, getPaymentReviewInfo, makeCCPayment, makeACHPayment, addAccountForm, addAccount200) {
                        $httpBackend.whenPOST(configuration.getAccountUrl()).respond(getAccessKeyID);
                        $httpBackend.whenGET(configuration.getAccountUrl()).respond(getAccounts);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber).respond(getAccount);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber + '/invoice').respond(getInvoices);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber + '/rates').respond(getRenewalRates);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber + '/rates/6_mo_Saver/asserts').respond(getRenewalTerms);
                        $httpBackend.whenPOST(configuration.getAccountUrl() + getAccount.accountNumber + '/renewal').respond(renewRate);
                        $httpBackend.whenGET(configuration.getPaymentsUrl() + getAccount.accountNumber + '/setup').respond(getPaymentSetupInfo);
                        $httpBackend.whenPOST(configuration.getPaymentsUrl() + getAccount.accountNumber + '/review').respond(getPaymentReviewInfo);
                        $httpBackend.whenPOST(configuration.getPaymentsUrl() + getAccount.accountNumber + '/ccPayment').respond(makeCCPayment);
                        $httpBackend.whenPOST(configuration.getPaymentsUrl() + getAccount.accountNumber + '/achPayment').respond(makeACHPayment);
                        $httpBackend.whenPOST(configuration.getAccountUrl() + addAccountForm.ieiNumber + '/add').respond(addAccount200);
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    };
    this.mockLoginError = function () {
        var httpBackendMock = function () {
            angular.module('httpBackendMock', ['ngMockE2E'])
                    .run(function ($httpBackend, configuration, invalidUsernamePassword) {
                        $httpBackend.whenPOST(configuration.getAccountUrl()).respond(401,invalidUsernamePassword);
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    }    
};

module.exports = Login;