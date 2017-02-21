/**
 * app entry.
 */
const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const logger = require('koa-logger');
const cors = require('koa-cors');

// logger middleware.
app.use(logger());

// cors middleware.
app.use(cors());

// router middleware.
router.init(app);

app.listen(7080, () => {
    console.log('API server running at 7080 ports.');
});