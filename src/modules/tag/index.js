/**
 * tag module router.
 */
const _router = new require('koa-router')();
const TagHandler = require('./handler');
const { mergeWith } = require('lodash');

module.exports = _router

    .get('/', async ctx => {
        ctx.body = await TagHandler.list(ctx.xquery);
    })

    .get('/:tag_id', async ctx => {
        ctx.body = await TagHandler.detail(ctx.params.tag_id);
    })

    .post('/', async ctx => {
        let newData = mergeWith(ctx.request.body, { create_user: ctx.user_id });
        ctx.body = await TagHandler.create(newData);
    })

    .patch('/:tag_id', async ctx => {
        ctx.body = await TagHandler.update(ctx.params.tag_id, ctx.body);
    })

    .delete('/:tag_id', async ctx => {
        ctx.body = await TagHandler.delete(ctx.params.tag_id);
    })