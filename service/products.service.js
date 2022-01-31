const Product = require('../model/products.model');

class ProductsService{
    constructor(){}

    async findByInput(input){
        const search = input.replace('+', ' ')
        let result = [];
        try {
            result = await Product.find({ 'keywords': { $regex: search, $options: 'i' } })
        } catch (error) {
            next(err);
        }
       return result;
    }


    async findById(id){
        let result = null;
        try {
            result = await Product.findById(id);
        } catch (error) {
            next(err);
        }
        return result;
    }
}

module.exports = ProductsService;