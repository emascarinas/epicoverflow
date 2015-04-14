'use strict';

angular.module('epicoverflowApp')
        .controller('QuestionCtrl', function($scope, question, util, config) {
            question.getQuestion().success(function(data) {
                $scope.questionResponse = data.items[0];
                $scope.flag = function(fav) {
                    if (fav) {
                        question.unFlagFavorite().success(function(data) {
                            console.log(data);
                        }).error(function(data) {
                            util.showError(data);
                        });
                    }
                    else {
                        question.flagFavorite().success(function(data) {
                            console.log(data);
                        }).error(function(data) {
                            util.showError(data);
                        });
                    }
                };
                fetch();
            }).error(function(data) {
                util.showError(data);
            });

            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsSmallPerPage;

            $scope.pageChanged = function() {
                fetch();
            };

            function fetch() {
                question.getComments($scope.currentPage, config.itemsSmallPerPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
//                $scope.response = question.getComments($scope.currentPage);
//                $scope.totalItems = $scope.response.total;
            }

        });
