const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    order: { type: Number, required: true },
    userId: { typre: Schema.Types.ObjectId, ref: 'User', required: ture },
});

productSchema.static.sellProduct = async function (userId, productName) {
    const orderValue = 1;

    const product = new this({
        name: productName,
        price: 10,
        order: orderValue,
        userId: mongoose.Types.ObjectId(userId)
    });
    return await product.save();
}


const Product = mongoose.model('Product', productSchema);

module.exports = Product;