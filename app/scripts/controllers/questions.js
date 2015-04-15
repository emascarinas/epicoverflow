'use strict';
angular.module('epicoverflowApp')
        .controller('QuestionsCtrl', function($scope, question, config, $routeParams, util) {
            function fetch() {
                question.getQuestions($scope.currentPage, $scope.currentSort, $scope.currentOrder, $routeParams.tag).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }
            $scope.currentPage = 1;
            $scope.currentOrder = '';
            $scope.currentSort = '';
            $scope.tagged = undefined === $routeParams.tag ? '' : ' for ' + $routeParams.tag;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsPerPage;
            $scope.boundaryLinks = true;
            $scope.rotate = false;
            
            $scope.orderList = [{display:'Default',value:''},{display:'Desc',value:'desc'},{display:'Asc',value:'asc'}];
            $scope.sortList = [{display:'Default',value:''},
                {display:'Activity',value:'activity'},
                {display:'Votes',value:'votes'},
                {display:'Creation',value:'creation'},
                {display:'Hot',value:'hot'},
                {display:'Week',value:'week'},
                {display:'Month',value:'month'}
            ];
            $scope.pageChanged = function() {
                fetch();
            };
            $scope.setSort = function(sort){
                $scope.currentSort = sort;
                fetch();
            };
            $scope.setOrder = function(order){
                $scope.currentOrder = order;
                fetch();
            };
            fetch();
        });
