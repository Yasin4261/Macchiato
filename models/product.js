const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    order: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

productSchema.statics.sellProduct = async function (userId, productName) {
    const orderValue = 1;

    const product = new this({
        name: productName,
        price: 10,
        order: orderValue,
        userId: userId ? new mongoose.Types.ObjectId(userId) : undefined,
    });
    return await product.save();
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
