const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    section: String,
    description: String,
    price: Number,
    stock: Number,
    keywords: String,
    img: String
    
})

module.exports = mongoose.model('Product', productSchema)

