const userRouter = require('./users.router');
const productRouter = require('./products.router');
const orderRouter = require('./orders.router')

function routerApi(app){
    app.use('/api/users', userRouter);
    app.use('/api/products', productRouter);
    app.use('/api/orders', orderRouter)
}

module.exports = routerApi;