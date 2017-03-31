/**
 * category module router.
 */
const _router = new require('koa-router')();
const CategoryHandler = require('./handler');
const { mergeWith } = require('lodash');

module.exports = _router
    .get('/', async ctx => {
        ctx.body = await CategoryHandler.list(ctx.xquery);
    })

    .get('/:article_id', async ctx => {
        ctx.body = await CategoryHandler.detail(ctx.params.article_id);
    })

    .post('/', async ctx => {
        let newData = mergeWith(ctx.request.body, { create_user: ctx.user_id });
        ctx.body = await CategoryHandler.create(newData);
    })

    .patch('/:article_id', async ctx => {
        ctx.body = await CategoryHandler.update(ctx.request.body);
    })

    .delete('/:article_id', async ctx => {

    })