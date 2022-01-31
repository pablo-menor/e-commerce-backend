const express = require('express');
const router = express.Router();
const ProductsService = require('../service/products.service')
const service = new ProductsService();


router.get('/search/:input', async (req, res)=>{
    res.json( await service.findByInput(req.params.input)); 
})

router.get('/:id', async (req, res)=>{
    res.json( await service.findById(req.params.id)); 
})

module.exports = router;