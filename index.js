const Koa = require('Koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 定义路由
router
    .get('/', async (ctx, next) => {
        ctx.body = "hello,world"
    })
    .get('/hello', async (ctx, next) => {
        ctx.body = "hello"
    })
    .get('/world', async (ctx, next) => {
        ctx.body = "world"
    })

// 使用路由
app
    .use(router.routes())
    .use(router.allowedMethods())

// 启动服务器
app.listen(3000)
console.log('listen 3000')
