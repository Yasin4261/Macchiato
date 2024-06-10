const express = require("express");
const router = express.Router();

const Product = require("../services/sellProduct");



exports.sellProduct = async (req, res) => {
    try {
    const { id, product } = req.params;
    const productList = product.split(',');

    const results = [];
    for (const prod of productList) {
        const result = await Product.sellProduct(id, prod);
        results.push(result);
    }

    res.status(200).json({
        message: 'Products processed successfully',
        id: id,
        products: productList,
        results: results,
    });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};