/**
 * picture module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 文件名
    filename: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // 创建人
    create_user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

}