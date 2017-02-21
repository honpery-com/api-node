/**
 * 文章 表结构
 */
const mongoose = require('mongoose');

module.exports = {

    // 标题
    title: {
        type: String,
        required: true
    },

    // 描述
    description: {
        type: String
    },

    // 分类
    category: {
        type: mongoose.Types.ObjectId
    },

    // 标签
    tags: [
        {
            type: mongoose.Types.ObjectId
        }
    ],

    // 正文
    body: {
        type: String
    },

    // 创建人
    create_user: {
        type: mongoose.Types.ObjectId
    },

    // 发布时间
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