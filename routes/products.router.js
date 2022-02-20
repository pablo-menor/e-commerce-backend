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

router.get('/', async (req, res)=>{
    res.json( await service.findAll()); 
})

router.post('/search', async (req, res) => {
    res.json(await service.findByName(req.body.name))
})
module.exports = router;