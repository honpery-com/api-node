/**
 * user module router.
 */
const _router = new require('koa-router')();
const UserHandler = require('./handler');

module.exports = _router

    /**
     * @name user list api.
     * 
     * @host [GET] /user
     * 
     */
    .get('/', async ctx => {
        ctx.body = await UserHandler.list(ctx.xquery);
    })


    /**
     * @name user detail api.
     * 
     * @host [GET] /user/:user_id
     * 
     */
    .get('/:user_id', async ctx => {
        ctx.body = await UserHandler.detail(ctx.params.user_id);
    })


    /**
     * @name user create api.
     * 
     * @host [POST] /user
     */
    .post('/', async ctx => {
        ctx.body = await UserHandler.create(ctx.req.body);
    })


    /**
     * @name user update api.
     * 
     * @host [PATCH] /user/:user_id
     */
    .patch('/:user_id', async ctx => {
        ctx.body = await UserHandler.update(ctx.params.user_id, ctx.req.body);
    })