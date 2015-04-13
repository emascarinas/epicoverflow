'use strict';

angular.module('epicoverflowApp')
        .directive('bzPaginator', function() {
            return {
                templateUrl: 'views/paginator.html',
                restrict: 'E'
            };
        });
