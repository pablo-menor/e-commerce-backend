const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: String,
    products: [
        {
            idProduct: String,
            price: Number,
            amount: Number
        }
    ],
    creditCard: String,
    address:  String ,
    status: String
})

module.exports = mongoose.model('Order', orderSchema);