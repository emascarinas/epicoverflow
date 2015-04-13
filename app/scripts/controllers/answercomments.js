'use strict';
angular.module('epicoverflowApp')
        .controller('AnswerCommentsCtrl', function($scope, question, config, util) {
            function fetch() {
                question.getAnswerComments($scope.answer.answer_id, $scope.currentPage, config.itemsSmallPerPage).success(function(data) { // jshint ignore:line
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }
            
            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsSmallPerPage;
            $scope.pageChanged = function() {
                fetch();
            };
            fetch();
        });
