const express = require('express');
const app = express();
const PORT = 3008;

// Mongo connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/speedCubeShop').then(db => console.log('Connected to database'));

// Middlewares
const cors = require('cors');
app.use(cors({origin: '*'}));
app.use(express.json());    

// Routing
const routerApi = require('./routes/index')
routerApi(app);

app.listen(PORT, ()=> console.log(`Server ready on port:  ${PORT}`));
