const express = require('express');
const app = express();
const PORT = 3008;

//Mongo connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/speedCubeShop').then(db => console.log('Connected to database'));

app.use(express.json());    
const userRouter = require('./routes/users.router')
app.use('/', userRouter )

app.listen(PORT, ()=> console.log(`Server ready on port:  ${PORT}`));
