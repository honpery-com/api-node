/**
 * 用户 表结构
 */
import mongoose from 'mongoose';

export default {

    // 用户名
    username: {
        type: String
    },

    // 昵称
    name: {
        type: String
    },

    // 邮箱
    email: {
        type: String
    },

    // 网站
    website: {
        type: String
    },

    // 来源
    target: {
        type: String
    },

    // 创建时间
    create_time: {
        type: String,
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