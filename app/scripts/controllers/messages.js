'use strict';

///////////////////////////////////////////////////////////////////
/// SOME DATA
///////////////////////////////////////////////////////////////////

var rahulMessages = [
    {
        subj: "Hello", 
        body: "From: admin\nTo:rahul\nHi, welcome to your account on GGU Messaging Center",
    },
];

var adminMessages = [
    
];

/**
 * @ngdoc function
 * @name gguApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gguApp
 */
angular.module('gguApp')
  .controller('MessagesCtrl', function ($scope, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    //console.log($routeParams);
    $scope.params = $routeParams;
    // set local messages
    if($scope.params.user === 'rahul') {
        $scope.messages = rahulMessages;
    }

    // show admin messages
    else if ($scope.params.user === 'admin') {
        $scope.messages = adminMessages;
    }
    
  });

angular.module('gguApp')
  .controller('SingleMessageCtrl', function ($scope, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    //console.log($routeParams);
    $scope.params = $routeParams;
    // set local messages
    if($scope.params.user === 'rahul') {
        $scope.messages = rahulMessages;
    }

    // show admin messages
    else if ($scope.params.user === 'admin') {
        $scope.messages = adminMessages;
    }
    
  });
