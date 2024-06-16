const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

router.get("/:id/get_user_orders",userController.getOrdersAmount);

module.exports = router;