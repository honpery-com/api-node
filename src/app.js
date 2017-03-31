/**
 * api app.
 */
const koa = require('koa');
const app = new koa();
const config = require('../config').app;
const { xerr, xquery, xrouter } = require('./middlewares');
const { db } = require('./common');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

// connect db.
db.init();

// body parser.
app.use(bodyParser());

// register custom middlewares.
xerr.init(app);
xquery.init(app);
xrouter.init(app);

// server.
app.listen(config[process.env.NODE_ENV].port, () => console.log(`Api server running at ${config[process.env.NODE_ENV].port}`));
