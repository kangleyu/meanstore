/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Product from '../api/product/product.model';

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });

Product.find({}).removeAsync()
  .then(function () {
    Product.createAsync({
      title: 'MEAN eCommerce Book',
      imageUrl: '/assets/uploads/meanbook.jpg',
      price: 25,
      stock: 250,
      description: 'Build a powerful ecommerce...'
    }, {
      title: 'tshirt',
      imageUrl: '/assets/uploads/meantshirt.jpg',
      price: 15,
      stock: 100,
      description: 'T shirt with MEAN logo'
    }, {
      title: 'coffee mug',
      imageUrl: '/assets/uploads/meanmug.jpg',
      price: 8,
      stock: 50,
      description: 'convert coffee into MEAN code'
    })
    .then(function () {
      console.log('finished populating products');
    });
  });
