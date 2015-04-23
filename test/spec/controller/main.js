'use strict';

describe('Controller: Main', function () {
    var controller;
    beforeEachShared();
    beforeEach(function () {
        controller = function () {
            return $controller('MainCtrl', {'$scope': $rootScope});
        };
        
    });
    afterEachShared();

    it('should initializ controller successfully', inject(function (getProfile, curl, util) {
        var url = config.apiUrl + 'me?key=kbHcPnT0zVHBHC0rFcfyFg((&access_token=07(9nKTPXNdMVa*4Ey2Gvg))&pagesize=20&filter=!9YdnSQVoS&page=1&site=stackoverflow';
        $httpBackend.whenGET(url).respond(getProfile);
        $httpBackend.whenPOST(config.curlUrl).respond(curl);
        spyOn(util, 'redirect');
        controller();
        $httpBackend.flush();
        expect(util.redirect).toHaveBeenCalledWith('https://stackexchange.com/oauth?scope=write_access,private_info&client_id=4669&redirect_uri=http://emascarinas.github.io/epicoverflow/');        
    }));
    it('should fetch by id successfully', inject(function ($routeParams, getProfile, session) {
        $routeParams.id = 123;
        var url = config.apiUrl + 'users/123?pagesize=20&filter=!9YdnSQVoS&page=1&site=stackoverflow';
        $httpBackend.whenGET(url).respond(getProfile);
        controller();
        $httpBackend.flush();
        expect(session.getProfile()).toEqual(getProfile.items[0]);
    }));
    it('should fetch by id with error', inject(function ($routeParams, util, error) {
        $routeParams.id = 123;
        var url = config.apiUrl + 'users/123?pagesize=20&filter=!9YdnSQVoS&page=1&site=stackoverflow';
        $httpBackend.whenGET(url).respond(502,error);
        spyOn(util, 'showError').and.callThrough();
        controller();
        $httpBackend.flush();
        expect(util.showError).toHaveBeenCalled();
        expect(util.showError.calls.mostRecent().args[0]).toEqual(error);
    }));
    it('should initializ controller with fetch error', inject(function (error, curl, util) {
        var url = config.apiUrl + 'me?key=kbHcPnT0zVHBHC0rFcfyFg((&access_token=07(9nKTPXNdMVa*4Ey2Gvg))&pagesize=20&filter=!9YdnSQVoS&page=1&site=stackoverflow';
        $httpBackend.whenGET(url).respond(502,error);
        $httpBackend.whenPOST(config.curlUrl).respond(curl);
        spyOn(util, 'redirect');
        spyOn(util, 'showError').and.callThrough();
        controller();
        $httpBackend.flush();
        expect(util.showError).toHaveBeenCalled();
        expect(util.showError.calls.mostRecent().args[0]).toEqual(error);
    }));


});