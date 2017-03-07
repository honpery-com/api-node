/**
 * router.
 */
const fs = require('fs');
const router = new require('koa-router')();
const { root } = require('../../helpers');

fs.readdirSync(root('src/modules')).forEach(dirname => {
    router.use(`/${dirname}`, require(root(`src/modules/${dirname}/index`)).routes());
});

exports.init = app => app.use(router.routes());