/**
 * auth middleware.
 */
const jwt = require('jsonwebtoken');
const { security } = require('../../config/app');

exports.init = app => app.use(async (ctx, next) => {
    const { token } = ctx.req.headers;

    if (!/\/auth/.test(ctx.url) && !token) {
        ctx.xerr = "AUTH_NOT_LOGIN";
    }

    ctx.user_id = jwt.decode(token, { cert: security.secret, algorithms: security.algorithm }).user_id;

    await next();
});