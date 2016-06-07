'use strict';

///////////////////////////////////////////////////////////////////
/// SOME DATA
///////////////////////////////////////////////////////////////////

var rahulMessages = [
    {
        subj: "Hello", 
        body: "From: admin\nTo:rahul\nHi, welcome to your account on GGU Messaging Center",
    },
    {
        subj: "Study for Computer Music?", 
        body: "From: junesoo\nTo:rahul\nRahul, want to go study for computer music together?",
    },
    {
        subj: "Homework", 
        body: "From: mark\nTo:rahul\nRahul, is your project ready for the gala tonight?",
    },
    {
        subj: "Security advice", 
        body: "From: admin\nTo:rahul\nNever send your password in an email, we have had some people\ngetting hacked recently",
    },
    {
        subj: "Gym Later?", 
        body: "From: maria\nTo:rahul\nmeet me at the gym at 8.00",
    },
    {
        subj: "Study for Computer Music?", 
        body: "From: junesoo\nTo:rahul\nRahul, want to go study for computer music together?",
    },  
];

var adminMessages = [
    {
        subj: "Invitation to Gala",
        body: "From:mark\nTo:admin\nDear GGU admin,\nthe gala will be held tonight in the library at 10.00",
        
    },
    {
        subj: "Password Reset", 
        body: "From: junesoo\nTo:admin\nadmin, can you please reset my password to be \"ABC123\"? \nI like to use that for all of my passwords",
    },
]

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
