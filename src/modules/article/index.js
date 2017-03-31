/**
 * article module router.
 */
const _router = new require('koa-router')();
const ArticleHandler = require('./handler');
const { mergeWith } = require('lodash');
const { xauth } = require('../../middlewares');

module.exports = _router

    /**
     * article list api.
     */
    .get('/', async ctx => {
        ctx.body = await ArticleHandler.list(ctx.xquery);
    })

    /**
     * article detail api.
     */
    .get('/:article_id', async ctx => {
        ctx.body = await ArticleHandler.detail(ctx.params.article_id);
    })

    /**
     * article create api.
     */
    .post('/', xauth('ARTICLE_CREATE'), async ctx => {
        let newData = mergeWith(ctx.request.body, { create_user: ctx.user_id });
        ctx.body = await ArticleHandler.create(newData);
    })

    /**
     * article update api.
     */
    .patch('/:article_id', xauth('ARTICLE_UPDATE'), async ctx => {
        ctx.body = await ArticleHandler.update(ctx.params.article_id, ctx.request.body);
    })

    /**
     * article delete api.
     */
    .delete('/:article_id', xauth('ARTICLE_DELETE'), async ctx => {

    })