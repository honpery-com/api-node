/**
 * user module router.
 */
const _router = new require('koa-router')();
const UserHandler = require('./handler');
const { xauth } = require('../../middlewares');

module.exports = _router

    .get('/', xauth('USER_MANAGE'), async ctx => {
        ctx.body = await UserHandler.list(ctx.xquery);
    })

    .get('/:user_id', xauth('USER_MANAGE'), async ctx => {
        ctx.body = await UserHandler.detail(ctx.params.user_id);
    })

    .post('/', xauth('USER_MANAGE'), async ctx => {
        ctx.body = await UserHandler.create(ctx.request.body);
    })

    .patch('/:user_id', xauth('USER_MANAGE'), async ctx => {
        ctx.body = await UserHandler.update(ctx.params.user_id, ctx.request.body);
    })

