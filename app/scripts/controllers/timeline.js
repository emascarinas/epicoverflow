'use strict';
angular.module('epicoverflowApp')
        .controller('TimelineCtrl', function($scope, user, config, util, $timeout) {
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
                user.getTimeline($scope.currentPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }
        });
