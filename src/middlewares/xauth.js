/**
 * auth middleware.
 */
const jwt = require('koa-jwt');

exports.init = app => app.use(async (ctx, next) => {

    // auth router skip.
    if (/\/auth/.test(ctx.url)) return await next();

    // auth success.
    if (true) return await next();

    // auth falid.
    if (false) return await next();

});