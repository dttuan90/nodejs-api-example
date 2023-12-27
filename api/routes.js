'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');
  var accountsCtrl = require('./controllers/AccountsController');
  var carsCtrl = require('./controllers/CarsController');

  // todoList Routes
  app.route('/cars')
    .get(carsCtrl.getAll);

    app.route('/cars/:_id')
    .get(carsCtrl.get);

    app.route('/accounts')
    .get(accountsCtrl.getAll);

    app.route('/accounts/:_id')
    .get(accountsCtrl.get);

    app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.store);
    
  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
};
