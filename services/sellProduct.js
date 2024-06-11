const db = require("./connect");
const User = require("../models/userModel");

async function sellProduct(userId, product) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found.');
    }

    // Example logic to update the order count
    user.order += 1; // You can customize this logic as needed

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
