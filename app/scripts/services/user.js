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
                    var param = util.getParam(undefined === id ? config.meBase : config.userBase,'?',{},id);
                    return $http.get(param);
                },
                getBadges: function(page) {
                    var param = util.getParam(undefined === session.getAccessToken() ? config.userBase : config.meBase,'/badges?',{page: page, sort: 'rank'});
                    return $http.get(param);
                },
                getTimeline: function(page) {
                    var param = util.getParam(undefined === session.getAccessToken() ? config.userBase : config.meBase,'/timeline?',{page: page});
                    return $http.get(param);
                },
                getFavorites: function(page) {
                    var param = util.getParam(undefined === session.getAccessToken() ? config.userBase : config.meBase,'/favorites?',{page: page});
                    return $http.get(param);
                },
                getTags: function(page) {
                    var param = util.getParam(undefined === session.getAccessToken() ? config.userBase : config.meBase,'/tags?',{page: page});
                    return $http.get(param);
                }
            };
        });
/* jshint ignore:end */
