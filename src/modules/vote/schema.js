/**
 * vote module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 关联文章 / 评论
    link_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // 操作用户
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // 类型
    type: {
        type: string,
        enum: ['good', 'bad'],
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