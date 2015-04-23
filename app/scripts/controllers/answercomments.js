'use strict';
angular.module('epicoverflowApp')
        .controller('AnswerCommentsCtrl', function ($scope, question, config, util, $timeout) {
            function fetch() {
                $timeout(function () {
                    question.getAnswerComments($scope.answer.answer_id, $scope.currentPage, config.itemsSmallPerPage).success(function (data) { // jshint ignore:line
                        $scope.response = data;
                        $scope.totalItems = data.total;
                    }).error(function (data) {
                        util.showError(data);
                    });
                });
            }

            $scope.itemsPerPage = config.itemsSmallPerPage;
            $scope.boundaryLinks = false;
            $scope.rotate = true;
            
            $scope.pageChanged = function () {
                fetch();
            };
            fetch();
        });
