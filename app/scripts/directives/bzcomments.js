'use strict';
angular.module('epicoverflowApp')
        .directive('bzComments', function() {
            return {
                templateUrl: 'views/comments.html',
                restrict: 'E',
                transclude: true,
            };
        });
