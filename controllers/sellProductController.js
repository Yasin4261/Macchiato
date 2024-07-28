const sellProductService = require('../services/sellProductService');

exports.sellProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const productList = name.split(',');

    const results = [];
    for (const prod of productList) {
      const result = await sellProductService.sellProduct(id, prod);
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
      error: error.message || 'An error occurred while processing products',
    });
  }
};


exports.getProductsByUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await sellProductService.find({ userId: id });

    res.status(200).json({
      message: 'Products fetched successfully',
      products: products,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || 'An error occurred while fetching products',
    });
  }
};
