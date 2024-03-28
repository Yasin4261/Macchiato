const express = require("express");
const router = express.Router();

const Caffee = require("../services/sellCaffee");

router.post("/:id/:caffees", async (req, res, next) => {
    try {
        const id = req.params.id;
        const caffees = req.params.caffees;

        const selledCaffee = await Caffee.sellCaffee(id, caffees); 
        
        res.status(200).json(selledCaffee);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
