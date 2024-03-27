const express = require("express");
const router = express.Router();

const service = require("../services/sellCaffe");


router.post("/:id", sell);