const userRouter = require('./users.router');
const productRouter = require('./products.router');

function routerApi(app){
    app.use('/api/users', userRouter);
    app.use('/api/products', productRouter);
}

module.exports = routerApi;