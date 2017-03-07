/**
 * error middleware.
 */
exports.init = app => app.use(async (ctx, next) => {
    await next();
});