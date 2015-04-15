'use strict';
angular.module('epicoverflowApp')
        .controller('MenuCtrl', function($scope, $location) {
            $scope.goHome = function() {
                $location.path('#/');
            };
	    $scope.goSearch = function() {
				$location.search('tag', $scope.tag);
                $location.path('questions');
            };
        });
