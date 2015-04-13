'use strict';

angular.module('epicoverflowApp')
        .filter('bzSanitize', ['$sce', function($sce) {
                return function(htmlCode) {
                    return $sce.trustAsHtml(htmlCode);
                };
            }]);
