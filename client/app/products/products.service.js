'use strict';

angular.module('meanstoreApp')
  .factory('Products', function () {
    var last_id = 5;
    var example_products = [
      { _id: 1, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
      { _id: 2, title: 'Product 2', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
      { _id: 3, title: 'Product 3', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
      { _id: 4, title: 'Product 4', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
      { _id: 5, title: 'Product 5', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor site ament'},
    ];
    
    return {
      // get all products
      query: function() {
        return example_products;
      },
      
      // get specific product
      get: function(params) {
        var result = {};
        angular.forEach(example_products, function(product){
          if (product._id == params.id) {
            return this.product = product;
          }
        }, result);
        return result.product;
      },
      
      // delete product
      delete: function(params) {
        angular.forEach(example_products, function(product, index) {
          if (product._id == params.id) {
            console.log(product, index);
            example_products.splice(index, 1);
            return;
          }
        });
      },
      
      // create new product
      create: function(product) {
        product.id = ++last_id;
        example_products.push(product);
      },
      
      // update product
      update: function(product) {
        var item = this.get(product);
        if(!item) return false;
        
        item.title = product.title;
        item.price = product.price;
        item.quantity = product.quantity;
        item.description = product.description;
        return true;
      }
    };
  });
