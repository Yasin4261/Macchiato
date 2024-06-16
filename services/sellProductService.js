const User = require("../models/userModel");

async function sellProduct(userId, product) {
  try {
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
    return user;
  } catch (error) {
    console.error("Error processing order:", error.message);
    throw error; // Ensure errors are propagated to the controller
  }
}

module.exports = {
  sellProduct: sellProduct,
};
