const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    order: { type: Number, required: true },
    userId: { typre: Schema.Types.ObjectId, ref: 'User', required: ture },
});




const Product = mongoose.model('Product', productSchema);

module.exports = Product;