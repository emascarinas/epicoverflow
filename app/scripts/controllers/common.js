'use strict';
angular.module('epicoverflowApp')
        .controller('CommonCtrl', function ($scope, $location, config) {
            $scope.goHome = function () {
                $location.path('#/');
            };
            $scope.goSearch = function () {
                $location.search('tag', $scope.tag);
                $location.path('questions');
            };
            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsPerPage;
            $scope.boundaryLinks = true;
            $scope.rotate = false;

        });
