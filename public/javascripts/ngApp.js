/**
 * Created by HUQ on 9/22/15.
 */
"use strict";

var ngApp = angular.module('haven-sent', ['ui.router']);
console.log("ngApp is running");

ngApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('find', {
        url: '/find',
        templateUrl: 'templates/find.html',
        controller: 'FindCtrl'
      })
      .state('input', {
        url: '/input',
        templateUrl: 'templates/input.html',
        controller: "InputCtrl"
      })
      .state('match', {
        url: '/match',
        templateUrl: 'templates/match.html',
        controller: "MatchCtrl"
      });
  //.state('friend', {
  //      abstract: true,
  //      templateUrl: 'views/friends/friends.html'
  //    });
  //    .state('friend.add', {
  //      templateUrl: 'views/friends/add.html'
  //    })
  //.state('friends.find', {
  //      templateUrl: 'views/friends/find.html'
  //    })

});


ngApp.controller('FindCtrl', function($scope, $http) {
  $scope.title = "Find a friend";
  $scope.message = "Fields with an asterisk are required";

  $scope.findFriend = function() {
    console.log("Find that Friend!");
    $http.get('http://localhost:3000/friends')
    .then(function(data) {
          $scope.dump = data;
        })
    .catch(function(error) {
          console.log(error);
        });

  };

});

ngApp.controller('InputCtrl', function($scope, $http) {
  $scope.title = "Add a friend";
  $scope.message = "Fields with an asterisk are required";

  $scope.addFriend = function () {
    console.log("add that friend!");
    $http.post('http://localhost:3000/friends', $scope.friend)
    .then(function(data) {
          $scope.dump = data;
        })
    .catch(function(error){
          $scope.dump = error;
        })
  };


});

ngApp.controller('MatchCtrl', function($scope, $http) {
  $scope.title = "Make a Match!";

  $scope.addFriend = function () {
    console.log("make that match!");
    $http.post('http://localhost:3000/friends', $scope.friend)
        .then(function(data) {
          $scope.dump = data;
        })
        .catch(function(error){
          $scope.dump = error;
        })
  };


});


//ngApp.service('Family', function($http, constants) {
//  let api = constants.apiUrl;
//  this.index = function{$http.get()}
//} )
//    .config(function($stateProvider) {
//
//    })


  //  $scope.addTickerToTracked = (ticker) => {
  //    console.log(ticker);
  //    Tracked.add(ticker);//.then((data)=>console.log('data', data));
  //  };
  //
  //  $scope.tickerFinder = "";
  //
  //  $scope.isAddingTicker = () => {
  //    return $scope.displayedTicker !== undefined && ($scope.tickerFinder ===  "");
  //  };
  //
  //
  //  $scope.tickerDisplay = (tickerData) => {
  //    $scope.displayedTicker = tickerData;
  //    $scope.tickerFinder = "";
  //  };
  //
  //  $scope.tickerData = {Symbol: ""};
  //
  //
  //  $scope.searchTicker = () => {
  //
  //    var ticker = $scope.tickerFinder;
  //    ticker = ticker.toUpperCase();
  //    var url = "http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input=" + ticker + "&callback=JSON_CALLBACK";
  //    $http.jsonp(url).success((data) => {
  //      console.log("searchies!!!");
  //      $scope.tickerData = data;
  //    });
  //  };
  //
  //}));

