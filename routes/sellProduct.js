const express = require("express");
const router = express.Router();

const sellProductController = require("../controllers/sellProductController");


router.post("/:id/:product", sellProductController.sellProduct);


module.exports = router;