'use strict';
angular.module('epicoverflowApp')
        .controller('QuestionTagsCtrl', function($scope, question, $routeParams, util, config) {
            function fetch() {
                question.getQuestionTags($scope.currentPage, $routeParams.tag).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }
            $scope.maxSize = 2;
            $scope.itemsPerPage = config.itemsPerPage;
            $scope.boundaryLinks = false;
            $scope.rotate = true;
            
            $scope.pageChanged = function() {
                fetch();
            };
            fetch();
        });
