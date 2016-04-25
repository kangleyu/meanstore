'use strict';

angular.module('meanstoreApp')
  .controller('ProductsCtrl', function ($scope, products) {
    $scope.products = products;
  });
