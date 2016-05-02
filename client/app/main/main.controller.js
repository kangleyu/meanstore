'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Products) {
    $scope.products = Products.query().slice(3);
  }
}

angular.module('meanstoreApp')
  .controller('MainController', MainController);
})();
