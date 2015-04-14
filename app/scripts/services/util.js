'use strict';

angular.module('epicoverflowApp')
        .service('util', function(config, $modal, session) {
            this.getParam = function(type, resource, param, isAuth, id) {
                var path = config.apiUrl + type + ('me' === type ? '' : '/');
                switch (type) {
                    case 'users':
                        var uid = undefined === id ? session.getProfile().user_id : id; // jshint ignore:line
                        path += uid + resource;
                        break;
                    default:
                        path += resource;
                }
                if (true === isAuth) {
                    param.key = config.key;
                    param.access_token = session.getAccessToken(); // jshint ignore:line    
                }
                param.pagesize = undefined === param.pagesize ? config.itemsPerPage : param.pagesize;
                param.filter = undefined === param.filter ? config.filterAddTotal : param.filter;
                param.page = undefined === param.page ? 1 : param.page;
                param.site = config.site;
                return path + $.param(param); // jshint ignore:line
            };
//            this.getPostAuth = function(url, param) {
//                param.key = config.key;
//                param.access_token = session.getAccessToken(); // jshint ignore:line    
//                return $http.post(url, JSON.stringify(param)); 
//            };
            this.showError = function(err) {
                $modal.open({
                    templateUrl: 'erroModal.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'sm',
                    resolve: {
                        error: function() {
                            return err;
                        }
                    }
                });
            };
            this.isAuth = function() {
                return undefined !== session.getAccessToken();
            };
        });
