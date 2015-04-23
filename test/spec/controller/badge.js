'use strict';

describe('Controller: Badge', function () {
    var controller;
    beforeEachShared();
    beforeEach(function () {
        controller = function () {
            return $controller('BadgeCtrl', {'$scope': $rootScope});
        };
    });
    afterEachShared();

    it('should fetch successfully', inject(function ($timeout, session, getProfile) {
        var url = config.apiUrl + 'users/' + getProfile.items[0].user_id + '/badges?page=1&sort=rank&pagesize=20&filter=!9YdnSQVoS&site=stackoverflow';
        $httpBackend.whenGET(url).respond(getProfile);
        controller();
        session.setProfile(getProfile.items[0]);
        $rootScope.fetch();
        $timeout.flush();
        $httpBackend.flush();
        expect($rootScope.response).toEqual(getProfile);
    }));
    
    it('should fetch with error', inject(function ($timeout, session, getProfile, error, util) {
        var url = config.apiUrl + 'users/' + getProfile.items[0].user_id + '/badges?page=1&sort=rank&pagesize=20&filter=!9YdnSQVoS&site=stackoverflow';
        $httpBackend.whenGET(url).respond(502,error);
        spyOn(util, 'showError').and.callThrough();
        controller();
        session.setProfile(getProfile.items[0]);
        $rootScope.fetch();
        $timeout.flush();
        $httpBackend.flush();
        expect(util.showError).toHaveBeenCalled();
        expect(util.showError.calls.mostRecent().args[0]).toEqual(error);
    }));

});