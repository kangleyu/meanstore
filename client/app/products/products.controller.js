'use strict';

angular.module('meanstoreApp')
  .controller('ProductsCtrl', function ($scope, products) {
    $scope.products = products.query();
  })
  .controller('ProductViewCtrl', function($scope, $state, $stateParams, products){
    $scope.product = products.get({ id: $stateParams.id });
    $scope.deleteProduct = function () {
      products.delete($scope.product);
      $state.go('products');
    }
  })
  .controller('ProductNewCtrl', function($scope, $state, products){
    $scope.product = {};
    $scope.addProduct = function (product) {
      products.create($scope.product);
      $state.go('products');
    }
  })
  .controller('ProductEditCtrl', function($scope, $state, $stateParams, products){
    $scope.product = products.get({ id: $stateParams.id });
    $scope.editProduct = function (product) {
      products.update($scope.product);
      $state.go('products');
    }
  });
