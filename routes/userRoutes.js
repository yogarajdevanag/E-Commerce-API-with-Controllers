const express = require('express');
const router = express.Router();

// Import the user controller
const userController = require('../controllers/userController');

// Define routes and point them to the controller functions
router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.get('/:id', userController.getUserById);

module.exports = router;