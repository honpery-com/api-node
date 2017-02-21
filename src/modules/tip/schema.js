/**
 * 便签 表结构
 */
const mongoose = require('mongoose');

module.exports = {

    // 名称
    name: {
        type: String
    },

    // 描述
    description: {
        type: String
    },

    // 正文
    body: {
        type: String
    },

    // 创建人
    create_user: {
        type: mongoose.Types.ObjectId
    },

    // 创建时间
    create_time: {
        type: Date,
        default: Date.now
    },

    // 更新时间
    update_time: {
        type: Date,
        default: Date.now
    },

    // 软删除
    deleted: {
        type: Boolean,
        default: false
    }

};