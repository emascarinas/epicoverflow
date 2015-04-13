'use strict';
angular.module('epicoverflowApp')
        .controller('AnswerCommentsCtrl', function($scope, question, config, util, $attrs) {
            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsSmallPerPage;
            $scope.pageChanged = function() {
                fetch();
            };
            fetch();
            function fetch() {
                question.getAnswerComments($attrs.answerId, $scope.currentPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
//                    $scope.response = question.getAnswerComments($attrs.answerId,$scope.currentPage);
//                    $scope.totalItems = $scope.response.total; 

            }
        });
