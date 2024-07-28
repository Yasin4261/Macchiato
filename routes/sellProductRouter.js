const express = require('express');
const router = express.Router();
const sellProductController = require('../controllers/sellProductController');

// Ürün satışı yapma
router.post('/orders/:id?', sellProductController.sellProductController);

// Kullanıcıya göre ürünleri getirme
router.get('/:id', sellProductController.getProductsByUserController);

module.exports = router;
