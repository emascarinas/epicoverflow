'use strict';
angular.module('epicoverflowApp')
        .controller('AnswersCtrl', function($scope, question, config, util) {
            function fetch() {
                question.getAnswers($scope.currentPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }

            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsPerPage;
            $scope.boundaryLinks = true;
            $scope.rotate = false;
            
            $scope.pageChanged = function() {
                fetch();
            };
            fetch();
        });
