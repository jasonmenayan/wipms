angular.module('wipms', ['itemController', 'ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'itemController'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'itemController'
      })
      .when('/retrieve', {
        templateUrl: 'views/retrieve.html',
        controller: 'itemController'
      })
      .when('/locDrilldown', {
        templateUrl: 'views/locDrilldown.html',
        controller: 'itemController'
      })
      .when('/locStored', {
        templateUrl: 'views/locStored.html',
        controller: 'itemController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
