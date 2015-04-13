'use strict';
/* jshint ignore:start */
angular.module('epicoverflowApp')
        .factory('user', function($http, config, session, util) {
            return {
                getCodePost: function() {
                    var url = config.oathPostUrl;
                    var param = 'client_id=' + config.clientId + '&client_secret=' + config.clientSecret + '&code=' + session.getCode() + '&redirect_uri=' + config.redirectUri;
                    return $http.post(config.curlUrl, {url: url, param: param});
                },
                getProfile: function(id) {
                    var param = util.getParam(undefined === id ? config.meBase : config.userBase,'?',{},util.isAuth(),id);
                    return $http.get(param);
                },
                getBadges: function(page) {
                    var param = util.getParam( util.isAuth() ? config.meBase : config.userBase,'/badges?',{page: page, sort: 'rank'},util.isAuth());
                    return $http.get(param);
                },
                getTimeline: function(page) {
                    var param = util.getParam(util.isAuth() ? config.meBase : config.userBase,'/timeline?',{page: page}, util.isAuth());
                    return $http.get(param);
                },
                getFavorites: function(page) {
                    var param = util.getParam(util.isAuth() ? config.meBase : config.userBase,'/favorites?',{page: page}, util.isAuth());
                    return $http.get(param);
                },
                getTags: function(page) {
                    var param = util.getParam(util.isAuth() ? config.meBase : config.userBase,'/tags?',{page: page}, util.isAuth());
                    return $http.get(param);
                }
            };
        });
/* jshint ignore:end */
