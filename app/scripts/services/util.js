'use strict';

angular.module('epicoverflowApp')
        .service('util', function(config, $modal, session) {
            this.getParam = function(type, resource, param, id) {
                var path = config.apiUrl + type + '/';
                switch (type) {
                    case 'me':
                        param.key = config.key;
                        param.access_token = session.getAccessToken(); // jshint ignore:line    
                        path += resource;
                        break;
                    case 'questions':
                        path += resource;
                        break;
                    case 'answers':
                        path += resource;
                        break;
                    default:
                        var uid = undefined === id ? session.getProfile().user_id : id; // jshint ignore:line
                        path += uid + resource;
                }
                param.pagesize = undefined === param.pagesize ? config.itemsPerPage : param.pagesize;
                param.filter = undefined === param.filter ? config.filterAddTotal : param.filter;
                param.page = undefined === param.page ? 1 : param.page;
                param.site = config.site;
                return path + $.param(param); // jshint ignore:line
            };
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
        });
