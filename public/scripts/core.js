angular.module('wipms', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'mainController'
      })
      .when('/retrieve', {
        templateUrl: 'views/retrieve.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
