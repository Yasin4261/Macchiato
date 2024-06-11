const sellProductService = require('../services/sellProduct');

exports.sellProduct = async (req, res) => {
  try {
    const { id, product } = req.params;
    const productList = product.split(',');

    // Process each product individually
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

exports.getProductsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ userId: id });

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
