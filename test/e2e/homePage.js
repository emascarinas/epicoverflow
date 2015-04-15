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
                    function ($httpBackend, getProfile, config, question, answer, qcomments, acomments) {
                        $httpBackend.whenGET(config.apiUrl + 'questions/29638426?filter=!-*f(6rkvDeNh&pagesize=20&page=1&site=stackoverflow').respond(question);
                        $httpBackend.whenGET(config.apiUrl + 'questions/29638426/answers?page=1&order=desc&sort=votes&filter=!-*f(6tIDgtXe&pagesize=20&site=stackoverflow').respond(answer);
                        $httpBackend.whenGET(config.apiUrl + 'questions/29638426/comments?pagesize=5&page=1&order=asc&filter=!-*f(6sexcV94&site=stackoverflow').respond(qcomments);
                        $httpBackend.whenGET(config.apiUrl + 'answers/29638518/comments?pagesize=5&page=1&order=asc&filter=!-*f(6tIDgtXe&site=stackoverflow').respond(acomments);
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    };
    this.mockHomeError = function () {
        var httpBackendMock = function () {
            angular.module('httpBackendMock', ['ngMockE2E'])
                    .run(function ($httpBackend, config, error) {
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    }    
};

module.exports = Home;