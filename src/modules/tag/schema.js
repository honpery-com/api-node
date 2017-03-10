/**
 * tag module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 名称
    name: {
        type: String,
        required: true,
        unique: true
    },

    // 描述
    description: {
        type: String,
        default: ''
    },

    // 发布人
    create_user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

}