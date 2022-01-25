const express = require('express');
const router = express.Router();
const UsersService = require('../service/users.service');

const service = new UsersService();

router.post('/add', async (req, res)=>{
    await service.addUser(req.body);
    res.json({"message": "User added"});
})

router.get('/:email', async (req, res)=>{
    const user = await service.findUser(req.params.email);
    res.json(user);

})

router.post('/login', async (req, res)=>{
    const user = await service.checkLogin(req.body);
    res.json(user);
})


module.exports = router;
