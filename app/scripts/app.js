'use strict';

angular.module('bdApp', ['ui.router', 'ngResource'])

    .config (function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state ('app', {
                url: '/',
                views:{
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'IndexController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })

            .state ('app.signup', {
                url: 'signup',
                views: {
                    'content@': {
                        templateUrl: 'views/signup.html',
                        controller: 'SignupController'

                    }
                }
            })

            .state ('app.login', {
                url: 'login',
                views: {
                    'content@': {
                        templateUrl: 'views/login.html',
                        controller: 'LoginController'

                    }
                }
            })


        ;

        $urlRouterProvider.otherwise('/');
    })

;