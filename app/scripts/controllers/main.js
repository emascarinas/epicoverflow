'use strict';

angular.module('epicoverflowApp')
        .controller('MainCtrl', function($scope, session, config, user, $routeParams, $location, util) {
            var re = new RegExp('code=(.*)#\/');
            var code = $location.absUrl().match(re);
            $scope.session = session;
            function fetchById(id) {
                user.getProfile(id).success(function(data) {
                    session.setProfile(data.items[0]);
                }).error(function(data) {
                    util.showError(data);
                });
            }
            function fetch() {
                if (undefined === session.getProfile()) {
                    user.getProfile().success(function(data) {
                        session.setProfile(data.items[0]);
                    }).error(function(data) {
                        util.showError(data);
                    });
                }
                else { // for bypass
                    fetchById(session.getProfile().user_id); // jshint ignore:line
                }
            }
            if (undefined !== $routeParams.id) { //ramdom id 1875004 - bypass authentication to impersonate other users
                fetchById($routeParams.id);
            }
            else {
                if (undefined === session.getProfile() && null === code) {
                    var url = config.oathUrl + '?scope=' + config.scope + '&client_id=' + config.clientId + '&redirect_uri=' + config.redirectUri + config.uriBase;
                    util.redirect(url);
                }
                if (null !== code) {
                    session.setCode(code[1]);
                }
                if (undefined === session.getProfile()) { // get access token for {me}
                    user.getCodePost().success(function(data) {
                        session.setAccessToken(data.split('&')[0].split('=')[1]);
                        fetch();
                    }).error(function(data) {
                        util.showError(data);
                    });
                }
                else {
                    fetch();
                }
            }

        });
