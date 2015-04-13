'use strict';
angular.module('epicoverflowApp')
        .controller('AnswersCtrl', function($scope, question, config, util) {
            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsPerPage;
            $scope.pageChanged = function() {
                fetch();
            };
            fetch();
            function fetch() {
                question.getAnswers($scope.currentPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
//                    $scope.response = question.getAnswers($scope.currentPage);
                   // $scope.totalItems = $scope.response.total;
            }
        });
