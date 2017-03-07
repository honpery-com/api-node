/**
 * connect db.
 */
const mongoose = require('mongoose');
const config = require('../../config').app;

exports.init = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}`);
};