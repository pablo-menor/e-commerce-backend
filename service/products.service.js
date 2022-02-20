const Product = require('../model/products.model');

class ProductsService{
    constructor(){}

    async findByInput(input){
        const search = input.replace('+', ' ')
        let result = [];
        try {
            result = await Product.find({ 'keywords': { $regex: search, $options: 'i' } })
        } catch (error) {
          result = [];
        }
       return result;
    }


    async findById(id){
        let result = null;
        try {
            result = await Product.findById(id);
        } catch (error) {
            result = [];
        }
        return result;
    }

    async findAll(){
        return Product.find()
        // .skip(20*(pages-1)) 
        // .limit(20) 
    }

    async findByName(productName){
        return await Product.findOne({name:productName})
    }
}

module.exports = ProductsService;