/**
 * user module router.
 */
const _router = new require('koa-router')();
const UserHandler = require('./handler');

module.exports = _router

    .get('/', async ctx => {
        ctx.body = await UserHandler.list(ctx.xquery);
    })

    .get('/:user_id', async ctx => {
        ctx.body = await UserHandler.detail(ctx.params.user_id);
    })

    .post('/', async ctx => {
        ctx.body = await UserHandler.create(ctx.request.body);
    })

    .patch('/:user_id', async ctx => {
        ctx.body = await UserHandler.update(ctx.params.user_id, ctx.request.body);
    })

