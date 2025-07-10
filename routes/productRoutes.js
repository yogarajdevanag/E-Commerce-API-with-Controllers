const express = require('express');
const router = express.Router();

// 1. Import the controller functions
// The '../' is important because we are moving up one directory from 'routes'
// to the project root, then down into 'controllers'.
const productController = require('../controllers/productController');

// 2. Define the routes and point them to the controller functions
// This file is now much cleaner and easier to read!
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.get('/:id', productController.getProductById);

// 3. Export the router
module.exports = router;