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
            clientId: '4593',
            clientSecret: 'DivVyyyF1QH5k5p2jswIlw((',
            key: 'Vra)L3fu19Zuq8IW7XyUMw((',
            scope: 'read_inbox,write_access,private_info',
            //redirectUri: 'http://dunggoanan.com/emem/',
            redirectUri: 'http://dunggoanan.com:9000/',
            oathUrl: 'https://stackexchange.com/oauth',
            curlUrl: 'http://dunggoanan.com/curl.php',
            oathPostUrl: 'https://stackexchange.com/oauth/access_token',
            apiUrl: 'https://api.stackexchange.com/2.2/',
            site: 'stackoverflow',
            itemsPerPage: 20,
            itemsSmallPerPage: 5,
            pageMaxSize: 5,
            filterAddTotal: '!9YdnSQVoS',
            userBase: 'users',
            questionBase: 'questions',
            meBase: 'me',
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
            //$locationProvider.html5Mode(true);
        });


