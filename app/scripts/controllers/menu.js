'use strict';
angular.module('epicoverflowApp')
        .controller('MenuCtrl', function($scope, $location) {
            $scope.goHome = function() {
                $location.path('#/');
            };
        });
