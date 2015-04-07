'use strict';

/**
 * @ngdoc function
 * @name epicoverflowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the epicoverflowApp
 */
angular.module('epicoverflowApp')
        .controller('MainCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.auth = function () {
                var clientId = '4593';
                var scope = 'read_inbox,write_access,private_info';
                var redirectUri = 'http://dunggoanan.com/emem/';
                var url = 'https://stackexchange.com/oauth?scope=' + scope + '&client_id=' + clientId + '&redirect_uri=' + redirectUri;
                window.location.replace(url);
                
            };
        });
