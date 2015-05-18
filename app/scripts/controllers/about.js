'use strict';

/**
 * @ngdoc function
 * @name yeoman3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeoman3App
 */
angular.module('yeoman3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
