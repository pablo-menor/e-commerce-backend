const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    lastName: String,
    birthDate: Date,
    creditCard: [
        {
        number: String,
        cvv: String,
        expiryDate: Date,
        owner: String
        }
    ],
    email: String,
    address: [
        {
            street: String,
            building: String,
            apartment: String,
        }
    ],
    password: String
})

module.exports = mongoose.model('User', userSchema)

