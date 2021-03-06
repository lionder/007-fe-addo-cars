'use strict';

angular.
  module('carsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/cars', {
          template: '<car-list></car-list>'
        }).
        otherwise('/cars');
    }
  ]);
