'use strict';

angular.module('meanstoreApp')
  .factory('products', function () {
    return [
      { _id: 1, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
      { _id: 2, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
      { _id: 3, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
      { _id: 4, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
      { _id: 5, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
    ];
  });
