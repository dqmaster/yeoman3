'use strict';

/**
 * @ngdoc function
 * @name yeoman3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeoman3App
 */
angular.module('yeoman3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
