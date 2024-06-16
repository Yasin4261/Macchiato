const express = require('express');
const router = express.Router();
const sellProductController = require('../controllers/sellProductController');

// Define the POST route
router.post('/:id/:product', sellProductController.sellProductController);

// Define the GET route
router.get('/:id', sellProductController.getProductsByUserController);

module.exports = router;
