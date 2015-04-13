'use strict';

describe('Controller: Badge', function() {
    var controller;
    beforeEachShared();
    beforeEach(function() {
        controller = function() {
            return $controller('BadgeCtrl', {'$scope': $rootScope});
        };
    });
    afterEachShared();

    it('should fetch successfully', inject(function($timeout, session, getProfile) {
        var x = config.apiUrl + 'users/' + getProfile.items[0].user_id + '/badges?page=1&sort=rank&pagesize=20&filter=!9YdnSQVoS&site=stackoverflow';
        console.log(x);
        $httpBackend.whenGET(x).respond(getProfile);
        controller();
        session.setProfile(getProfile.items[0]);
        $rootScope.fetch();
        $timeout.flush();
        $httpBackend.flush();
        expect($rootScope.response).toEqual(getProfile);
    }));
});