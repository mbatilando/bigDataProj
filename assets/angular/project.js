angular.module('project', ['mongolab']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'index.html'}).
      when('/results', {controller:EditCtrl, templateUrl:'results.html'}).
      otherwise({redirectTo:'/'});
  });