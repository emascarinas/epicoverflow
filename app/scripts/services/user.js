'use strict';
/* jshint ignore:start */
angular.module('epicoverflowApp')
        .factory('user', function($http, config, session, util) {
            return {
                getCodePost: function() {
                    var url = config.oathPostUrl;
                    var param = 'client_id=' + config.clientId + '&client_secret=' + config.clientSecret + '&code=' + session.getCode() + '&redirect_uri=' + config.redirectUri + config.uriBase;
                    return $http.post(config.curlUrl, {url: url, param: param});
                },
                getProfile: function(id) {
                    var param = util.getParam(undefined === id ? config.meBase : config.userBase,'?',{},id);
                    return $http.get(param);
                },
                getBadges: function(page) {
                    var param = util.getParam(config.userBase,'/badges?',{page: page, sort: 'rank'});
                    return $http.get(param);
                },
                getTimeline: function(page) {
                    var param = util.getParam(config.userBase,'/timeline?',{page: page});
                    return $http.get(param);
                },
                getFavorites: function(page) {
                    var param = util.getParam(config.userBase,'/favorites?',{page: page});
                    return $http.get(param);
                },
                getTags: function(page) {
                    var param = util.getParam(config.userBase,'/tags?',{page: page});
                    return $http.get(param);
                }
            };
        });
/* jshint ignore:end */
