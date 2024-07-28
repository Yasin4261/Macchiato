const Product = require("../models/product");
const User = require("../models/userModel");

async function sellProduct(userId, productName) {
  try {
    if (userId) {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found.');
      }

      if (user.order + 1 > 6) {
        user.freeCaffee += 1;
        user.order = 0;
      } else {
        user.order += 1;
      }

      await user.save();
      console.log("New coffee order: ", user);
    }

    const product = await Product.sellProduct(userId, productName);
    return product;
  } catch (error) {
    console.error("Error processing order:", error.message);
    throw error;
  }
}

module.exports = {
  sellProduct,
};
