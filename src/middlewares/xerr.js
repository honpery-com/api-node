/**
 * error middleware.
 */
const { msg } = require('../../config');
exports.init = app => app.use(async (ctx, next) => {

    if (ctx.xerr) {
        ctx.status = msg[ctx.xerr].code;
        return ctx.body = { type: ctx.xerr, msg: msg[ctx.xerr].msg };
    }

    await next();
});