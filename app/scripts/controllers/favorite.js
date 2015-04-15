'use strict';
angular.module('epicoverflowApp')
        .controller('FavoriteCtrl', function($scope, user, config, util, $timeout) {
            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsPerPage;
            $scope.boundaryLinks = true;
            $scope.rotate = false;
            
            $scope.fetch = function() {
                $timeout(function() {
                    fetch();
                });
            };
            $scope.pageChanged = function() {
                fetch();
            };
            function fetch() {
                user.getFavorites($scope.currentPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }
        });
