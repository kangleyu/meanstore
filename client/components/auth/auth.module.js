'use strict';

angular.module('meanstoreApp.auth', [
  'meanstoreApp.constants',
  'meanstoreApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
