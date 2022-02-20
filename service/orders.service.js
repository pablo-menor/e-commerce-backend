const Order = require('../model/orders.model');

class OrderService{
    constructor(){
    }
    async findCart(id){
        let result = await Order.findOne({userId: id, status: 'CART'})
        return result;
    }
    async createCart(cart){
        cart.status = 'CART'
        const newCart = new Order(cart)
        let result;
        try {
            result = await newCart.save();
        } catch (error) {
            result = null
        }
        return result;
    }
    async updateCart(reqBody){
        let updated = false;
        try {
            const updtedUser = await Order.updateOne({_id: reqBody._id}, {$set: reqBody});
            console.log(updtedUser);
            updated = true;
        } catch (error) {
            next(err)
        }
        return updated;
    }

}

module.exports = OrderService;