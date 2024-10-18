const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Transaction', transactionSchema);
