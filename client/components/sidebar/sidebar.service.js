'use strict';

angular.module('meanstoreApp')
  .factory('Catalog', function ($resource) {
    return $resource('/api/catalogs/:id');
  });