/**
 * xquery middleware.
 */
const { cloneDeepWith } = require('lodash');
exports.init = app => app.use(async (ctx, next) => {

    ctx.xquery = { where: {} };

    let featureKeys = ['sort', 'skip', 'page', 'skip', 'limit', 'date_from', 'date_to'];

    Object.keys(ctx.query).forEach(key => {
        if (featureKeys.indexOf(key) >= 0) return ctx.xquery[key] = ctx.query[key];
        ctx.xquery.where[key] = ctx.query[key];
    });

    await next();
});