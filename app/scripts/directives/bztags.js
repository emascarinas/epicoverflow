'use strict';

angular.module('epicoverflowApp')
        .directive('bzTags', function() {
            return {
                templateUrl: 'views/tags.html',
                restrict: 'E',
                transclude: true,
            };
        });
