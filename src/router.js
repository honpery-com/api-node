/**
 * router export.
 */
const fs = require('fs');
const Router = require('koa-router');
const router = new Router();
const {root} = require('./helpers');

fs.readdirSync(root('modules')).map(dirname => {
    router.use(`/${dirname}`, require(`./modules/${dirname}/index`).routes());
});

exports.init = app => {
    app.use(router.routes());
}