const mongoose = require('mongoose');

const ethereumPriceSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    timestamp: { type: Date, default: Date.now },
});

const EthereumPrice = mongoose.model('EthereumPrice', ethereumPriceSchema);

module.exports = EthereumPrice;
