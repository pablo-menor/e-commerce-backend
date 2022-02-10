const Order = require('../model/orders.model');

class OrderService{
    constructor(){
    }
    async findCart(id){
        let result = await Order.findOne({userId: id}, {status = 'CART'})
        return result;
    }
    async createCart(userId){

    }
    async createOrder(userId){

    }

}

module.exports = OrderService;