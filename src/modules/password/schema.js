/**
 * password schema
 */
const mongoose = require('mongoose');

module.exports = {

    // 关联用户id
    link_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // 密文
    password: {
        type: String,
        required: true
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