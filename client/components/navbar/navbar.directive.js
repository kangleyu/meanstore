'use strict';

angular.module('meanstoreApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarCtrl',
    controllerAs: 'nav'
  }));
