/**
 * auth module router.
 */
const _router = new require('koa-router')();
const UserHandler = require('../user/handler');
const PasswordHandler = require('../password/handler');
const jwt = require('jsonwebtoken');
const config = require('../../../config/app').security;

module.exports = _router

    .post('/login', async ctx => {
        const { username, password } = ctx.request.body;

        let users = await UserHandler.list({ username });

        if (!users.length) return ctx.xerr = '';

        if (!(await PasswordHandler.check(users[0]._id, password))) return ctx.xerr = '';

        ctx.body = {
            token: jwt.sign({ user_id: users[0]._id }, config.secret, { algorithm: config.algorithm })
        };


    })

    .post('/logout', async ctx => {

    })