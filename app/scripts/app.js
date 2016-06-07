'use strict';

/**
 * @ngdoc overview
 * @name gguApp
 * @description
 * # gguApp
 *
 * Main module of the application.
 */
angular
  .module('gguApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/messages/', {
        templateUrl: 'views/showAllUsers.html',
      })
      .when('/messages/:user', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl',
      })
      .when('/messages/:user/:messageIx', {
        templateUrl: 'views/message.html',
        controller: 'SingleMessageCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
