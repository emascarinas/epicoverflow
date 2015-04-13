'use strict';
angular.module('epicoverflowApp')
        .controller('QuestionsCtrl', function($scope, question, config, $routeParams, util) {
            function fetch() {
                question.getQuestions($scope.currentPage, $routeParams.tag).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }

            $scope.currentPage = 1;
            $scope.tagged = undefined === $routeParams.tag ? '' : ' for ' + $routeParams.tag;
            fetch();
            $scope.pageChanged = function() {
                fetch();
            };
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsPerPage;
        });
