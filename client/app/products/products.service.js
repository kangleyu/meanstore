'use strict';

angular.module('meanstoreApp')
  .factory('Products', function ($resource) {
    return $resource('/api/products/:id', null, {
      'update': { method: 'PUT' }
    });
  });
