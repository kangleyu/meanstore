'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, products) {
    $scope.products = products.query().slice(3);
  }
}

angular.module('meanstoreApp')
  .controller('MainController', MainController);
})();
