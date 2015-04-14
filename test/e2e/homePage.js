'use strict';
var Common = require('../e2e/commonPage.js');

var Home = function () {
    var common = new Common();
    
    this.clickBadge = function () {
        common.clickByCss('#login > ion-content > div > button');
    };
    this.mockHomeSuccess = function () {
        var httpBackendMock = function () {
            angular.module('httpBackendMock', ['ngMockE2E'])
                    .run(
                    function ($httpBackend, getProfile, config) {
                        $httpBackend.whenPOST(configuration.getAccountUrl()).respond(getAccessKeyID);
                        $httpBackend.whenGET(configuration.getAccountUrl()).respond(getAccounts);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber).respond(getAccount);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber + '/invoice').respond(getInvoices);
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    };
    this.mockHomeError = function () {
        var httpBackendMock = function () {
            angular.module('httpBackendMock', ['ngMockE2E'])
                    .run(function ($httpBackend, config, error) {
                        $httpBackend.whenPOST(configuration.getAccountUrl()).respond(401,invalidUsernamePassword);
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    }    
};

module.exports = Home;