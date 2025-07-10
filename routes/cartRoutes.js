const express = require('express');
const router = express.Router();

// Import the cart controller
const cartController = require('../controllers/cartController');

// Define routes and point them to the controller functions
router.get('/:userId', cartController.getCartByUserId);
router.post('/:userId', cartController.addProductToCart);

module.exports = router;