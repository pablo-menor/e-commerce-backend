const express = require('express')
const router = express.Router()
const OrdersService = require('../service/orders.service')
const service = new OrdersService()

router.get('/cart/:id', async (req, res)=>{
    res.json(await service.findCart(req.params.id))
})

router.post('/cart/', async (req, res)=>{
   res.json(await service.createCart(req.body))
})

router.patch('/cart/', async (req, res)=>{
    console.log(req.body);
    res.json(await service.updateCart(req.body))
 })

module.exports = router;