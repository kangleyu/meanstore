'use strict';

angular.module('meanstoreApp')
  .controller('ProductsCtrl', function ($scope, Products) {
    $scope.products = Products;
  });
