const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    market: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;