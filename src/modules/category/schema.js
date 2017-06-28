/**
 * category module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 名称
    name: {
        type: String,
        required: true,
        index: { unique: true }
    },

    // 描述
    description: {
        tyoe: String,
        default: ''
    },

    // 发布人
    create_user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },

    // 创建时间
    create_time: {
        type: Date,
        defualt: Date.now
    },

    // 更新时间
    update_time: {
        type: Date,
        default: Date.now
    },

    // 逻辑删除
    delete: {
        type: Boolean,
        default: false
    }

};