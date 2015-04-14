'use strict';
angular.module('epicoverflowApp')
        .factory('question', function ($http, config, util, $routeParams) {
            return {
                getQuestions: function (page, sort, order, tag) {
                    var qstr = {};
                    qstr.page = page;
                    if (undefined !== tag) {
                        qstr.tagged = tag;
                    }
                    if ('' !== sort) {
                        qstr.sort = sort;
                    }
                    if ('' !== order) {
                        qstr.order = order;
                    }
                    var param = util.getParam(config.questionBase, '?', qstr);
                    return $http.get(param);
                },
                getQuestion: function () {
                    var param;
                    if (util.isAuth()) {
                        param = util.getParam(config.questionBase, $routeParams.id + '?', {filter: '!b0OfMv1dP-ecRx'});
                    } else {
                        param = util.getParam(config.questionBase, $routeParams.id + '?', {filter: '!-*f(6rkvDeNh'});
                    }
                    return $http.get(param);
                },
                getComments: function (page, itemsPerPage) {
                    var param = util.getParam(config.questionBase, $routeParams.id + '/comments?', {pagesize: itemsPerPage, page: page, order: 'asc', filter: '!-*f(6sexcV94'});
                    return $http.get(param);
                },
                getAnswers: function (page) {
                    var param = util.getParam(config.questionBase, $routeParams.id + '/answers?', {page: page, order: 'desc', sort: 'votes', filter: '!-*f(6tIDgtXe'});
                    return $http.get(param);
                },
                getAnswerComments: function (answerId, page, itemsPerPage) {
                    var param = util.getParam(config.answerBase, answerId + '/comments?', {pagesize: itemsPerPage, page: page, order: 'asc', filter: '!-*f(6tIDgtXe'});
                    return $http.get(param);
                },
                flagFavorite: function () {
                    return util.postAuth(config.questionBase + '/' + $routeParams.id + '/favorite', {filter: '!9YdnS9*GS'});
                },
                unFlagFavorite: function () {
                    return util.postAuth(config.questionBase + '/' + $routeParams.id + '/favorite/undo', {filter: '!9YdnS9*GS'});
                }
            };
        });
