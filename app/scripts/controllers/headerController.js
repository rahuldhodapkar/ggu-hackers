'use strict';

/**
 * @ngdoc function
 * @name gguApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gguApp
 */
angular.module('gguApp')
  .controller('HeaderController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });
