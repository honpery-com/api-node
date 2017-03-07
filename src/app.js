/**
 * api app.
 */
const koa = require('koa');
const app = new koa();
const config = require('../config').app;
const middlewares = require('./middlewares');
const { db } = require('./common');
const mongoose = require('mongoose');

// connect db
db.init();

// register custom middlewares.
Object.keys(middlewares).forEach(name => middlewares[name].init(app));

// server.
app.listen(config[process.env.NODE_ENV].port, () => console.log(`Api server running at ${config[process.env.NODE_ENV].port}`));
