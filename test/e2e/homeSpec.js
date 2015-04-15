'use strict';
var Common = require('../e2e/commonPage.js');
var Home = require('../e2e/homePage.js');

describe('homeSpec', function () {
    var common, homePage;
    beforeEach(function () {
        common = new Common();
        homePage = new Home();
    });

    it('should go to question page', function () {
        homePage.mockHomeSuccess();
        browser.get('/#/question?id=29638426')
        var title = common.getMockedData('question');
        common.assertTextByCss('#bz-question > h1',title.items[0].title);
    });
});
