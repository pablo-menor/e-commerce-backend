const userRouter = require('./users.router')

function routerApi(app){
    app.use('/api/users', userRouter)
}

module.exports = routerApi;