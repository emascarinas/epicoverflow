'use strict';

angular.module('epicoverflowApp')
        .controller('QuestionCtrl', function($scope, question, util, config) {
            question.getQuestion().success(function(data) {
                $scope.questionResponse = data.items[0];
                fetch();
            }).error(function(data) {
                util.showError(data);
            });
//            $scope.questionResponse = question.getQuestion().items[0];


            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsSmallPerPage;

            $scope.pageChanged = function() {
                fetch();
            };
            
            function fetch() {
                question.getComments($scope.currentPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
//                $scope.response = question.getComments($scope.currentPage);
//                $scope.totalItems = $scope.response.total;
            }

        });
