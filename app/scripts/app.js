'use strict';
angular
        .module('epicoverflowApp', [
            'ngResource',
            'ngRoute',
            'ngAnimate',
            'ui.bootstrap',
            'angular-loading-bar'
        ])
        .constant('config', {
            clientId: '4669',
            clientSecret: 'xSxTseAuN7MJjpmoz8FgrQ((',
            key: 'kbHcPnT0zVHBHC0rFcfyFg((',
            scope: 'write_access,private_info',
            redirectUri: 'http://emascarinas.github.io/',
            uriBase: 'epicoverflow/',
            //redirectUri: 'http://localhost:9000/',
            //redirectUri: 'http://dunggoanan.com:9000/',
            oathUrl: 'https://stackexchange.com/oauth',
            curlUrl: 'http://dunggoanan.com/curl.php',
            oathPostUrl: 'https://stackexchange.com/oauth/access_token',
            apiUrl: 'https://api.stackexchange.com/2.2/',
            site: 'stackoverflow',
            itemsPerPage: 20,
            itemsSmallPerPage: 5,
            pageMaxSize: 5, //for navigator number of page number shown
            filterAddTotal: '!9YdnSQVoS',
            userBase: 'users',
            questionBase: 'questions',
            meBase: 'me',
            tagBase: 'tags',
            answerBase: 'answers'
        })
        .config(function($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                    })
                    .when('/questions', {
                        templateUrl: 'views/questions.html',
                        controller: 'QuestionsCtrl'
                    })
                    .when('/auth', {
                        controller: 'AuthCtrl'
                    })
                    .when('/question', {
                        templateUrl: 'views/question.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });


