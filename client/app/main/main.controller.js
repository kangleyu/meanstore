'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Products) {
    $scope.products = Products.query();
  }
}

angular.module('meanstoreApp')
  .controller('MainController', MainController);
})();
